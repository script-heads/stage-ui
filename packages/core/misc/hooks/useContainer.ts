import { useState } from 'react'
import {useTheme} from '@flow-ui/core'

export default (props, mouseFocus?: boolean, disableDecoration?: boolean) => {

    const [focus, setFocus] = useState(false)
    const theme = useTheme()
    let isMouseDown = false

    const attributes = {
        id: props.id,
        className: props.className,
        draggable: props.draggable,
        style: {
            ...focus && !disableDecoration && {
                outline: 'none',
                ...theme.assets.focus
            },
            ...props.style
        },
        tabIndex: props.tabIndex,
        role: props.role,
        onBlur: (event) => {
            event.stopPropagation()
            setFocus(false)
            props.onBlur && props.onBlur(event)
        },
        onFocus: (event) => {
            event.stopPropagation()
            if (mouseFocus || !isMouseDown) {
                setFocus(true)
            }
            props.onFocus && props.onFocus(event)
        },
        onMouseDown: (event) => {
            isMouseDown = true
            props.onMouseDown && props.onMouseDown(event)
        },
        onMouseUp: (event) => {
            isMouseDown = false
            props.onMouseUp && props.onMouseUp(event)
        },
        onKeyPress: props.onKeyPress,
        onKeyDown: (event) => {
            props.onKeyPress && props.onKeyPress(event)
            if (event.key === 'Enter' && props.onEnter) {
                props.onEnter(event)
            }
            if (event.key === 'Esc' && props.onEsc) {
                props.onEsc(event)
            }
            props.onKeyDown && props.onKeyDown(event)
        },
        onContextMenu: props.onContextMenu,
        onKeyUp: props.onKeyUp,
        onClick: props.onClick,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onTouchStart: props.onTouchStart,
        onTouchEnd: props.onTouchEnd,

        onDrag: props.onDrag,
        onDragEnd: props.onDragEnd,
        onDragEnter: props.onDragEnter,
        onDragExit: props.onDragExit,
        onDragLeave: props.onDragLeave,
        onDragOver: props.onDragOver,
        onDragStart: props.onDragStart,
        onDrop: props.onDrop,

        ...props.attrs && props.attrs
    }

    return {
        attributes,
        focus
    }
}