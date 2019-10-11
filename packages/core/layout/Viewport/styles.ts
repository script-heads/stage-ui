import { css } from '@emotion/core';
import typography from '../../misc/typography';

export default (theme, wrapper) => {

    const global = css(
        {
            background: theme.color.background.css(),
            color: theme.color.onBackground.css(),
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            'a': theme.typography.anchor,
            'p': theme.typography.paragraph,
            'h1': theme.typography.header[1],
            'h2': theme.typography.header[2],
            'h3': theme.typography.header[3],
            'h4': theme.typography.header[4],
            ...typography.text[1]
        },
        `
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
        `
    )

    return {
        global: css(
            `
                div, span, applet, object, iframe,
                h1, h2, h3, h4, h5, h6, p, blockquote, pre,
                a, abbr, acronym, address, big, cite, code,
                del, dfn, em, img, ins, kbd, q, s, samp,
                small, strike, strong, sub, sup, tt, var,
                b, u, i, center,
                dl, dt, dd,
                fieldset, form, label, legend,
                table, caption, tbody, tfoot, thead, tr, th, td,
                article, aside, canvas, details, embed, 
                figure, figcaption, footer, header, hgroup, 
                menu, nav, output, ruby, section, summary,
                time, mark, audio, video {
                    margin: 0;
                    padding: 0;
                    border: 0;
                    font: inherit;
                    vertical-align: baseline;
                }
                article, aside, details, figcaption, figure, 
                footer, header, hgroup, menu, nav, section {
                    display: block;
                }
                ol, ul {
                }
                blockquote, q {
                    quotes: none;
                }
                blockquote:before, blockquote:after,
                q:before, q:after {
                    content: '';
                    content: none;
                }
                table {
                    border-collapse: collapse;
                    border-spacing: 0;
                }
                input {
                    :-webkit-autofill,
                    :-webkit-autofill:hover,
                    :-webkit-autofill:focus,
                    :-webkit-autofill:active {
                        transition: background-color 999999s ease-in-out 0s;
                        background: rgba(0, 0, 0, 0.0);
                    }
                }
                .noselect {
                    -webkit-touch-callout: none; /* iOS Safari */
                    -webkit-user-select: none; /* Safari */
                    -khtml-user-select: none; /* Konqueror HTML */
                        -moz-user-select: none; /* Firefox */
                        -ms-user-select: none; /* Internet Explorer/Edge */
                            user-select: none; /* Non-prefixed version, currently
                                                    supported by Chrome and Opera */
                }
            `,
            wrapper
                ? global
                : `
                    html, body {
                        margin: 0;
                        padding: 0;
                        border: 0;
                        font: inherit;
                        vertical-align: baseline;
                        -moz-osx-font-smoothing: grayscale;
                        -webkit-font-smoothing: antialiased;
                        font-smoothing: antialiased;
                    }
                    body {
                        line-height: 1;
                        ${global.styles}
                    }
                    .monaco-editor, .monaco-editor .margin {
                        border-radius: 8px 0 0 8px;
                    }
                    .monaco-editor .margin {
                        background-color: transparent !important;
                    }
                    .monaco-editor .scroll-decoration {
                        box-shadow: none !important;
                    }
                `
        )
    }
}