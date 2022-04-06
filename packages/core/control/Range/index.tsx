import React, {
  forwardRef,
  ForwardRefRenderFunction,
  MouseEvent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { useSystem } from '@stage-ui/system'

import createClasses from './styles'
import Types from './types'

function value2Percent(value: number, min: number, max: number) {
  const percent = ((value - min) / (max - min)) * 100

  if (percent <= 0) return 0
  if (percent >= 100) return 100
  return percent
}

function percent2Value(percent: number, min: number, max: number) {
  return Math.floor(min + ((max - min) / 100) * percent)
}

const Range: ForwardRefRenderFunction<Types.Ref, Types.Props> = (props, ref) => {
  const { min = 0, max = 100, value, defaultValue } = props

  const {
    classes,
    attributes,
    events: { onChange, ...events },
    styleProps,
  } = useSystem('Range', props, createClasses)

  const thumbRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(
    value2Percent(value || defaultValue || 0, min, max),
  )

  useImperativeHandle(ref, () => ({
    container: containerRef.current as HTMLDivElement,
    setValue: (currentValue: number) => {
      setPosition(value2Percent(currentValue, min, max))
    },
  }))

  let isActive = false

  function onUp() {
    isActive = false
  }

  function onMove(e: Pick<MouseEvent, 'pageX'>, force?: boolean) {
    if (force) {
      isActive = true
    }

    if (!isActive) return
    if (containerRef.current) {
      const { left, right } = containerRef.current.getBoundingClientRect()
      const percent = value2Percent(e.pageX, left, right)

      onChange?.(percent2Value(percent, min, max))

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
      css={[classes.container, styleProps.all]}
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

export default forwardRef(Range)
