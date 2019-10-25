import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import React, { forwardRef, useEffect, useMemo, useState, useImperativeHandle, RefForwardingComponent } from 'react'
import Styles from './styles'
import Types from './types'

interface ScrollParams {
    deltaX: number
    deltaY: number
    preventDefault: () => void
    stopPropagation: () => void
    cursorHandle?: boolean
}

const ScrollView: RefForwardingComponent<Types.Ref, Types.Props> = (props, ref) => {

    useImperativeHandle(ref, () => ({
        scrollTop: () => {
            updateScroll({
                deltaX: -1e+10,
                deltaY: -1e+10,
                preventDefault: () => null,
                stopPropagation: () => null
            })
        }
    }))

    const styles = useStyles<Types.Styles>(props, Styles)
    const { attributes } = useContainer(props)
    const { 
        shape = 'round', 
        size = 'medium', 
        mode = 'scroll',
        xBarPosition = 'bottom',
        yBarPosition = 'right',
    } = props;

    const [active, setActive] = useState(mode === 'always')
    const memo: any = useMemo(() => ({
        y: false,
        x: false,
        events: false,
        yBar: null,
        yThumb: null,
        xBar: null,
        xThumb: null,
        container: null,
        content: null,
        timeout: null,
        mode: mode || 'scroll'
    }), []);

    function updateScroll(e: ScrollParams) {
        if (!memo.container || !memo.content) {
            return
        }

        const updateY = () => {
            if (!memo.content || !memo.container) return

            const total = memo.content.offsetHeight
            const content = memo.container.offsetHeight

            memo.yBar.style.visibility = total > content ? 'visible' : 'hidden'

            if (total <= content) {
                return false
            }

            const min = 0
            const max = -(total - content)
            const ratio = (content / total) * 100
            const offset = memo.content.offsetTop
            let delta = e.deltaY

            if (e.cursorHandle) {
                delta = delta * 100 / ratio
            }

            let value = offset - delta

            if (value > min) value = min
            if (value < max) value = max

            if (offset !== value || value === 0) {

                memo.content!.style.top = value + 'px'
                memo.yBar!.style.height = content + 'px'
                memo.yThumb!.style.height = content * ratio / 100 + 'px'
                memo.yThumb!.style.transform = `translateY(${-(value * ratio / 100)}px)`

                e.preventDefault()
                e.stopPropagation()

                return true
            }
            return false
        }

        const updateX = () => {
            if (!memo.content || !memo.container) return

            const total = memo.content.offsetWidth
            const content = memo.container.offsetWidth

            memo.xBar.style.visibility = total > content ? 'visible' : 'hidden'

            if (total <= content) {
                return false
            }

            const min = 0
            const max = -(total - content)
            const ratio = (content / total) * 100
            const offset = memo.content.offsetLeft
            let delta = e.deltaX

            if (e.cursorHandle) {
                delta = delta * 100 / ratio
            }

            let value = offset + -delta

            if (value > min) value = min
            if (value < max) value = max

            if (offset !== value || value === 0) {
                memo.content!.style.left = value + 'px'
                memo.xBar!.style.width = content + 'px'
                memo.xThumb!.style.width = content * ratio / 100 + 'px'
                memo.xThumb!.style.transform = `translateX(${-(value * ratio / 100)}px)`

                e.preventDefault()
                e.stopPropagation()

                return true
            }
            return false
        }

        const y = updateY();
        const x = updateX();

        if ((y || x) && memo.mode === 'scroll') {
            setActive(true)
            if (memo.timeout) {
                clearTimeout(memo.timeout)
                memo.timeout = null
            }
            memo.timeout = setTimeout(() => setActive(false), 500)
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

    useEffect(() => {
        if (memo.timeout && mode !== 'always') {
            clearTimeout(memo.timeout)
        }
        memo.mode = mode
        setActive(memo.mode == 'always' ? true : false)
        updateScroll({
            deltaX: 0,
            deltaY: 0,
            preventDefault: () => null,
            stopPropagation: () => null
        })
        return () => {
            window.removeEventListener('mouseup', mouseUp)
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [props])

    function createRef(ref) {
        if (ref && !memo.events) {
            memo.events = true
            window.addEventListener('mouseup', mouseUp, { passive: true })
            window.addEventListener('mousemove', mouseMove, { passive: true })
            memo.yThumb!.addEventListener('mousedown', yMouseDown, { passive: true })
            memo.xThumb!.addEventListener('mousedown', xMouseDown, { passive: true })
            memo.content!.addEventListener('wheel', updateScroll)
        }
        memo.container = ref
    }

    return (
        <div {...attributes} css={styles.container} ref={createRef}>
            <div
                css={styles.content}
                ref={ref => memo.content = ref}
                children={props.children}
            />
            <div
                css={styles.yBar({ active, size, shape, position: yBarPosition })}
                ref={ref => memo.yBar = ref}
                children={(
                    <span
                        css={styles.yThumb({ active, size, shape })}
                        ref={ref => memo.yThumb = ref}
                    />
                )}
            />
            <div
                css={styles.xBar({ active, size, shape, position: xBarPosition })}
                ref={ref => memo.xBar = ref}
                children={(
                    <span
                        css={styles.xThumb({ active, size, shape })}
                        ref={ref => memo.xThumb = ref}
                    />
                )} />
        </div>
    )
}

export default forwardRef(ScrollView)