import createCache, { EmotionCache } from '@emotion/cache';
import { CacheProvider, Global } from '@emotion/core';
import useMemoEffect from '@flow-ui/core/misc/hooks/useSharedObject';
import callProp from '@flow-ui/core/misc/utils/callProp';
import { ThemeProvider } from 'emotion-theming';
import React, { FC, useMemo, useRef } from 'react';
import * as themes from '../../misc/themes';
import MountArea from './MountArea';
import createStyles from './styles';
import ViewportTypes from './types';

const initialContext: ViewportTypes.Context = {
    theme: themes.light,
    browser: {},
}

export const FlowContext = React.createContext(initialContext);

const styleCaches: { [key: string]: EmotionCache } = {};

const Viewport: FC<ViewportTypes.Props> = (props) => {

    const theme = callProp(props.theme, themes) || themes.light;
    const styles = createStyles(theme, false);
    const browser = {}
    // useBrowser();

    const context: ViewportTypes.Context = { theme, browser }

    let cache;
    const ref = useRef(null)

    if (props.wrapper) {
        cache = useMemoEffect(() =>
            createCache({
                key: 'flow',
                container: props.wrapper ? ref.current! : undefined
            })
        )
    } else {
        cache = useMemo(() =>
            createCache({
                key: 'flow',
                container: props.wrapper ? ref.current! : undefined
            })
            , [])
    }

    const Content = (
        <CacheProvider value={cache}>
            {props.children}
            <Global styles={styles.global} />
            <MountArea />
        </CacheProvider>
    );

    return (
        <FlowContext.Provider value={context}>
            <ThemeProvider theme={theme}>
                {props.wrapper ? (
                    <div ref={ref} children={Content} />
                ) : Content}
            </ThemeProvider>
        </FlowContext.Provider>
    )
}

export default Viewport;