/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'

import { Block, useTheme } from '@stage-ui/core'
import SyntaxHighlighter from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark'
import light from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-light'

function Syntax({ code }: { code: string }) {
  const theme = useTheme()
  const isDark = !!/DARK/.exec(theme.name.toUpperCase())
  const styles = {
    padding: '1rem',
    fontSize: theme.assets.typography.text.m.fontSize,
    lineHeight: 1.5,
    borderRadius: theme.radius.m,
    border: '1px solid',
    borderColor: isDark
      ? theme.color.gray[700].rgb().string()
      : theme.color.gray[300].rgb().string(),
    background: theme.color.background,
    minWidth: 0,
    backgroundColor: theme.color.surface.hex(),
    boxShadow: 'none',
  }
  return (
    <Block my="1rem">
      <SyntaxHighlighter
        language="typescript"
        style={isDark ? dark : light}
        customStyle={styles}
      >
        {code}
      </SyntaxHighlighter>
    </Block>
  )
}

export default Syntax
