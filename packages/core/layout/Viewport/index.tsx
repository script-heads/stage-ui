import callProp from '@flow-ui/core/misc/utils/callProp'
import { Provider } from '@flow-ui/whale'
import React, { Fragment, RefForwardingComponent, useImperativeHandle, useRef } from 'react'
import * as themes from '../../misc/themes'
import MountArea from './MountArea'
import createStyles from './styles'
import Types from './types'

const Viewport: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const theme = callProp(props.theme, themes) || themes.light
    const styles = createStyles(theme, false)
    const currentRef = useRef<HTMLDivElement>(null)

    const cache = {
        key: 'flow',
        container: props.wrapper ? currentRef.current : undefined
    }

    useImperativeHandle(ref, () =>
        currentRef.current as HTMLDivElement
    )

    const Content = (
        <Fragment>
            {props.children}
            <MountArea />
        </Fragment>
    )

    return (
        <Provider theme={theme} global={styles.global} cache={cache}>
            {props.wrapper
                ? <div ref={currentRef} children={Content} />
                : Content
            }
        </Provider>
    )
}

export default Viewport