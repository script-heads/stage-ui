import callProp from '@flow-ui/core/misc/utils/callProp'
import React, { Fragment, RefForwardingComponent, useRef } from 'react'
import * as themes from '../../misc/themes'
import MountArea from './MountArea'
import createStyles from './styles'
import Types from './types'
import { Provider } from '@flow-ui/whale'

const Viewport: RefForwardingComponent<{}, Types.Props> = (props) => {

    const theme = (props.theme && typeof props.theme === 'string') ? themes[props.theme] : themes.light
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