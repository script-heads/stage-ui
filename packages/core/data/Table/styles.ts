import { css } from '@emotion/core';
import useFlow from '../../misc/hooks/useFlow';
import useStyleProps from '../../misc/hooks/useStyleProps';
import TableTypes from './types';

export default (props: TableTypes.Props) => {
    const { theme } = useFlow();
    const { all: gloablStyles } = useStyleProps(props);
    const overrides = theme.overrides.table;

    return {

        container: css(
            {
                overflowWrap: 'break-word',
                lineHeight: 1,
                display: 'flex',
            },
            gloablStyles,
            overrides && overrides.container,
            props.animated && {
                transition: "all .15s"
            }
        ),

        content: css(
            {
                flex: 1
            },
            overrides && overrides.content
        ),

        headRow: css(
            {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                textTransform: 'uppercase',
                fontSize: '1rem',
                padding: '0.75rem 1.125rem',
            },
            overrides && overrides.headRow
        ),

        headColumn: css(
            {
                color: theme.color.hard.css(),
                marginRight: '1.25rem',
            },
            overrides && overrides.headColumn
        ),

        search: css(
            {
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                borderColor: theme.color.lightest.css(),
                '> svg': {
                    fontSize: '1rem',
                },
                '> input': {
                    fontSize: '1rem',
                    lineHeight: '1.5rem',
                    appearance: 'none',
                    boxSizing: 'border-box',
                    resize: 'none',
                    border: 'none',
                    background: 'none',
                    outline: 'none',
                    position: 'relative',
                    color: 'inherit',
                    width: '100%',
                    fontFamily: 'inherit',
                    margin: 0,
                    padding: '0 0.75rem',
                    flex: 1,
                },
            },
            overrides && overrides.search
        ),

        body: css(
            {
                position: 'relative',
                borderWidth: theme.assets.border.width,
                borderStyle: theme.assets.border.style,
                borderColor: theme.assets.border.color,
                borderRadius: theme.radius.default,
                backgroundColor: theme.color.surface.css(),
                boxShadow: theme.assets.shadow.default,
            },
            overrides && overrides.body
        ),

        pagination: css(
            {
                padding: '0.3rem 0.25rem 0.25rem 0rem',
                marginTop: '3rem',
            },
            overrides && overrides.pagination
        ),

        paginationButton: (active: boolean) => css(
            {
                cursor: 'pointer',
                borderRadius: '0px 0.25rem 0.25rem 0px',
                padding: '0.25rem 8px 0.25rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 500,
                textAlign: 'right',
                marginBottom: '0.5rem',
                color: theme.color.onSurface.css(),
                backgroundColor: theme.color.surface.css(),
                opacity: active ? 1 : 0.5,
            },
            overrides && overrides.paginationButton
        ),

        row: (edited: boolean, withActions: boolean) => css(
            {
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                alignItems: 'stretch',
                padding: '1.25rem',
                position: 'relative',
                ':not(:last-child)': {
                    borderBottom: 'solid 0.5px',
                    borderColor: theme.color.lightest.css(),
                },
                ...(edited && {
                    backgroundColor: theme.color.background.css(),
                    borderColor: theme.color.lightest.css(),
                    borderStyle: 'solid',
                    borderWidth: '0 0 0.5px 0',
                    padding: '1.25rem',
                    // marginTop: '-1px',
                    "&:first-of-type": {
                        borderRadius: `${theme.radius.default} ${theme.radius.default} 0 0`
                    },
                    "&:last-of-type": {
                        borderWidth: '0',
                        borderRadius: `0 0 ${theme.radius.default} ${theme.radius.default}`
                    }
                }),
                ...(withActions && {
                    ':hover': {
                        '> :last-of-type > div': {
                            display: 'flex'
                        }
                    }
                })
            },
            overrides && overrides.row
        ),

        subrow: css(
            {
                paddingTop: '1.25rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                position: 'relative',
            },
            overrides && overrides.subrow
        ),

        column: css(
            {
                marginRight: '1.25rem',
                flexShrink: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            },
            overrides && overrides.column
        ),

        more: css(
            {
                color: theme.color.primary.css(),
                fontSize: '1.5rem',
            },
            overrides && overrides.more
        ),

        actions: css(
            {
                textTransform: 'uppercase',
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
            },
            overrides && overrides.actions
        ),

        actionButtons: css(
            {
                flexDirection: 'row',
                alignItems: 'center',
                display: 'none',
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                paddingLeft: '1.25rem',
                background: `linear-gradient(90deg, ${theme.color.surface.css()} 0%, ${theme.color.surface.css()} 20%)`,
                '> span': {
                    marginLeft: '1rem',
                    textTransform: 'uppercase',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    boxShadow: 'none',
                    cursor: 'pointer',
                }
            },
            overrides && overrides.actionButtons
        ),

        actionButtonsEdit: css(
            {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            },
            overrides && overrides.actionButtonsEdit
        )
    }
}