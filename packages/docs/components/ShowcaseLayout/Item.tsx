/* eslint-disable react/no-danger */
import React from 'react'
import { Interpolation } from '@emotion/serialize'
import { Flexbox, Text } from '@stage-ui/core'
import { CustomPageProps, PageType } from '@stage-ui/docs/utils/core'

const itemStyle = (theme: Stage.Theme): Interpolation<Stage.Theme> => ({
  flexDirection: 'column',
  transition: 'all 0.125s',
  boxShadow: 'none',
  backgroundColor: theme.color.surface.rgb().string(),
  ' svg': {
    width: '4rem',
    height: '4rem',
    ' path': {
      transition: 'all 0.125s',
      fill: theme.color.onSurface.alpha(0.7).rgb().string(),
    },
  },
  ':hover': {
    transform: 'scale(1.1)',
    boxShadow: `0 0 10rem rgba(0,0,0,0.15)`,

    zIndex: 100,
    ' svg path': {
      fill: theme.color.onSurface.alpha(1).rgb().string(),
    },
  },
})

export default (props: { page: PageType; setPath: CustomPageProps['setPath'] }) => {
  return (
    <Flexbox
      column
      alignItems="center"
      p="m"
      w="6rem"
      borderRadius="1rem"
      onClick={() => {
        props.setPath(props.page.url)
      }}
      css={itemStyle}
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
      {props.page.lab && (
        <Text position="absolute" css={{ right: '0.5rem', top: '0.5rem' }}>
          🧪
        </Text>
      )}
    </Flexbox>
  )
}
