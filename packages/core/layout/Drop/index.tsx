import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState, useMemo } from 'react'
import ReactDOM from 'react-dom'
import Types from './types'
import dropStyles from './styles'

type GetCoord = (tr: ClientRect, td: ClientRect) => string

let sharedZIndex = 300

const Drop = (props: Types.Props, ref) => {
    const { attributes } = useContainer(props)
    const { children, target: targetRef, onClickOutside, distance = 0, align,
        justify, stretchHeight, stretchWidth, visibility, display } = props
    const styles = useStyles<Types.Styles>(props, dropStyles, 'Drop')
    const dropRef = useRef<HTMLDivElement>(null)

    let getTopCoord: GetCoord = (tr) => toStyle(tr.bottom + distance)
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
            getTopCoord = (tr, dr) => toStyle(tr.top - dr.height - distance)
            setHorizontalPosition()
            break
        case 'bottom':
            getTopCoord = (tr) => toStyle(tr.bottom + distance)
            setHorizontalPosition()
            break
        case 'left':
            getLeftCoord = (tr, dr) => toStyle(tr.left - dr.width - distance)
            setVerticalPosition()
            break
        case 'right':
            getLeftCoord = (tr) => toStyle(tr.right + distance)
            setVerticalPosition()
            break
    }

    useImperativeHandle(ref, () => dropRef.current)

    useEffect(() => {
        const rect = (stretchHeight || stretchWidth) ? targetRef.current?.getBoundingClientRect() : null
        const style = rect && dropRef.current?.style

        if (style) {
            if (stretchHeight) style.height = toStyle(rect.height)
            if (stretchWidth) style.width = toStyle(rect.width)
        }

        if (visibility != 'hidden' && display != 'none') {
            sharedZIndex++
            setPosition()
            document.addEventListener('scroll', setPosition, true)
            document.addEventListener('onflowscroll', setPosition, true)
            document.addEventListener('mouseup', handleClickOutside)
            window.addEventListener('resize', setPosition)

        }
        return () => {
            document.removeEventListener('scroll', setPosition, true)
            document.removeEventListener('onflowscroll', setPosition, true)
            document.removeEventListener('mouseup', handleClickOutside)
            window.removeEventListener('resize', setPosition)
        }
    }, [visibility, display])

    function handleClickOutside(event: MouseEvent) {
        if (onClickOutside && !dropRef?.current?.contains(event.target as Node)) {
            onClickOutside(event, !targetRef?.current?.contains(event.target))
        }
    }

    function setPosition() {
        if (targetRef.current && dropRef.current) {
            const tr: ClientRect = targetRef.current.getBoundingClientRect()
            const dr: ClientRect = dropRef.current.getBoundingClientRect()
            const style = dropRef.current.style

            style.visibility = ''
            style.top = getTopCoord(tr, dr)
            style.left = getLeftCoord(tr, dr)
        }
    }

    /**
     * zIndex magic stuff
     */
    const [clicks, click] = useState(0)
    const zIndex = useMemo(() => sharedZIndex, [visibility, display, clicks])
    attributes.onClick = (e: MouseEvent) => {
        click(clicks+1)
        attributes.onClick?.(e)
    }

    return ReactDOM.createPortal(
        <div
            {...attributes}
            ref={dropRef}
            css={styles.container}
            style={{
                top: 0,
                left: 0,
                visibility: 'hidden',
                zIndex,
                ...attributes.style
            }}
            children={children}
        />,
        document.body
    )
}

function toStyle(value: number) {
    return value.toString() + 'px'
}

export default forwardRef(Drop)
