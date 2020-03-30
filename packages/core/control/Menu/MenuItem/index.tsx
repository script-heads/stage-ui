import { useComponent } from '@flow-ui/system'
import React, { RefForwardingComponent, forwardRef } from 'react'
import { useValue } from '..'
import styles from './styles'
import Types from './types'

const MenuItem: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    
    const { 
        rightChild,
        leftChild,
        disabled,
     } = props

    const { cs, attributes, events } = useComponent('MenuItem', { 
        props, 
        styles, 
        styleProps: { 
            container: ['all'],
        },
    })

    const [active, setActive, ctx] = useValue(props.value)
    
    const containerRef = React.useRef<HTMLDivElement>(null)
    /**
     * After item active change we're searching upward
     * for sections, and setting active dataset to id
     */
    React.useEffect(() => {
        const recursive = (target: HTMLElement | null) => {
            if (!target) return
            switch (target.dataset.flow) {
                case 'menu':
                    break
                case 'sub-menu':
                    if (active) {
                        target.dataset.flowActive = ''
                    } else {
                        /**
                         * Fixed issue wrong unselecting section when
                         * section still has active items inside
                         */
                        if (target.querySelector('[data-flow-active]') === null) {
                            delete target.dataset.flowActive
                        }
                    }
                default:
                    recursive(target.parentElement)
            }
        }
        recursive(containerRef.current)
    }, [active])

    React.useImperativeHandle(ref, () =>
        containerRef.current as HTMLDivElement
    )

    const attr: Record<string, string> = {
        'data-flow': 'menu-item'
    }
    if (active) attr['data-flow-active'] = ''
    if (disabled) attr['data-flow-disabled'] = ''

    return (
        <div 
            {...attr}
            {...attributes} 
            {...events.all} 
            onChange={undefined} 
            onClick={(e) => {
                if (!disabled) {
                    setActive()
                    ctx.onChange?.(props.value)
                    events.all.onClick?.(e)
                }
            }}
            onKeyPress={(e) => {
                /**
                 * Handle Space/Enter at focus
                 */
                if (!disabled && [13,32].includes(e.charCode)) {
                    setActive()
                    ctx.onChange?.(props.value)
                    e.preventDefault()
                }
                events.all.onKeyPress?.(e)
            }}
            ref={containerRef} css={cs.container}>
            <span data-flow-indent="" />
            {leftChild && <span data-flow="left">{leftChild}</span>}
            <span data-flow="middle">{props.children || props.title}</span>
            {rightChild && <span data-flow="right">{rightChild}</span>}
        </div>
    )
}

export default forwardRef(MenuItem)