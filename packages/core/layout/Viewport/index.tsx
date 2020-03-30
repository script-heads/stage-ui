import React, { Fragment, RefForwardingComponent, useRef, forwardRef, useImperativeHandle } from 'react'
import * as themes from '@flow-ui/core/misc/themes'
import MountArea from './MountArea'
import styles from './styles'
import Types from './types'
import { Provider, useComponent } from '@flow-ui/system'

const Viewport: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    
    const { wrapper, cache } = props
    const theme = (typeof props.theme === 'string' 
        ? themes[props.theme] 
        : props.theme
        ) || themes.light

    const viewportRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => viewportRef.current as HTMLDivElement)

    const EmotionCache = {
        key: 'flow',
        container:  (viewportRef && viewportRef.current) || undefined,
        ...cache
    }

    const { cs, attributes, events } = useComponent('Viewport', {
        props,
        styles,
        styleProps: {
            container: ['all']
        },
        theme,
    }, { wrapper })

    const Content = (
        <Provider theme={theme} global={!wrapper ? cs.container : undefined} cache={EmotionCache}>
            <Fragment>
                {props.children}
                <MountArea />
            </Fragment>
        </Provider>
    )

    return wrapper 
        ? <div 
            {...attributes} 
            {...events.all} 
            ref={viewportRef} 
            children={Content} 
            css={cs.container} 
        />
        : Content
}

export default forwardRef(Viewport)