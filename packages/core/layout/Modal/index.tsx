import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

import { useSystem } from '@stage-ui/system'

import ModalOverlay from './ModalOverlay'
import ModalPortal from './ModalPortal'
import ModalWindow from './ModalWindow'
import styles from './styles'
import Types from './types'

function Modal(props: Types.Props, ref: React.ForwardedRef<Types.Ref>) {
  const {
    hideHeader,
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

  useEffect(() => {
    setTitle(title)
    setSubtitle(subtitle)
  }, [title, subtitle])

  function open(render?: React.ReactElement | null) {
    document.body.style.overflow = 'hidden'

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
    document.body.style.overflow = ''

    setVisible(false)

    setTimeout(() => {
      setActive(false)
      currentDidClose?.()
      currentDidClose?.()
    }, 300)

    onClose?.()
  }

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
          onClick={(e) => {
            if ((e.target as HTMLDivElement).dataset.wrapper) {
              if (overlayClose) close()
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
