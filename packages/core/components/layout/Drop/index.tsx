/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { Type } from 'typescript'
import styles from './styles'
import Types from './types'
import Animation from './animation'

type GetCoord = (tr: ClientRect, td: ClientRect) => string

let sharedZIndex = 300

function toStyle(value: number) {
    return value.toString() + 'px'
}

const Drop: ForwardRefRenderFunction<Types.Ref, Types.Props> = (props, ref) => {

    const { children, target: targetRef, onClickOutside, spacing = 0, align = 'bottom',
        justify, stretchHeight, stretchWidth, visible, stickCursor } = props

    const { classes, attributes, events } = useSystem('Drop', { props, styles, styleProps: { container: ['self'] } })

    const dropRef = useRef<HTMLDivElement>(null)

    const [mountState, setMountState] = useState(visible || false)

    /**
     * zIndex magic stuff
     */
    const [clicks, click] = useState(0)
    const zIndex = useMemo(() => sharedZIndex, [mountState, clicks])
    
    let getTopCoord: GetCoord = (tr) => toStyle(tr.bottom + spacing)
    let getLeftCoord: GetCoord = (tr, dr) => toStyle((tr.left + tr.width / 2) - dr.width / 2)

    const setHorizontalPosition = () => {
        switch (justify) {
            case 'start':
                getLeftCoord = (tr) => toStyle(tr.left)
                break
            case 'center':
                getLeftCoord = (tr, dr) => toStyle((tr.left + tr.width / 2) - dr.width / 2)
                break
            case 'end':
                getLeftCoord = (tr, dr) => toStyle(tr.right - dr.width)
                break
            case 'start-outside':
                getLeftCoord = (tr) => toStyle(tr.left - tr.width)
                break
            case 'end-outside':
                getLeftCoord = (tr) => toStyle(tr.left + tr.width)
                break
        }
    }

    const setVerticalPosition = () => {
        switch (justify) {
            case 'end':
                getTopCoord = (tr) => toStyle(tr.top)
                break
            case 'center':
                getTopCoord = (tr, dr) => toStyle((tr.top + tr.height / 2) - dr.height / 2)
                break
            case 'start':
                getTopCoord = (tr, dr) => toStyle(tr.bottom - dr.height)
                break
            case 'start-outside':
                getTopCoord = (tr) => toStyle(tr.top - tr.height)
                break
        }
    }

    switch (align) {
        case 'top':
            getTopCoord = (tr, dr) => toStyle(tr.top - dr.height - spacing)
            setHorizontalPosition()
            break
        case 'bottom':
            getTopCoord = (tr) => toStyle(tr.bottom + spacing)
            setHorizontalPosition()
            break
        case 'left':
            getLeftCoord = (tr, dr) => toStyle(tr.left - dr.width - spacing)
            setVerticalPosition()
            break
        case 'right':
            getLeftCoord = (tr) => toStyle(tr.right + spacing)
            setVerticalPosition()
            break
    }

    function updatePosition() {
        if (dropRef?.current) {
            const tr: ClientRect = targetRef.current.getBoundingClientRect()
            const dr: ClientRect = dropRef.current.getBoundingClientRect()
            const style = dropRef.current.style

            if (targetRef?.current) {
                style.top = getTopCoord(tr, dr)
                style.left = getLeftCoord(tr, dr)
            }
        }
    }

    function updateStickCursor(e: MouseEvent) {
        if (dropRef?.current) {
            const style = dropRef.current.style

            style.visibility = ''
            style.top = e.clientY + 'px'
            style.left = e.clientX + 'px'
        }
        if (!mountState) {
            setMountState(true)
        }
    }

    function handleClickOutside(event: MouseEvent) {
        if (onClickOutside && !dropRef?.current?.contains(event.target as Node)) {
            onClickOutside(event, !targetRef?.current?.contains(event.target))
        }
    }

    function toggleVisible(state: boolean) {
        if (state) {
            setMountState(true)
        } else {
            if (dropRef?.current) {
                
                const animation = new Animation(props, dropRef.current.style)
                animation.animateOut()

                if (animation.enabled) {
                    setTimeout(() => setMountState(false), animation.duration)
                } else {
                    setMountState(false)
                }
            }
        }
    }

    function afterMount() {
        if (dropRef?.current) {
            dropRef.current.style.visibility = ''
            
            const animation = new Animation(props, dropRef.current.style)
            animation.animateIn()
        }
    }

    function setVisible(state: boolean) {
        if (visible !== undefined) {
            console.warn('Do not use setVisibe on controlled <Drop/> component')
            return
        }
        toggleVisible(state)
    }

    /**
     * Support controlled component
     */
    useEffect(() => {
        if (visible !== undefined) {
            toggleVisible(visible)
        }
    }, [visible])

    useEffect(() => {
        if (stickCursor) {
            window.addEventListener('mousemove', updateStickCursor)
        } else {
            if (mountState) {
                const rect = (stretchHeight || stretchWidth) ? targetRef?.current?.getBoundingClientRect() : null
                const style = rect && dropRef.current?.style

                if (style) {
                    if (stretchHeight) style.height = toStyle(rect.height)
                    if (stretchWidth) style.width = toStyle(rect.width)
                }
                sharedZIndex++

                updatePosition()
                document.addEventListener('scroll', updatePosition, true)
                document.addEventListener('onflowscroll', updatePosition, true)
                document.addEventListener('mouseup', handleClickOutside)
                window.addEventListener('resize', updatePosition)

                afterMount()
            }
        }

        return () => {
            if (stickCursor) {
                window.removeEventListener('mousemove', updateStickCursor)
            } else {
                document.removeEventListener('scroll', updatePosition, true)
                document.removeEventListener('onflowscroll', updatePosition, true)
                document.removeEventListener('mouseup', handleClickOutside)
                window.removeEventListener('resize', updatePosition)
            }
        }
    }, [mountState, stickCursor, align, justify])

    useImperativeHandle(ref, () => ({
        ...dropRef.current,
        updatePosition,
        setVisible
    }))

    if (mountState === false) {
        return null
    }

    return ReactDOM.createPortal(
        <div
            {...attributes}
            {...events}
            onClick={(e) => {
                click(clicks + 1)
                props.onClick?.(e)
            }}
            ref={dropRef}
            css={classes.container}
            style={{
                top: 0,
                left: 0,
                zIndex,
                visibility: 'hidden',
                pointerEvents: stickCursor && 'none',
                ...attributes.style
            } as React.CSSProperties}
            children={children}
        />,
        document.body
    )
}

export default forwardRef(Drop)
