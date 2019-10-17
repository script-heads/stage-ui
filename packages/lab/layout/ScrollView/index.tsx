import React, { forwardRef, Fragment, useMemo, useEffect, useRef, useLayoutEffect, useState } from 'react'
import Types from './types'
import Styles from './styles'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import useContainer from '@flow-ui/core/misc/hooks/useContainer'

let timeout: NodeJS.Timeout

interface ScrollParams {
    deltaX: number
    deltaY: number
    preventDefault: () => void
}
const ScrollView = (props: Types.Props, ref: any) => {
    const { mode = 'scroll' } = props
    const [active, setActive] = useState(false)
    const [xDisplay, setXDisplay] = useState(true)
    const [yDisplay, setYDisplay] = useState(true)
    
    const styles = useStyles<Types.Styles, Types.Variants>(props, Styles)

    const { attributes } = useContainer(props)

    let yBarRef: HTMLDivElement | null
    let yThumbRef: HTMLSpanElement | null

    let xBarRef: HTMLDivElement | null
    let xThumbRef: HTMLSpanElement | null

    let containerRef: HTMLDivElement | null
    let contentRef: HTMLDivElement | null

    function updateScroll(e: ScrollParams) {
        if (!containerRef || !contentRef) {
            return
        }
        e.preventDefault()

        const updateY = () => {
            if (!contentRef || !containerRef) return

            const total = contentRef.offsetHeight
            const content = containerRef.offsetHeight

            setYDisplay(total > content)
            if (total <= content || !yBarRef) {
               return
            }

            const delta = e.deltaY
            const offset = contentRef.offsetTop

            const min = 0
            const max = -(total - content)
            const aspect = (content / total) * 100

            let value = offset + -delta

            if (value > min) value = min
            if (value < max) value = max

            contentRef!.style.top = value + 'px'
            yBarRef!.style.height = content + 'px'
            yThumbRef!.style.height = content * aspect / 100 + 'px'
            yThumbRef!.style.transform = `translateY(${-(value * aspect / 100)}px)`
        }
        
        const updateX = () => {
            if (!contentRef || !containerRef) return

            const total = contentRef.offsetWidth
            const content = containerRef.offsetWidth

            setXDisplay(total > content)

            if (total <= content || !xBarRef) {
               return
            }

            const delta = e.deltaX
            const offset = contentRef.offsetLeft
            const min = 0
            const max = -(total - content)
            const aspect = (content / total) * 100

            let value = offset + -delta

            if (value > min) value = min
            if (value < max) value = max

            contentRef!.style.left = value + 'px'
            xBarRef!.style.width = content + 'px'
            xThumbRef!.style.width = content * aspect / 100 + 'px'
            xThumbRef!.style.transform = `translateX(${-(value * aspect / 100)}px)`
        }

        updateY()
        updateX()

        if (mode === 'scroll') {
            setActive(true)
            if (timeout) {
                clearTimeout(timeout)
            }
            timeout = setTimeout(() => setActive(false), 250)
        }
    }

    useEffect(() => {
        setActive(mode == 'always' ? true : false)
    }, [mode])

    useEffect(() => {
        updateScroll({
            deltaX: 0,
            deltaY: 0,
            preventDefault: () => null
        })
    }, [])

    return (
        <div
            {...attributes}
            css={styles.container}
            ref={ref => {
                if (ref) {
                    ref.removeEventListener('wheel', updateScroll)
                    ref.addEventListener('wheel', updateScroll)
                }
                containerRef = ref
            }}
            children={(
                <>
                    <div
                        css={styles.content}
                        ref={ref => { contentRef = ref }}
                        children={props.children}
                    />
                    {yDisplay && (
                        <div
                            css={styles.yBar({ active })}
                            ref={ref => { yBarRef = ref }}
                            children={(
                                <span
                                    css={styles.yThumb({ active })}
                                    ref={ref => { yThumbRef = ref }}
                                />
                            )}
                        />
                    )}
                    {xDisplay && (
                        <div
                            css={styles.xBar({ active })}
                            ref={ref => { xBarRef = ref }}
                            children={(
                                <span
                                    css={styles.xThumb({ active })}
                                    ref={ref => { xThumbRef = ref }}
                                />
                            )}
                        />
                    )}
                </>
            )}
        />
    )
}

export default forwardRef(ScrollView)