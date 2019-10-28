import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import ReactDOM from 'react-dom'
import Types from './types'
import dropStyles from './styles'

const Drop = (props: Types.Props, ref) => {

    const { attributes } = useContainer(props)
    const { children, target: targetRef, onClickOutside, distance = 0, align, justify } = props
    const styles = useStyles<Types.Styles>(props, dropStyles, 'Drop')
    const dropRef = useRef<HTMLDivElement>(null)
    
    let getTopCoord = (tr, dr) => toStyle(tr.bottom + distance)
    let getLeftCoord = (tr, dr) => toStyle((tr.left + tr.width / 2) - dr.width / 2)

    switch (align) {
        case 'top':
            getTopCoord = (tr, dr) => toStyle(tr.top - dr.height - distance)
            switch (justify) {
                case 'start':
                    getLeftCoord = (tr, dr) => toStyle(tr.left)
                    break
                case 'center':
                    getLeftCoord = (tr, dr) => toStyle((tr.left + tr.width / 2) - dr.width / 2)
                    break
                case 'end':
                    getLeftCoord = (tr, dr) => toStyle(tr.right - dr.width)
                    break
                case 'start-outside':
                    getLeftCoord = (tr, dr) => toStyle(tr.left - tr.width)
                    break
                case 'end-outside':
                    getLeftCoord = (tr, dr) => toStyle(tr.left + tr.width)
                    break
            }
            break
        case 'bottom':
            getTopCoord = (tr, dr) => toStyle(tr.bottom + distance)
            switch (justify) {
                case 'start':
                    getLeftCoord = (tr, dr) => toStyle(tr.left)
                    break
                case 'center':
                    getLeftCoord = (tr, dr) => toStyle((tr.left + tr.width / 2) - dr.width / 2)
                    break
                case 'end':
                    getLeftCoord = (tr, dr) => toStyle(tr.right - dr.width)
                    break
                case 'start-outside':
                    getLeftCoord = (tr, dr) => toStyle(tr.left - tr.width)
                    break
                case 'end-outside':
                    getLeftCoord = (tr, dr) => toStyle(tr.left + tr.width)
                    break
            }
            break
        case 'left':
            getLeftCoord = (tr, dr) => toStyle(tr.left - dr.width - distance)
            switch (justify) {
                case 'end':
                    getTopCoord = (tr, dr) => toStyle(tr.top)
                    break
                case 'center':
                    getTopCoord = (tr, dr) => toStyle((tr.top + tr.height / 2) - dr.height / 2)
                    break
                case 'start':
                    getTopCoord = (tr, dr) => toStyle(tr.bottom - dr.height)
                    break
                case 'start-outside':
                    getTopCoord = (tr, dr) => toStyle(tr.top - tr.height)
                    break
            }
            break
        case 'right':
            getLeftCoord = (tr, dr) => toStyle(tr.right + distance)
            switch (justify) {
                case 'end':
                    getTopCoord = (tr, dr) => toStyle(tr.top)
                    break
                case 'center':
                    getTopCoord = (tr, dr) => toStyle((tr.top + tr.height / 2) - dr.height / 2)
                    break
                case 'start':
                    getTopCoord = (tr, dr) => toStyle(tr.bottom - dr.height)
                    break
                case 'start-outside':
                    getTopCoord = (tr, dr) => toStyle(tr.top - tr.height)
                    break
            }
            break
    }

    useImperativeHandle(ref, () => {
        return dropRef.current
    })

    useEffect(() => {
        const style = dropRef.current?.style

        if (props.stretchHeight && style) {
            style.height = toStyle(targetRef.current?.getBoundingClientRect().height)
        }

        if (props.stretchWidth && style) {
            style.width = toStyle(targetRef.current?.getBoundingClientRect().width)
        }
        
        if (props.visibility != 'hidden' && props.display != 'none') {
            setPosition()
            document.addEventListener('wheel', setPosition, true)
            document.addEventListener('mouseup', handleClickOutside)
            window.addEventListener('resize', setPosition)

        }
        return () => {
            document.removeEventListener('wheel', setPosition, true)
            document.removeEventListener('mouseup', handleClickOutside)
            window.removeEventListener('resize', setPosition)
        }
    })

    function handleClickOutside(event: any) {
        dropRef.current && targetRef && targetRef.current && 
            !dropRef.current.contains(event.target) &&
            onClickOutside && onClickOutside(event, targetRef ? !targetRef.current.contains(event.target) : undefined)
    }

    function setPosition() {
        if (targetRef.current && dropRef.current) {
            const tr = targetRef.current.getBoundingClientRect()
            const dr = dropRef.current.getBoundingClientRect()
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
