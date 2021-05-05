/** @jsx jsx */
import { jsx } from '@emotion/react'
import isWebKit from '@stage-ui/core/misc/utils/isWebKit'
import { useComponent } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, Fragment, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import styles from './styles'
import Types from './types'

const isLegacyScrollSupport = isWebKit
const isTouchScreenSupport = Boolean('ontouchstart' in window)

interface MemoParams {
    id: string
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
    timeout?: any
    mode: Types.Props['mode']
    watchElementId?: string
}

const ScrollView: ForwardRefRenderFunction<Types.Ref, Types.Props> = (props, ref) => {

    const scrollTo = (x: number, y: number, options?: Types.ScrollToOptions) => {
        if (isLegacyScrollSupport) {
            if (memo.container) {
                memo.container.scrollTo(x, y)
            }
        } else {
            updateScroll({
                deltaX: x,
                deltaY: y,
                preventDefault: () => null,
                stopPropagation: () => null,
                ...options,
            })
        }
    }

    useImperativeHandle(ref, () => ({
        updateScroll: () => {
            updateScroll({
                deltaX: 0,
                deltaY: 0,
                preventDefault: () => null,
                stopPropagation: () => null
            })
        },
        /**
         * @deprecated use scrollTop()
         */
        onScrollTop: () => {
            const xy = isLegacyScrollSupport ? 0 : -1e+10
            scrollTo(xy, xy)
        },
        scrollTo,
        scrollTop: (options?: Types.ScrollToOptions) => {
            const xy = isLegacyScrollSupport ? 0 : -1e+10
            scrollTo(xy, xy, options)

        },
        scrollBottom: (options?: Types.ScrollToOptions) => {
            scrollTo(1e+10, 1e+10, options)
        },
        scrollToElement: (itemId: string, options?: Types.ScrollToElementOptions) => {
            const item = document.querySelector<HTMLDivElement>(`[data-id="${itemId}"]`)
            if (item) {
                scrollTo(item.offsetLeft, item.offsetTop + (options?.offsetTop || 0), options)
                return true
            }
            return false
        }
    }))

    const { cs, attributes, events } = useComponent('ScrollView', {
        props,
        styles,
        styleProps: {
            wrapper: ['all'],
            webkit: ['all']
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
        id: (~~(Math.random() * 1e8)).toString(16),
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
        mode: mode || 'scroll',
        watchElementId: '',
    }), [])

    const updateThumb = (e: Types.ScrollParams, axes: 'x' | 'y') => {
        if (!memo.content || !memo.container) return
        const isX = axes === 'x'
        const vScrollSize = isX ? 'scrollWidth' : 'scrollHeight'
        const vScrollDirection = isX ? 'scrollLeft' : 'scrollTop'
        const vOffsetSize = isX ? 'offsetWidth' : 'offsetHeight'
        const vOffsetDirection = isX ? 'offsetLeft' : 'offsetTop'
        const vDelta = isX ? 'deltaX' : 'deltaY'
        const vSize = isX ? 'width' : 'height'
        const vDirection = isX ? 'left' : 'top'

        const total = memo.content[vScrollSize]
        const content = memo.container[vOffsetSize]
        const bar = isX ? memo.xBar : memo.yBar
        const thumb = isX ? memo.xThumb : memo.yThumb

        if (bar) {
            bar.style.visibility = total > content ? 'visible' : 'hidden'
        }

        if (total <= content) {
            return false
        }

        const ratio = (content / total) * 100
        const offset = -memo.container[vScrollDirection] | memo.content[vOffsetDirection]

        let delta = e[vDelta] || 0

        if (e.cursorHandle) {
            delta = delta * 100 / ratio
        }

        const value = offset - delta

        // stop as start
        if (value > 0) {
            return
        }

        // stop at end
        if (-value > total - content) {
            return
        }

        if (bar && thumb) {
            bar.style[vSize] = content + 'px'
            thumb.style[vSize] = content * ratio / 100 + 'px'
            thumb.style.transform = `translate${isX ? 'X' : 'Y'}(${-(value * ratio / 100)}px)`
        }

        if (!isLegacyScrollSupport) {
            if (offset !== value || value === 0) {
                memo.content.style[vDirection] = value + 'px'
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

    const scrollToHandle = useMemo(() => (e: MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!memo.x && !memo.y) return

        e.preventDefault()
        const rect = memo[memo.x ? 'xThumb' : 'yThumb']?.getBoundingClientRect()
        if (rect && memo.container) {
            let delta = 0
            if (memo.x) {
                delta = e.pageX - rect.x - rect.width / 2
            }
            if (memo.y) {
                delta = e.pageY - rect.y - rect.height / 2
            }
            if (isLegacyScrollSupport) {
                const currentScroll = memo.container[memo.x ? 'scrollLeft' : 'scrollTop']
                memo.container?.scrollTo(
                    memo.x ? currentScroll + delta : memo.container.scrollLeft,
                    memo.y ? currentScroll + delta : memo.container.scrollTop,
                )
            } else {
                updateScroll({
                    deltaX: memo.x ? delta : 0,
                    deltaY: memo.y ? delta : 0,
                    preventDefault: () => null,
                    stopPropagation: () => null
                })
            }
        }
    }, [])

    const updateScroll = useMemo(() => (e: Types.ScrollParams) => {
        if (!memo.container || !memo.content) {
            return
        }
        if (isTouchScreenSupport === false) {
            const y = updateThumb(e, 'y')
            const x = updateThumb(e, 'x')

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
        /**
         * find elements with data-id
         */
        if (props.watchElement && e.preventWatchElement !== true) {
            const elements: HTMLDivElement[] = []
            document.querySelectorAll(`[data-scroll-id="${memo.id}"] [data-id]`).forEach((queryElement) => {
                elements.push(queryElement as HTMLDivElement)
            })
            for (const el of elements.reverse()) {
                const scrollTop = memo.container.scrollTop || memo.content.offsetTop
                if (scrollTop - (el.offsetTop - el.offsetHeight) > 0) {
                    const id = el.attributes["data-id"].value
                    if (memo.watchElementId !== id) {
                        memo.watchElementId = id
                        props.watchElement(id, el)
                    }
                    break
                }
            }
        }
    }, [])

    const yMouseDown = useMemo(() => () => {
        memo.y = true
    }, [])

    const xMouseDown = useMemo(() => () => {
        memo.x = true
    }, [])

    const mouseUp = useMemo(() => () => {
        memo.y = false
        memo.x = false
        window.removeEventListener('mouseup', mouseUp)
        window.removeEventListener('mousemove', scrollToHandle)
    }, [])

    const moveScrollContentByMouse = useMemo(() => (e: MouseEvent) => {
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
    }, [])

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

        document.addEventListener('mouseleave', mouseUp)

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
            window.removeEventListener('mousemove', moveScrollContentByMouse)
            document.removeEventListener('mouseleave', mouseUp)
        }
    }, [props])

    const createRef = useMemo(() => (ref: HTMLDivElement) => {
        if (ref && !memo.events) {
            memo.events = true

            if (memo.yThumb) {
                memo.yThumb.addEventListener('mousedown', yMouseDown)
            }
            if (memo.xThumb) {
                memo.xThumb.addEventListener('mousedown', xMouseDown)
            }
            if (!isLegacyScrollSupport) {
                window.addEventListener('mousemove', moveScrollContentByMouse)
                if (memo.content) {
                    memo.content.addEventListener('wheel', updateScroll)
                }
            }
        }
        memo.container = ref
    }, [])

    return (
        <div {...attributes} css={cs.wrapper} data-scroll-id={memo.id}>
            <div
                {...events.all}
                onScroll={updateScroll}
                css={isLegacyScrollSupport ? cs.webkit : cs.container}
                ref={createRef}
                children={(
                    <div
                        css={cs.content}
                        ref={ref => memo.content = ref}
                        children={props.children}
                    />
                )}
            />
            {mode !== 'hidden' && (
                <Fragment>
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
                            window.addEventListener('mouseup', mouseUp)
                        }}
                        onMouseDown={(e) => {
                            yMouseDown()
                            scrollToHandle(e)
                            window.addEventListener('mousemove', scrollToHandle)
                        }}
                        onMouseUp={mouseUp}
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
                            window.addEventListener('mouseup', mouseUp)
                        }}
                        onMouseDown={(e) => {
                            xMouseDown()
                            scrollToHandle(e)
                            window.addEventListener('mousemove', scrollToHandle)
                        }}
                        onMouseUp={mouseUp}
                    />
                </Fragment>
            )}
        </div>
    )
}

export default forwardRef(ScrollView)