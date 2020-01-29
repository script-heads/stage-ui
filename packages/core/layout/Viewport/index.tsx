import callProp from '@flow-ui/core/misc/utils/callProp'
import React, { Fragment, RefForwardingComponent, useRef } from 'react'
import * as themes from '../../misc/themes'
import MountArea from './MountArea'
import createStyles from './styles'
import Types from './types'
import FlowTypes from '../../types'
import { updateContext, Provider } from '@flow-ui/whale'

export const {Context} = updateContext<FlowTypes.Theme>(themes.light)

const Viewport: RefForwardingComponent<{}, Types.Props> = (props) => {

    const theme = callProp(props.theme, themes) || themes.light
    const styles = createStyles(theme, false)
    const containerRef = useRef<HTMLDivElement>(null)
    
    const cache = {
        key: 'flow',
        container: (props.wrapper && containerRef.current ) ? containerRef.current : undefined
    }

    const Content = (
        <Fragment>
            {props.children}
            <MountArea />
        </Fragment>
    )

    return (
        <Provider theme={theme} global={styles.global} cache={cache}>
            {props.wrapper
                ? <div ref={containerRef} children={Content} />
                : Content
            }
        </Provider>
    )
}

export default Viewport