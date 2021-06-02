/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useSystem } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef, useState } from 'react'
import styles from './styles'
import Types from './types'

const Range: ForwardRefRenderFunction<Types.Ref, Types.Props> = (props, ref) => {
  const { min = 0, max = 100, value, defaultValue } = props

  const { classes, attributes, events } = useSystem('Range', {
    props,
    styles,
    styleProps: { container: ['all'] },
    focus: {
      applyDecoration: true,
    },
  })

  const thumbRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(value2Percent(value || defaultValue || 0, min, max))

  useImperativeHandle(ref, () => ({
    container: containerRef.current as HTMLDivElement,
    setValue: (value: number) => {
      setPosition(value2Percent(value, min, max))
    },
  }))

  let isActive = false

  function onUp(e) {
    isActive = false
  }

  function onMove(e, force?: boolean) {
    if (force) {
      isActive = true
    }

    if (!isActive) return
    if (containerRef.current) {
      const { left, right } = containerRef.current.getBoundingClientRect()
      const percent = value2Percent(e.pageX, left, right)

      props.onChange && props.onChange(percent2Value(percent, min, max))

      if (!value && thumbRef.current && trackRef.current) {
        thumbRef.current.style.left = `${percent}%`
        trackRef.current.style.width = `${percent}%`
      }
    }
  }

  /**
   * we should reAdd listener when getting
   * new props otherways scope will be broken
   */
  useEffect(() => {
    // document.addEventListener('touchmove', onMove);
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
    return () => {
      // document.removeEventListener('touchmove', onMove);
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
  }, [props])

  return (
    <div
      {...attributes}
      {...events}
      onChange={undefined}
      css={classes.container}
      ref={containerRef}
      onMouseDown={(e) => onMove(e, true)}
      // onTouchStart={onMove}
    >
      <div css={classes.rail} />
      <div css={classes.track} ref={trackRef} style={{ width: `${position}%` }} />
      <div ref={thumbRef} css={classes.thumb} style={{ left: `${position}%` }} />
    </div>
  )
}

function value2Percent(value: number, min: number, max: number) {
  const percent = ((value - min) / (max - min)) * 100

  if (percent <= 0) return 0
  if (percent >= 100) return 100
  return percent
}

function percent2Value(percent: number, min: number, max: number) {
  return Math.floor(min + ((max - min) / 100) * percent)
}

export default forwardRef(Range)
