import React from 'react'

import { useNavigate } from 'react-router-dom'
import { Flexbox, Text, useTheme } from '@stage-ui/core'

import { PageType } from '@/utils/core'

function ComponentPreview({ page }: { page: PageType }) {
  const navigate = useNavigate()
  const theme = useTheme()
  const Glyph = page.glyph

  return (
    <Flexbox
      column
      alignItems="center"
      p="m"
      w="10rem"
      borderRadius="1rem"
      onClick={() => {
        navigate(page.url)
      }}
      backgroundColor="surface"
      style={{
        transition: 'all 0.125s',
        ':hover': {
          transform: 'scale(1.1)',
          boxShadow: theme.assets.shadow.xl,
          zIndex: 100,
          ' svg path': {
            fill: theme.color.onBackground.hex(),
          },
        },
      }}
    >
      {Glyph && (
        <Glyph
          css={{
            fill: theme.color.onSurface.hex(),
            width: '6rem',
            height: '6rem',
            transition: 'all 0.125s',
          }}
        />
      )}
      <Text mt="m" weight={500} color={(c) => c.onSurface.alpha(0.6)}>
        {page.title}
      </Text>
    </Flexbox>
  )
}

export default ComponentPreview
