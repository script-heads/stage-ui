/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-bitwise */
import isWebKit from '@stage-ui/core/utils/isWebKit'
import { useSystem } from '@stage-ui/system'
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import styles from './styles'
import Types from './types'

const isLegacyScrollSupport = isWebKit
const isTouchScreenSupport = Boolean('ontouchstart' in window)

const ScrollView: ForwardRefRenderFunction<Types.Ref, Types.Props> = (props, ref) => {
  const {
    shape = 'round',
    size = 'm',
    mode = 'scroll',
    xBarPosition = 'bottom',
    yBarPosition = 'right',
    watchElementOffset = 0,
    watchElement,
  } = props
  const { classes, attributes, events, styleProps } = useSystem('ScrollView', props, styles)
  const [active, setActive] = useState(mode === 'always')

  const memo: Types.MemoParams = useMemo(
    () => ({
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
      watchElementListeners: {},
      preventWatchElement: false,
      preventWatchElementTimer: null,
    }),
    [],
  )

  const getOffsetTop = (elem: HTMLDivElement, offsetTop = 0): number => {
    if (!elem || elem.attributes['data-scroll-id']?.value === memo.id) {
      return offsetTop
    }
    offsetTop += elem?.offsetTop
    return getOffsetTop(elem.offsetParent as HTMLDivElement, offsetTop)
  }

  const updateThumb = (e: Types.ScrollParams, axes: 'x' | 'y') => {
    if (!memo.content || !memo.container) return
    const isX = axes === 'x'
    const vScrollSize = isX ? 'scrollWidth' : 'scrollHeight'
    const vScrollDirection = isX ? 'scrollLeft' : 'scrollTop'
    const vOffsetDirection = isX ? 'offsetLeft' : 'offsetTop'
    const vDelta = isX ? 'deltaX' : 'deltaY'
    const vSize = isX ? 'width' : 'height'
    const vDirection = isX ? 'left' : 'top'
    const total = memo.content[vScrollSize] - (props.barOffset || 0) * 2
    const content = memo.container.getBoundingClientRect()[vSize] - (props.barOffset || 0) * 2
    const bar = isX ? memo.xBar : memo.yBar
    const thumb = isX ? memo.xThumb : memo.yThumb

    if (bar) {
      bar.style.visibility = Math.round(total) > Math.round(content) ? 'visible' : 'hidden'
    }

    if (total <= content) {
      return false
    }

    const ratio = (content / total) * 100
    const offset = -memo.container[vScrollDirection] | memo.content[vOffsetDirection]

    let delta = e[vDelta] || 0

    if (e.cursorHandle) {
      delta = (delta * 100) / ratio
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
      bar.style[vSize] = `${content}px`
      thumb.style[vSize] = `${(content * ratio) / 100}px`
      thumb.style.transform = `translate${isX ? 'X' : 'Y'}(${-((value * ratio) / 100)}px)`
    }

    if (!isLegacyScrollSupport) {
      if (offset !== value || value === 0) {
        memo.content.style[vDirection] = `${value}px`
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

  const updateScroll = useMemo(
    () => (e: Types.ScrollParams) => {
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
            if (memo.mounted) setActive(false)
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
      if (!props.preventStageEvents) {
        document.dispatchEvent(
          new CustomEvent('onstagescroll', {
            detail: event,
          }),
        )
      }
      /**
       * find elements with data-id
       */
      const hasListeners = Boolean(Object.keys(memo.watchElementListeners).length)
      if ((watchElement || hasListeners) && memo.preventWatchElement !== true) {
        const elements: HTMLDivElement[] = []
        document
          .querySelectorAll(`[data-scroll-id="${memo.id}"] [data-id]`)
          .forEach((queryElement) => {
            elements.push(queryElement as HTMLDivElement)
          })

        const scrollTop = Math.abs(memo.container.scrollTop || memo.content.offsetTop)
        const listeners = Object.values(memo.watchElementListeners)
        if (watchElement) {
          listeners.unshift({
            fn: watchElement,
            options: {
              offset: watchElementOffset,
            },
          })
        }
        const offset = listeners[listeners.length - 1].options?.offset || watchElementOffset
        for (const el of elements.reverse()) {
          if (scrollTop - getOffsetTop(el) + offset > 0) {
            const id = el.attributes['data-id'].value as string
            if (memo.watchElementId !== id) {
              memo.watchElementId = id
              listeners.forEach((listener) => listener.fn(id, el))
            }
            break
          }
        }
      }

      clearTimeout(memo.preventWatchElementTimer)
      memo.preventWatchElementTimer = setTimeout(() => {
        memo.preventWatchElement = false
        if (memo.container) {
          memo.container.style['scroll-behavior'] = ''
        }
      }, 100)
    },
    [],
  )

  const scrollTo = (x: number, y: number, options?: Types.ScrollToOptions) => {
    memo.preventWatchElement = options?.preventWatchElement || false
    if (isLegacyScrollSupport) {
      if (memo.container) {
        if (options?.smooth) {
          memo.container.style['scroll-behavior'] = 'smooth'
        }
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
    getCurrentState: () => Object.freeze(memo),
    addWatchElementListener: (fn, options) => {
      const listenerId = (~~(Math.random() * 1e8)).toString(16)
      memo.watchElementListeners[listenerId] = { fn, options }
      return () => {
        delete memo.watchElementListeners[listenerId]
      }
    },
    updateScroll: () => {
      updateScroll({
        deltaX: 0,
        deltaY: 0,
        preventDefault: () => null,
        stopPropagation: () => null,
      })
    },
    /**
     * @deprecated use scrollTop()
     */
    onScrollTop: () => {
      const x = isLegacyScrollSupport ? 0 : memo.content?.offsetLeft || -1e10
      const y = isLegacyScrollSupport ? 0 : memo.content?.offsetTop || -1e10
      scrollTo(x, y)
    },
    scrollTo,
    scrollTop: (options?: Types.ScrollToOptions) => {
      const x = isLegacyScrollSupport ? 0 : memo.content?.offsetLeft || -1e10
      const y = isLegacyScrollSupport ? 0 : memo.content?.offsetTop || -1e10
      scrollTo(x, y, options)
    },
    scrollBottom: (options?: Types.ScrollToOptions) => {
      scrollTo(1e10, 1e10, options)
    },
    scrollToElement: (itemId: string, options?: Types.ScrollToElementOptions) => {
      const item = document.querySelector<HTMLDivElement>(`[data-id="${itemId}"]`)
      if (item) {
        scrollTo(item.offsetLeft, getOffsetTop(item) - (options?.offsetTop || 0), options)
        return true
      }
      return false
    },
    container: memo.container,
  }))

  const scrollToHandle = useMemo(
    () => (e: MouseEvent | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
            stopPropagation: () => null,
          })
        }
      }
    },
    [],
  )

  const yMouseDown = useMemo(
    () => () => {
      memo.y = true
    },
    [],
  )

  const xMouseDown = useMemo(
    () => () => {
      memo.x = true
    },
    [],
  )

  const mouseUp = useMemo(
    () => () => {
      memo.y = false
      memo.x = false
      window?.removeEventListener('mouseup', mouseUp)
      window?.removeEventListener('click', mouseUp)
      window?.removeEventListener('mousemove', scrollToHandle)
    },
    [],
  )

  const moveScrollContentByMouse = useMemo(
    () => (e: MouseEvent) => {
      const deltaY = memo.y ? e.movementY : 0
      const deltaX = memo.x ? e.movementX : 0

      if (deltaX !== 0 || deltaY !== 0) {
        updateScroll({
          deltaX,
          deltaY,
          preventDefault: () => null,
          stopPropagation: () => null,
          cursorHandle: true,
        })
      }
    },
    [],
  )

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
        stopPropagation: () => null,
      })
    }

    document.addEventListener('mouseleave', mouseUp)

    if (mode === 'always') {
      window?.addEventListener('resize', resize)
    } else if (memo.timeout) {
      clearTimeout(memo.timeout)
    }

    memo.mounted = true
    memo.mode = mode
    setActive(memo.mode === 'always')

    if (memo.mode === 'always') {
      updateScroll({
        deltaX: 0,
        deltaY: 0,
        preventDefault: () => null,
        stopPropagation: () => null,
      })
    }

    return () => {
      memo.mounted = false
      window?.removeEventListener('resize', resize)
      window?.removeEventListener('mouseup', mouseUp)
      window?.removeEventListener('mousemove', moveScrollContentByMouse)
      document.removeEventListener('mouseleave', mouseUp)
    }
  }, [props])

  const createRef = useMemo(
    () => (currentRef: HTMLDivElement) => {
      if (currentRef && !memo.events) {
        memo.events = true

        if (memo.yThumb) {
          memo.yThumb.addEventListener('mousedown', yMouseDown)
        }
        if (memo.xThumb) {
          memo.xThumb.addEventListener('mousedown', xMouseDown)
        }
        if (!isLegacyScrollSupport) {
          window?.addEventListener('mousemove', moveScrollContentByMouse)
          if (memo.content) {
            memo.content.addEventListener('wheel', updateScroll)
          }
        }
      }
      memo.container = currentRef
    },
    [],
  )

  return (
    <div {...attributes} css={[classes.wrapper, styleProps.container]} data-scroll-id={memo.id}>
      <div
        {...events}
        onScroll={(e) => {
          updateScroll({
            deltaX: 0,
            deltaY: 0,
            preventDefault: e.preventDefault,
            stopPropagation: e.stopPropagation,
          })
        }}
        css={isLegacyScrollSupport ? classes.webkit : classes.container}
        ref={createRef}
      >
        <div
          css={[classes.content, styleProps.content]}
          ref={(currentRef) => {
            memo.content = currentRef
          }}
        >
          {props.children}
        </div>
      </div>
      {mode !== 'hidden' && (
        <>
          <div
            css={classes.yBar({ active, size, shape, position: yBarPosition })}
            ref={(currentRef) => {
              memo.yBar = currentRef
            }}
            onMouseEnter={() => {
              window?.addEventListener('mouseup', mouseUp)
              window?.addEventListener('click', mouseUp)
            }}
            onMouseDown={(e) => {
              yMouseDown()
              scrollToHandle(e)
              window?.addEventListener('mousemove', scrollToHandle)
            }}
            onMouseUp={mouseUp}
          >
            <span
              css={classes.yThumb({ active, size, shape })}
              ref={(currentRef) => {
                memo.yThumb = currentRef
              }}
            />
          </div>
          <div
            css={classes.xBar({ active, size, shape, position: xBarPosition })}
            ref={(currentRef) => {
              memo.xBar = currentRef
            }}
            onMouseEnter={() => {
              window?.addEventListener('mouseup', mouseUp)
              window?.addEventListener('click', mouseUp)
            }}
            onMouseDown={(e) => {
              xMouseDown()
              scrollToHandle(e)
              window?.addEventListener('mousemove', scrollToHandle)
            }}
            onMouseUp={mouseUp}
          >
            <span
              css={classes.xThumb({ active, size, shape })}
              ref={(currentRef) => {
                memo.xThumb = currentRef
              }}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default forwardRef(ScrollView)
