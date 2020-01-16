import callProp from '@flow-ui/core/misc/utils/callProp'
import React, { FC, Fragment, useRef } from 'react'
import * as themes from '../../misc/themes'
import MountArea from './MountArea'
import createStyles from './styles'
import ViewportTypes from './types'
import { Provider } from '@flow-ui/whale'

const Viewport: FC<ViewportTypes.Props> = (props) => {

    const theme = callProp(props.theme, themes) || themes.light
    const styles = createStyles(theme, false)
    const ref = useRef(null)

    const cache = {
        key: 'flow',
        container: props.wrapper ? ref.current : undefined
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
                ? <div ref={ref} children={Content} />
                : Content
            }
        </Provider>
    )
}

export default Viewport