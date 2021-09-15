/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Block, useTheme } from '@stage-ui/core'
import React from 'react'
import { Prism } from 'react-syntax-highlighter'
import light from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/dark'

const Syntax = (props: { code?: (() => JSX.Element) | string; children?: string }) => {
  const theme = useTheme()
  const isDark = !!/DARK/.exec(theme.name.toUpperCase())
  const styles = {
    padding: '1rem',
    fontSize: theme.assets.typography.text.s.fontSize,
    borderRadius: theme.radius.m,
    border: '1px solid',
    borderColor: theme.color.lightest.hex(),
    background: theme.color.background,
    minWidth: 0,
    backgroundColor: theme.color.surface.hex(),
    boxShadow: 'none',
  }
  return (
    <Block>
      <Prism language="typescript" style={isDark ? dark : light} customStyle={styles}>
        {props.children || props.code}
      </Prism>
    </Block>
  )
}

export default Syntax
