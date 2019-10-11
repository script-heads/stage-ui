import React, { useEffect, useRef } from 'react'
import { SplitElRef } from '.';

interface SeparatorProps {
    defaultVertical: boolean
    container: () => SplitElRef
    prev: () => HTMLDivElement
    next: () => HTMLDivElement
    onMove: () => void
    onDone: () => void
}

const Separator = (props: SeparatorProps) => {
    const vertical = props.defaultVertical;
    const ref = useRef<HTMLDivElement>(null)
    let active: boolean = false
    let move: boolean = false

    const mouseDown = (e: MouseEvent) => { 
        active = true 
    }
    const mouseUp = (e: MouseEvent) => {
        if (move) {
            props.onDone();
        } 
        active = false 
        move = false 
    }
    
    const mouseMove = (e: MouseEvent) => {
        if (active) {
            const container = props.container()!
            const vertical = container._vertical;

            let movement = vertical ? e.movementY : e.movementX

            if (movement === 0) return;
            
            const prev = props.prev()
            const next = props.next()
            const prevSize = (vertical ? prev.offsetHeight : prev.offsetWidth) + movement
            const nextSize = (vertical ? next.offsetHeight : next.offsetWidth) - movement
            const containerSize = vertical ? container.offsetHeight : container.offsetWidth
            const total = prevSize + nextSize
            const otherSize = containerSize - prevSize - nextSize
            const percent = 100 - (otherSize / containerSize * 100)
            const prevPercent = (prevSize / total * percent) + '%'
            const nextPercent = (nextSize / total * percent) + '%'

            prev.style[vertical ? 'height' : 'width'] = prevPercent
            next.style[vertical ? 'height' : 'width'] = nextPercent

            move = true;
            props.onMove();
        }
    }

    useEffect(() => {
        window.addEventListener('mouseup', mouseUp)
        window.addEventListener('mousemove', mouseMove)
        ref.current!.addEventListener('mousedown', mouseDown)
        return () => {
            window.removeEventListener('mouseup', mouseUp)
            window.removeEventListener('mousemove', mouseMove)
            ref.current!.removeEventListener('mousedown', mouseDown)
        }
    }, [])

    return (
        <div style={{
            display: 'block',
            position: 'relative',
            [vertical ? 'height': 'width']: "0px",
            [vertical ? 'width': 'height']:"100%",
        }}>
            <div
                ref={ref} 
                style={{
                    zIndex: 100,
                    display: 'block',
                    position: 'absolute',
                    cursor: vertical ? 'row-resize' : 'col-resize', 
                    userSelect:"none",
                    [vertical ? 'top': 'left']: "-2px",
                    [vertical ? 'height': 'width']: "4px",
                    [vertical ? 'width': 'height']:"100%",
                }}
            />
        </div>
    )
}

export default Separator
