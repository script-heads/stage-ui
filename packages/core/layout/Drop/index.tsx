import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'

import { isBrowser, useSystem } from '@stage-ui/system'
import ReactDOM from 'react-dom'

import SharedZIndex from '../../utils/SharedZIndex'

import Animation from './animation'
import styles from './styles'
import Types from './types'

type GetCoord = (tr: ClientRect, td: ClientRect) => string

function toStyle(value: number) {
  return `${value.toString()}px`
}

const Drop: ForwardRefRenderFunction<Types.Ref, Types.Props> = (props, ref) => {
  let align = props.align || 'bottom'
  const {
    children,
    target: targetRef,
    onClickOutside,
    spacing = 0,
    justify,
    stretchHeight,
    stretchWidth,
    visible = false,
    stickCursor,
    ...otherProps
  } = props

  const { classes, attributes, events, styleProps } = useSystem(
    'Drop',
    otherProps,
    styles,
  )

  const dropRef = useRef<HTMLDivElement>(null)

  const [mountState, setMountState] = useState(visible || false)

  /**
   * zIndex magic stuff
   */
  const [clicks, click] = useState(0)
  const zIndex = useMemo(() => SharedZIndex.increment, [mountState, clicks])

  let getTopCoord: GetCoord = (tr) => toStyle(tr.bottom + spacing)
  let getLeftCoord: GetCoord = (tr, dr) => toStyle(tr.left + tr.width / 2 - dr.width / 2)

  const setHorizontalPosition = () => {
    switch (justify) {
      case 'start':
        getLeftCoord = (tr) => toStyle(tr.left)
        break
      case 'center':
        getLeftCoord = (tr, dr) => toStyle(tr.left + tr.width / 2 - dr.width / 2)
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
        getTopCoord = (tr, dr) => toStyle(tr.top + tr.height / 2 - dr.height / 2)
        break
      case 'start':
        getTopCoord = (tr, dr) => toStyle(tr.bottom - dr.height)
        break
      case 'start-outside':
        getTopCoord = (tr) => toStyle(tr.top - tr.height)
        break
    }
  }

  function updatePosition() {
    if (dropRef?.current && targetRef?.current) {
      const tr: ClientRect = targetRef.current.getBoundingClientRect()
      const dr: ClientRect = dropRef.current.getBoundingClientRect()
      const { style } = dropRef.current

      if (targetRef?.current && isBrowser) {
        if (!props.align || props.align === 'auto-vertical') {
          const lockedSpace = tr.top + tr.height + spacing
          if (dr.height > window.innerHeight - lockedSpace) {
            align = 'top'
          } else {
            align = 'bottom'
          }
        }
        switch (align) {
          case 'top':
            getTopCoord = (ctr, cdr) => toStyle(ctr.top - cdr.height - spacing)
            setHorizontalPosition()
            break
          case 'bottom':
            getTopCoord = (ctr) => toStyle(ctr.bottom + spacing)
            setHorizontalPosition()
            break
          case 'left':
            getLeftCoord = (ctr, cdr) => toStyle(ctr.left - cdr.width - spacing)
            setVerticalPosition()
            break
          case 'right':
            getLeftCoord = (ctr) => toStyle(ctr.right + spacing)
            setVerticalPosition()
            break
        }

        style.top = getTopCoord(tr, dr)
        style.left = getLeftCoord(tr, dr)
      }
    }
  }

  function updateStickCursor(e: MouseEvent) {
    if (dropRef?.current) {
      const { style } = dropRef.current

      style.visibility = ''
      style.top = `${e.clientY}px`
      style.left = `${e.clientX}px`
    }
    if (!mountState) {
      setMountState(true)
    }
  }

  function handleClickOutside(event: MouseEvent) {
    if (onClickOutside && !dropRef?.current?.contains(event.target as Node)) {
      onClickOutside(event, !targetRef?.current?.contains(event.target as Node))
    }
  }

  function toggleVisible(state: boolean) {
    if (state) {
      setMountState(true)
    } else if (dropRef?.current) {
      const animation = new Animation(props, dropRef.current.style)
      animation.animateOut()

      if (animation.enabled) {
        setTimeout(() => setMountState(false), animation.duration)
      } else {
        setMountState(false)
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
    if (isBrowser) {
      if (stickCursor) {
        window.addEventListener('mousemove', updateStickCursor)
      } else if (mountState) {
        const rect =
          stretchHeight || stretchWidth
            ? targetRef?.current?.getBoundingClientRect()
            : null
        const style = rect && dropRef.current?.style

        if (style) {
          if (stretchHeight) style.height = toStyle(rect?.height || 0)
          if (stretchWidth) style.width = toStyle(rect?.width || 0)
        }
        updatePosition()
        document.addEventListener('scroll', updatePosition, true)
        document.addEventListener('onstagescroll', updatePosition, true)
        document.addEventListener('mouseup', handleClickOutside)
        window.addEventListener('resize', updatePosition)

        afterMount()
      }

      return () => {
        if (stickCursor) {
          window.removeEventListener('mousemove', updateStickCursor)
        } else {
          document.removeEventListener('scroll', updatePosition, true)
          document.removeEventListener('onstagescroll', updatePosition, true)
          document.removeEventListener('mouseup', handleClickOutside)
          window.removeEventListener('resize', updatePosition)
        }
      }
    }
  }, [mountState, stickCursor, align, justify])

  useImperativeHandle(ref, () => ({
    ...dropRef.current,
    updatePosition,
    setVisible,
  }))

  if (mountState === false || !isBrowser) {
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
      css={[classes.container, styleProps.content]}
      style={
        {
          top: 0,
          left: 0,
          zIndex,
          visibility: 'hidden',
          pointerEvents: stickCursor && 'none',
        } as React.CSSProperties
      }
    >
      {children}
    </div>,
    document.body,
  )
}

export default forwardRef(Drop)
