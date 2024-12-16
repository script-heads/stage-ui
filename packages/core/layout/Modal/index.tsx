import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { createID, isBrowser, useSystem } from '@stage-ui/system'

import ModalOverlay from './ModalOverlay'
import ModalPortal from './ModalPortal'
import ModalWindow from './ModalWindow'
import styles from './styles'
import Types from './types'

let modelCloseListeners: { key: string; close: () => void }[] = []

if (isBrowser) {
  window?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const lastCloseHandler = modelCloseListeners[modelCloseListeners.length - 1]
      if (!lastCloseHandler) return

      lastCloseHandler.close()
    }
  })
}

function Modal(props: Types.Props, ref: React.ForwardedRef<Types.Ref>) {
  const {
    hideHeader,
    modalId,
    overlayClose = true,
    opened,
    decoration = 'modal',
    title,
    subtitle,
    didOpen,
    didClose,
    onClose,
    children,
  } = props

  const {
    classes,
    attributes,
    events: { onOpen, ...events },
    styleProps,
  } = useSystem('Modal', props, styles)

  const overlayRef = useRef<Types.Ref['overlay']>(null)
  const windowRef = useRef<Types.Ref['window']>(null)

  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [customRender, setCustomRender] = useState<React.ReactElement | null>(null)
  const [currentTitle, setTitle] = useState(title)
  const [currentSubtitle, setSubtitle] = useState(subtitle)
  const [isDataWrapperClick, setIsDataWrapperClick] = useState(false)

  useEffect(() => {
    setTitle(title)
    setSubtitle(subtitle)
  }, [title, subtitle])

  function open(render?: React.ReactElement | null) {
    if (isBrowser) {
      document.body.style.overflow = 'hidden'
    }

    if (render) {
      setCustomRender(render)
    }

    onOpen?.()

    setActive(true)
    setTimeout(() => {
      setVisible(true)
      didOpen?.()
    }, 50)
  }

  function close(currentDidClose?: () => void) {
    if (isBrowser) {
      document.body.style.overflow = ''
    }

    setVisible(false)

    setTimeout(() => {
      setActive(false)
      didClose?.()
      currentDidClose?.()
    }, 300)

    modelCloseListeners = modelCloseListeners.filter((closeHandlerObj) => {
      return closeHandlerObj.key !== modalId
    })

    onClose?.()
  }

  useEffect(() => {
    modelCloseListeners.push({ key: modalId || createID(), close })
  }, [])

  useEffect(() => {
    if (opened === true) open()
    if (opened === false) close()
  }, [opened])

  useImperativeHandle(ref, () => ({
    open,
    close,
    title: currentTitle,
    setTitle,
    subtitle: currentSubtitle,
    setSubtitle,
    render: customRender,
    setRender: setCustomRender,
    overlay: overlayRef.current as Types.Ref['overlay'],
    window: windowRef.current as Types.Ref['window'],
  }))

  if (!active) {
    return null
  }

  const otherStyleProps = {
    visible,
    decoration,
  }

  const getStyles = () => ({ classes, state: otherStyleProps, styleProps })

  return (
    <ModalPortal>
      <ModalOverlay ref={overlayRef} getStyles={getStyles}>
        <div
          data-wrapper
          css={classes.wrapper(otherStyleProps)}
          onMouseDown={(e) =>
            setIsDataWrapperClick(
              // dataset.wrapper is already a boolean value
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              (e.target as HTMLDivElement).dataset.wrapper as boolean,
            )
          }
          onClick={(e) => {
            // checking if a click event started from the data-wrapper
            if (isDataWrapperClick) {
              if ((e.target as HTMLDivElement).dataset.wrapper) {
                if (overlayClose) close()
              }
            }
          }}
        >
          <ModalWindow
            getStyles={getStyles}
            ref={windowRef}
            title={currentTitle}
            subtitle={currentSubtitle}
            hideHeader={hideHeader}
            onClosePressed={() => close()}
            containerAttr={attributes}
            containerEvents={events}
          >
            {customRender !== null ? customRender : children}
          </ModalWindow>
        </div>
      </ModalOverlay>
    </ModalPortal>
  )
}

export default forwardRef(Modal)
