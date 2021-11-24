/* eslint-disable react/no-danger */
import React from 'react'
import { CSSObject } from '@emotion/serialize'
import { Flexbox, Text, useTheme } from '@stage-ui/core'
import { PageType } from '@stage-ui/docs/utils/core'
import { useHistory } from 'react-router-dom'

const itemStyle = (theme: Stage.Theme): CSSObject => {
  return {
    flexDirection: 'column',
    transition: 'all 0.125s',
    boxShadow: theme.assets.shadow.xs,
    backgroundColor: theme.color.surface.rgb().string(),
    ' svg': {
      width: '3rem',
      height: '3rem',
      ' path': {
        transition: 'all 0.125s',
        fill: theme.color.onSurface.alpha(0.7).rgb().string(),
      },
    },
    ':hover': {
      transform: 'scale(1.1)',
      boxShadow: theme.assets.shadow.xl,

      zIndex: 100,
      ' svg path': {
        fill: theme.color.onSurface.alpha(1).rgb().string(),
      },
    },
  }
}

export default (props: { page: PageType }) => {
  const history = useHistory()
  const theme = useTheme()

  return (
    <Flexbox
      column
      alignItems="center"
      p="m"
      w="10rem"
      borderRadius="1rem"
      onClick={() => {
        history.push(props.page.url)
      }}
      css={itemStyle(theme)}
    >
      {props.page.glyph && (
        <div
          dangerouslySetInnerHTML={{
            __html: props.page.glyph,
          }}
        />
      )}
      <Text weight={500} color="hardest" p="s">
        {props.page.title}
      </Text>
    </Flexbox>
  )
}
