import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import ReactDOM from 'react-dom'
import Types from './types'
import dropStyles from './styles'

type GetCoord = (tr: ClientRect, td: ClientRect) => string

const Drop = (props: Types.Props, ref) => {

    let timer

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
        const style = dropRef.current?.style

        if (style) {
            stretchHeight &&
                toStyle(targetRef.current?.getBoundingClientRect().height)

            stretchWidth &&
                toStyle(targetRef.current?.getBoundingClientRect().width)
        }

        if (visibility != 'hidden' && display != 'none') {
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
    })

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

    return ReactDOM.createPortal(
        <div
            {...attributes}
            ref={dropRef}
            css={styles.container}
            style={{
                top: 0,
                left: 0,
                visibility: 'hidden',
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
