import React, { forwardRef, RefObject, useEffect, useImperativeHandle, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import ModalOverlay from './ModalOverlay'
import ModalPortal from './ModalPortal'
import ModalWindow from './ModalWindow'
import modalStyles from './styles'
import Types from './types'
import useStyles from '../../misc/hooks/useStyles'

const Modal = (props: Types.Props, ref: RefObject<Types.Ref>) => {

    const { hideHeader, fullSize, opened } = props
    const { attributes } = useContainer(props)
    const styles = useStyles<Types.Styles>(props,modalStyles,'Modal')

    const overlayRef = useRef(null)
    const windowRef = useRef(null)

    const [active, setActive] = useState(false)
    const [visible, setVisible] = useState<boolean>(false)
    const [customContent, setCustomContent] = useState<React.ReactElement | null>(null)
    const [center, setCenter] = useState<boolean>(false)
    const [title, setTitle] = useState(props.title)
    const [subtitle, setSubtitle] = useState(props.subtitle)
    
    useEffect(() => {
        setTitle(props.title)
        setSubtitle(props.subtitle)
        window.addEventListener('resize', setVetricalCenter)
        return () => {
            window.removeEventListener('resize', setVetricalCenter)
        }
    }, [props.title, props.subtitle])

    useEffect(()=>{
        if (opened === true) open()
        if (opened === false) close()
    },[opened])

    useImperativeHandle(ref, () => ({
        open,
        close,
        title,
        setTitle,
        subtitle,
        setSubtitle,
        center,
        setCenter,
        customContent,
        setCustomContent,
        overlay: overlayRef.current,
        window: windowRef.current
    }))

    function open(customContent?: React.ReactElement) {
        if (customContent) {
            setCustomContent(customContent)
        }

        props.onOpen && props.onOpen()

        setActive(true)

        setTimeout(() => {
            setVetricalCenter()
            setVisible(true)

            props.didOpen && props.didOpen()
        })
    }

    function close(didClose?: () => void) {
        setVisible(false)

        setTimeout(() => {
            setActive(false)
            props.didClose && props.didClose()
            didClose && didClose()
        }, 500)

        props.onClose && props.onClose()
    }

    function setVetricalCenter() {
        const overlay = ReactDOM.findDOMNode(overlayRef.current) as any
        const modal = ReactDOM.findDOMNode(windowRef.current) as any

        if (!overlay || !modal) return

        const modalWidth = modal.offsetWidth
        const modalHeight = modal.offsetHeight
        const overlayHeight = overlay.offsetHeight

        if (modalHeight > overlayHeight || modalWidth >= window.innerWidth) {
            if (center) return
            setCenter(false)
        } else {
            if (center) return
            setCenter(true)
        }
    }

    if (!active) {
        return null
    }

    return (
        <ModalPortal>
            <ModalOverlay ref={overlayRef} visible={visible} center={center} fullSize={fullSize} styles={styles}>
                <ModalWindow
                    styles={styles}
                    ref={windowRef}
                    visible={visible}
                    center={center}
                    title={title}
                    subtitle={subtitle}
                    fullSize={fullSize}
                    hideHeader={hideHeader}
                    onClosePressed={() => close()}
                    children={
                        customContent !== null
                            ? customContent
                            : props.children
                    }
                    containerAttr={attributes}
                />
            </ModalOverlay>
        </ModalPortal>
    )
}

export default forwardRef(Modal)