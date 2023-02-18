/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'

import { Block, useTheme } from '@stage-ui/core'
import SyntaxHighlighter from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark'
import light from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-light'
import BlockTypes from '@stage-ui/core/layout/Block/types'

function Syntax({ code, ...blockProps }: { code: string } & BlockTypes.Props) {
  const theme = useTheme()
  const isDark = !!/DARK/.exec(theme.name.toUpperCase())
  const styles = {
    paddingLeft: '2rem',
    fontSize: theme.assets.typography.text.m.fontSize,
    lineHeight: 1.5,
    fontWeight: 600,
    borderRadius: '0.5rem',
    border: '0.5rem solid',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: theme.color.onSurface.alpha(0.05).string(),
    minWidth: 0,
    backgroundColor: theme.color.onSurface.alpha(0.02).string(),
    boxShadow: 'none',
  }
  return (
    <Block my="1rem" {...blockProps}>
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
