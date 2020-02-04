import { useTheme } from '@flow-ui/core'
import React from 'react'
import { Prism, PrismLight } from 'react-syntax-highlighter'
import light from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark'

const Syntax = (props: { code: string }) => {
    const theme = useTheme()
    const isDark = theme.name.toUpperCase().match('DARK') ? true : false
    const style = isDark ? dark : light
    const HL = isDark ? Prism : PrismLight
    const styles = {
        fontSize: theme.typography.text.m.fontSize,
        fontWeight: 600,
        borderRadius: theme.radius.default,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.color.lightest.css(),
        background: theme.color.surface.css(),
    }
    return (
        <HL
            showLineNumbers
            language="typescript"
            style={style}
            children={props.code}
            customStyle={styles}
        />
    )
}

export default Syntax