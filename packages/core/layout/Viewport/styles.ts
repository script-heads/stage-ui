import SystemTypes from '@stage-ui/system/types'
import Types from './types'

const styles: SystemTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme, params: { wrapper?: boolean }) => {

    const attachTheme = {
        background: theme.color.background.rgb().string(),
        color: theme.color.onBackground.rgb().string(),
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        'p': theme.assets.typography.paragraph,
        'h1': theme.assets.typography.header.l,
        'h2': theme.assets.typography.header.m,
        'h3': theme.assets.typography.header.s,
        'h4': theme.assets.typography.header.xs,
        ...theme.assets.typography.text.m
    }

    const reset = params.wrapper ? '' :
        `
            html, body, div, span, applet, object, iframe,
            blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, fieldset, form, label, legend,
            table, caption, tbody, tfoot, thead, tr, th, td,
            article, aside, canvas, details, embed, 
            figure, figcaption, footer, header, hgroup, 
            menu, nav, output, ruby, section, summary,
            time, mark, audio, video {
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                vertical-align: baseline;
            },
            ::-webkit-scrollbar {
                display: none
            }
        `

    return {
        container: [
            reset,
            props.wrapper
                ? attachTheme
                : { 'html': attachTheme },
            props.global
        ]
    }
}

export default styles