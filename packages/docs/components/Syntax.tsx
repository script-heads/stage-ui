import { useTheme } from '@flow-ui/core'
import React from 'react'
import { Prism } from 'react-syntax-highlighter'
import light from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark'

const Syntax = (props: { code?: (() => JSX.Element )| string, children?: string }) => {
    const theme = useTheme()
    const isDark = theme.name.toUpperCase().match('DARK') ? true : false
    const styles = {
        padding: '1rem',
        fontSize: theme.assets.typography.text.s.fontSize,
        borderRadius: theme.radius.default,
        background: theme.color.background,
    }
    return (
        <Prism
            language="typescript"
            style={isDark ? dark : light}
            children={props.children || props.code}
            customStyle={styles}
        />
    )
}

export default Syntax