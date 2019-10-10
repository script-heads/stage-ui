import { useFlow } from "@flow-ui/core"
import React from 'react'
import { Prism, PrismLight } from 'react-syntax-highlighter'
import light from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark'

const Syntax = (props: { code: any }) => {
    const flow = useFlow()
    const isDark = flow.theme.name.toUpperCase().match('DARK') ? true : false
    const style = isDark ? dark : light
    const HL = isDark ? Prism : PrismLight
    const styles: any = {
        fontSize: '0.75rem',
        borderRadius: flow.theme.radius.default,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: flow.theme.color.lightest.css(),
        background: flow.theme.color.surface.css(),
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