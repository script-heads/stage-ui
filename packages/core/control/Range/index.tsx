import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent, useEffect, useImperativeHandle, useRef } from 'react'
import styles from './styles'
import Types from './types'

const Range: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const { min = 0, max = 100, value, defaultValue } = props

    const { cs, attributes, events } = useComponent('Range', { props, styles, styleProps: { container: ['all']} })

    const thumbRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const thumbPosition = value2Percent(value || defaultValue || 0, min, max)

    useImperativeHandle(ref, () =>
        containerRef.current as HTMLDivElement
    )

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
                thumbRef.current.style.left = percent + '%'
                trackRef.current.style.width = percent + '%'
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
            {...events.all}
            onChange={undefined}
            css={cs.container} 
            ref={containerRef} 
            onMouseDown={(e) => onMove(e, true)}
            // onTouchStart={onMove}
        >
            <div css={cs.rail} />
            <div
                css={cs.track}
                ref={trackRef}
                style={{ width: thumbPosition + '%' }}
            />
            <div
                ref={thumbRef}
                css={cs.thumb}
                style={{ left: thumbPosition + '%' }}
            />
        </div>
    )
}

function value2Percent(value: number, min: number, max: number) {

    const percent = (value - min) / (max - min) * 100

    if (percent <= 0) return 0
    if (percent >= 100) return 100
    return percent
}

function percent2Value(percent: number, min: number, max: number) {
    return Math.floor(min + (max - min) / 100 * percent)
}

export default forwardRef(Range)