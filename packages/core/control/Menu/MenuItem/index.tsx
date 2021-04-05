/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useComponent } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, createElement } from 'react'
import { useValue } from '..'
import styles from './styles'
import Types from './types'

const MenuItem: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
    let [active, setActive, ctx] = useValue(props.value)

    const {
        rightChild,
        leftChild,
        disabled,
        as = ctx.itemContainer || 'div',
        href
    } = props

    const { cs, attributes, events } = useComponent('MenuItem', {
        props,
        styles,
        styleProps: {
            container: ['all'],
        },
    })   

    /**
     * Support controlled
     */
    if (props.active != undefined) {
        active = props.active
    }

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


    const itemProps = {
        ...attr,
        ...attributes,
        ...events.all,
        onChange: undefined, 
        onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (!disabled) {
                setActive()
                ctx.onChange?.(props.value)
                events.all.onClick?.(e)
            }
        },
        onKeyPress: (e: React.KeyboardEvent<HTMLDivElement>) => {
            /**
             * Handle Space/Enter at focus
             */
            if (!disabled && [13, 32].includes(e.charCode)) {
                setActive()
                ctx.onChange?.(props.value)
                e.preventDefault()
            }
            events.all.onKeyPress?.(e)
        },
        ref: containerRef,
        css: cs.container,
    }


    if(as === "a"){
        itemProps.href = href
    }

    return createElement(
        `${as}`,
        itemProps,
        createElement("span", {"data-flow-indent": ""}),
        leftChild && createElement("span", {"data-flow": "left"}, leftChild),
        createElement('span', {"data-flow": "middle"}, props.children || props.title),
        rightChild && createElement('span', {"data-flow": "right"}, rightChild)
    )

}

export default forwardRef(MenuItem)