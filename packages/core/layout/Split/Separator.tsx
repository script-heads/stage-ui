import React, { useEffect, useRef } from 'react'
import Types from './types'

const Separator = (props: Types.SeparatorProps) => {
  const { defaultVertical } = props
  const ref = useRef<HTMLDivElement>(null)
  let active: boolean = false
  let move: boolean = false

  const mouseDown = () => {
    active = true
  }
  const mouseUp = () => {
    const container = props.container()
    if (move && container.current) {
      container.current.onChange?.()
    }
    active = false
    move = false
  }

  const mouseMove = (e: MouseEvent) => {
    const container = props.container()
    const prev = props.prev()
    const next = props.next()

    if (active && container.current && prev.current && next.current) {
      const { vertical } = container.current

      const movement = vertical ? e.movementY : e.movementX

      if (movement === 0) return

      const prevSize = (vertical ? prev.current.offsetHeight : prev.current.offsetWidth) + movement
      const nextSize = (vertical ? next.current.offsetHeight : next.current.offsetWidth) - movement
      const containerSize = vertical
        ? container.current.offsetHeight
        : container.current.offsetWidth
      const total = prevSize + nextSize
      const otherSize = containerSize - prevSize - nextSize
      const percent = 100 - (otherSize / containerSize) * 100
      let prevPercent = (prevSize / total) * percent
      let nextPercent = (nextSize / total) * percent
      /**
       * Collisions fix
       */
      if (prevPercent < 0) {
        nextPercent += prevPercent
        prevPercent = 0
      }
      if (nextPercent < 0) {
        prevPercent += nextPercent
        nextPercent = 0
      }
      /**
       * Setting values
       */
      prev.current.style[vertical ? 'height' : 'width'] = `${prevPercent}%`
      next.current.style[vertical ? 'height' : 'width'] = `${nextPercent}%`

      move = true
      container.current.onMove?.()
    }
  }

  useEffect(() => {
    window?.addEventListener('mouseup', mouseUp)
    window?.addEventListener('mousemove', mouseMove)
    ref.current?.addEventListener('mousedown', mouseDown)
    return () => {
      window?.removeEventListener('mouseup', mouseUp)
      window?.removeEventListener('mousemove', mouseMove)
      ref.current?.removeEventListener('mousedown', mouseDown)
    }
  }, [])

  return (
    <div
      style={{
        display: 'block',
        position: 'relative',
        [defaultVertical ? 'height' : 'width']: '0px',
        [defaultVertical ? 'width' : 'height']: '100%',
      }}
    >
      <div
        ref={ref}
        style={{
          zIndex: 100,
          display: 'block',
          position: 'absolute',
          cursor: defaultVertical ? 'row-resize' : 'col-resize',
          userSelect: 'none',
          [defaultVertical ? 'top' : 'left']: `-${props.areaSize / 2}px`,
          [defaultVertical ? 'height' : 'width']: `${props.areaSize}px`,
          [defaultVertical ? 'width' : 'height']: '100%',
        }}
      />
    </div>
  )
}

export default Separator
