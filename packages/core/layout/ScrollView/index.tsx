import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, useEffect, useMemo, useState, useImperativeHandle, RefForwardingComponent } from 'react'
import styles from './styles'
import Types from './types'
import isWebKit from '../../misc/utils/isWebKit'

const isLegacyScrollSupport = isWebKit
const isTouchScreenSupport = Boolean('ontouchstart' in window)

interface MemoParams {
    mounted: boolean
    y: boolean
    x: boolean
    events: boolean
    yBar: null | HTMLDivElement
    yThumb: null | HTMLSpanElement
    xBar: null | HTMLDivElement
    xThumb: null | HTMLSpanElement
    container: null | HTMLDivElement
    content: null | HTMLDivElement
    timeout?: NodeJS.Timeout | null
    mode: Types.Props['mode']
}

const ScrollView: RefForwardingComponent<Types.Ref, Types.Props> = (props, ref) => {

    useImperativeHandle(ref, () => ({
        updateScroll: () => {
            updateScroll({
                deltaX: 0,
                deltaY: 0,
                preventDefault: () => null,
                stopPropagation: () => null
            })
        },
        scrollTop: () => {
            updateScroll({
                deltaX: -1e+10,
                deltaY: -1e+10,
                preventDefault: () => null,
                stopPropagation: () => null
            })
        }
    }))

    const { cs, attributes, events } = useComponent('ScrollView', {
        props,
        styles,
        styleProps: {
            container: ['all'],
            legacy: ['all']
        }
    })

    const {
        shape = 'round',
        size = 'm',
        mode = 'scroll',
        xBarPosition = 'bottom',
        yBarPosition = 'right',
    } = props

    const [active, setActive] = useState(mode === 'always')

    const memo: MemoParams = useMemo(() => ({
        mounted: false,
        y: false,
        x: false,
        events: false,
        yBar: null,
        yThumb: null,
        xBar: null,
        xThumb: null,
        container: null,
        content: null,
        mode: mode || 'scroll'
    }), [])

    const updateY = (e: Types.ScrollParams) => {
        if (!memo.content || !memo.container) return

        const total = memo.content.scrollHeight
        const content = memo.container.offsetHeight

        if (memo.yBar) {
            memo.yBar.style.visibility = total > content ? 'visible' : 'hidden'
        }

        if (total <= content) {
            return false
        }

        // const min = 0
        // const max = -(total - content)

        const ratio = (content / total) * 100
        const offset = -memo.container.scrollTop | memo.content.offsetTop

        let delta = e.deltaY || 0

        if (e.cursorHandle) {
            delta = delta * 100 / ratio
        }

        let value = offset - delta

        // if (value > min) value = min
        // if (value < max) value = max

        if (memo.yBar && memo.yThumb) {
            memo.yBar.style.height = content + 'px'
            memo.yThumb.style.height = content * ratio / 100 + 'px'
            memo.yThumb.style.transform = `translateY(${-(value * ratio / 100)}px)`
        }

        if (!isLegacyScrollSupport) {
            if (offset !== value || value === 0) {
                memo.content.style.top = value + 'px'
                e.preventDefault()
                e.stopPropagation()
    
                return true
            }
        } else {
            e.preventDefault()
            e.stopPropagation()
            return true
        }
        return false
    }

    const updateX = (e: Types.ScrollParams) => {
        if (!memo.content || !memo.container) return

        const total = memo.content.scrollWidth
        const content = memo.container.offsetWidth

        if (memo.xBar) {
            memo.xBar.style.visibility = total > content ? 'visible' : 'hidden'
        }

        if (total <= content) {
            return false
        }

        // const min = 0
        // const max = -(total - content)

        const ratio = (content / total) * 100
        const offset = -memo.container.scrollLeft | memo.content.offsetLeft

        let delta = e.deltaX

        if (e.cursorHandle) {
            delta = delta * 100 / ratio
        }

        let value = offset + -delta

        // if (value > min) value = min
        // if (value < max) value = max

        if (memo.xBar && memo.xThumb) {
            memo.xBar.style.width = content + 'px'
            memo.xThumb.style.width = content * ratio / 100 + 'px'
            memo.xThumb.style.transform = `translateX(${-(value * ratio / 100)}px)`
        }

        if (!isLegacyScrollSupport) {
            if (offset !== value || value === 0) {
                memo.content.style.left = value + 'px'
                e.preventDefault()
                e.stopPropagation()
    
                return true
            }
        } else {
            e.preventDefault()
            e.stopPropagation()
            return true
        }

        return false
    }

    function updateScroll(e: Types.ScrollParams) {
        if (!memo.container || !memo.content) {
            return
        }
        if (isTouchScreenSupport === false) {
            const y = updateY(e)
            const x = updateX(e)
    
            if ((y || x) && memo.mode === 'scroll') {
                setActive(true)
                if (memo.timeout) {
                    clearTimeout(memo.timeout)
                    memo.timeout = null
                }
                memo.timeout = setTimeout(() => {
                    memo.mounted && setActive(false)
                }, 500)
            }
        }
        
        const event = {
            scrollTop: memo.container.scrollTop || memo.content.offsetTop,
            scrollLeft: memo.container.scrollLeft || memo.content.offsetLeft,
            scrollWidth: memo.content.offsetWidth,
            scrollHeight: memo.content.offsetHeight,
        }
        
        props.onScroll?.(event)
        /**
         * Was issue with <Drop/> updateLayoyt
         * in <Select/> component
         */
        if (props.sendFlowScollEvent !== false) {
            document.dispatchEvent(
                new CustomEvent('onflowscroll', {
                    detail: event
                })
            )
        }
    }

    function yMouseDown() {
        memo.y = true
    }

    function xMouseDown() {
        memo.x = true
    }

    function mouseUp() {
        memo.y = false
        memo.x = false
        window.removeEventListener('mouseup', mouseUp)
    }

    function mouseMove(e: MouseEvent) {
        const deltaY = memo.y ? e.movementY : 0
        const deltaX = memo.x ? e.movementX : 0

        if (deltaX !== 0 || deltaY !== 0) {
            updateScroll({
                deltaX,
                deltaY,
                preventDefault: () => null,
                stopPropagation: () => null,
                cursorHandle: true
            })
        }
    }

    /**
     * ScrollTop if content height
     * not fits his container
     */
    useEffect(() => {
        if (!isLegacyScrollSupport) {
            const { content, container } = memo
            if (content && container) {
                if (container.offsetHeight - content.offsetTop > content.offsetHeight) {
                    content.style.top = ''
                }
            }
        }
    })

    useEffect(() => {

        const resize = () => {
            updateScroll({
                deltaX: 0,
                deltaY: 0,
                preventDefault: () => null,
                stopPropagation: () => null
            })
        }

        if (mode === 'always') {
            window.addEventListener('resize', resize)
        } else {
            if (memo.timeout) {
                clearTimeout(memo.timeout)
            }
        }

        memo.mounted = true
        memo.mode = mode
        setActive(memo.mode == 'always' ? true : false)

        if (memo.mode === 'always') {
            updateScroll({
                deltaX: 0,
                deltaY: 0,
                preventDefault: () => null,
                stopPropagation: () => null
            })
        }

        return () => {
            memo.mounted = false
            window.removeEventListener('resize', resize)
            window.removeEventListener('mouseup', mouseUp)
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [props])

    function createRef(ref: HTMLDivElement) {
        if (ref && !memo.events) {
            memo.events = true
            window.addEventListener('mousemove', mouseMove, { passive: true })
            if (memo.yThumb) {
                memo.yThumb.addEventListener('mousedown', yMouseDown, { passive: true })
            }
            if (memo.xThumb) {
                memo.xThumb.addEventListener('mousedown', xMouseDown, { passive: true })
            }
            if (!isLegacyScrollSupport) {
                if (memo.content) {
                    memo.content.addEventListener('wheel', updateScroll)
                }
            }
        }
        memo.container = ref
    }

    return (
        <>
            <div
                {...attributes}
                {...events.all}
                onScroll={updateScroll}
                css={isLegacyScrollSupport ? cs.legacy : cs.container}
                ref={createRef}>
                <div
                    css={cs.content}
                    ref={ref => memo.content = ref}
                    children={props.children}
                />
            </div>
            <div
                css={cs.yBar({ active, size, shape, position: yBarPosition })}
                ref={ref => memo.yBar = ref}
                children={(
                    <span
                        css={cs.yThumb({ active, size, shape })}
                        ref={ref => memo.yThumb = ref}
                    />
                )}
                onMouseEnter={() => {
                    window.addEventListener('mouseup', mouseUp, { passive: true })
                }}
            />
            <div
                css={cs.xBar({ active, size, shape, position: xBarPosition })}
                ref={ref => memo.xBar = ref}
                children={(
                    <span
                        css={cs.xThumb({ active, size, shape })}
                        ref={ref => memo.xThumb = ref}
                    />
                )}
                onMouseEnter={() => {
                    window.addEventListener('mouseup', mouseUp, { passive: true })
                }}
            />
        </>
    )
}

export default forwardRef(ScrollView)