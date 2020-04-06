import { useComponent } from '@stage-ui/system'
import React, { forwardRef, RefForwardingComponent, useEffect, useImperativeHandle, useRef, useState } from 'react'
import ModalOverlay from './ModalOverlay'
import ModalPortal from './ModalPortal'
import ModalWindow from './ModalWindow'
import styles from './styles'
import Types from './types'

const Modal: RefForwardingComponent<Types.Ref, Types.Props> = (props, ref) => {

    const { 
        hideHeader, 
        overlayClose = true,
        opened,
        decoration = 'modal',
    } = props

    const { cs, attributes, events } = useComponent('Modal', { props, styles, styleProps: { window: ['all'] } })

    const overlayRef = useRef<HTMLDivElement>(null)
    const windowRef = useRef<HTMLDivElement>(null)

    const [active, setActive] = useState(false)
    const [visible, setVisible] = useState<boolean>(false)
    const [customContent, setCustomContent] = useState<React.ReactElement | null>(null)
    const [title, setTitle] = useState(props.title)
    const [subtitle, setSubtitle] = useState(props.subtitle)

    useEffect(() => {
        setTitle(props.title)
        setSubtitle(props.subtitle)

    }, [props.title, props.subtitle])

    useEffect(() => {
        if (opened === true) open()
        if (opened === false) close()
    }, [opened])

    useImperativeHandle(ref, () => ({
        open,
        close,
        title,
        setTitle,
        subtitle,
        setSubtitle,
        customContent,
        setCustomContent,
        overlay: overlayRef.current as HTMLDivElement,
        window: windowRef.current as HTMLDivElement
    }))

    function open(customContent?: React.ReactElement) {
        document.body.style.overflow = 'hidden'

        if (customContent) {
            setCustomContent(customContent)
        }

        props.onOpen && props.onOpen()

        setActive(true)
        setTimeout(() => {
            setVisible(true)
            props.didOpen && props.didOpen()
        })
    }

    function close(didClose?: () => void) {
        document.body.style.overflow = ''

        setVisible(false)

        setTimeout(() => {
            setActive(false)
            props.didClose && props.didClose()
            didClose && didClose()
        }, 500)

        props.onClose && props.onClose()
    }

    if (!active) {
        return null
    }

    const styleProps = {
        visible, 
        decoration,
    }
    
    const getStyles = () => ({ cs, state: styleProps })

    return (
        <ModalPortal>
            <ModalOverlay
                ref={overlayRef}
                getStyles={getStyles}
                children={
                    <div data-wrapper css={cs.wrapper(styleProps)} onClick={(e) => {
                        if ((e.target as HTMLDivElement).dataset['wrapper']) {
                            if (overlayClose) close()
                        }
                    }}>
                        <ModalWindow
                            getStyles={getStyles}
                            ref={windowRef}
                            title={title}
                            subtitle={subtitle}
                            hideHeader={hideHeader}
                            onClosePressed={() => close()}
                            children={
                                customContent !== null
                                    ? customContent
                                    : props.children
                            }
                            containerAttr={attributes}
                            containerEvents={events}
                        />
                    </div>
                }
            />
        </ModalPortal>
    )
}

export default forwardRef(Modal)