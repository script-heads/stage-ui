import React from 'react'

import { Flexbox, Text, useTheme } from '@stage-ui/core'
import { keyframes } from '@emotion/react'

export const gradientAnimation = keyframes`
0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

type Props = {
  label: string
  glyph: React.ReactNode
  onClick: () => void
}

export const CardPreview = (props: Props) => {
  const { label, glyph, onClick } = props
  const theme = useTheme()

  return (
    <Flexbox
      column
      alignItems="center"
      p="m"
      mr="s"
      mb="s"
      w="6.625rem"
      borderRadius="0.5rem"
      onClick={onClick}
      style={{
        background: theme.color.onSurface.alpha(0.025).string(),

        transition: 'all 0.1s',
        '> svg': {
          transition: 'transform 0.2s',
        },
        ':hover': {
          background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
          backgroundSize: '400% 400%',
          animation: `${gradientAnimation} 10s ease infinite`,
          transform: 'scale(1.1)',
          '> span': {
            color: theme.color.white.hex(),
          },
          zIndex: 100,
          '> svg': {
            transform: 'scale(1.3)',
            '> path, > rect': {
              fill: theme.color.white.hex(),
            },
          },
        },
      }}
    >
      {glyph}
      <Text mt="m" size="0.875rem" weight={600} color={(c) => c.onSurface.alpha(0.75)}>
        {label}
      </Text>
    </Flexbox>
  )
}
