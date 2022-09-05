import React, { Fragment } from 'react'

import { Flexbox, Header, useTheme } from '@stage-ui/core'

import { createID } from '@stage-ui/system'

import ColorPreview from '@/components/ColorPreview'

export const title = 'Collection'

const deprecatedColors = [
  'surfaceVariant',
  'backgroundVariant',
  'light',
  'lightest',
  'hard',
  'hardest',
]

function ColorPage() {
  const theme = useTheme()
  const general: React.ReactChild[] = []
  const palette: React.ReactChild[] = []

  Object.keys(theme.color).forEach((colorName) => {
    if (colorName === 'palette') return

    const color = theme.color[colorName as keyof Stage.Colors]

    if (!(color as Stage.Color).rgb) {
      palette.push(
        <Fragment key={colorName}>
          <Header size="l" my="l">
            {colorName.charAt(0).toUpperCase() + colorName.toLowerCase().slice(1)}
          </Header>
          <Flexbox wrap="wrap" mb="xl">
            {Object.keys(color).map((shade) => (
              <ColorPreview
                key={createID()}
                value={
                  (color as Stage.ColorShades)[
                    shade as unknown as keyof Stage.ColorShades
                  ]
                }
                prefix={colorName}
                name={shade}
              />
            ))}
          </Flexbox>
        </Fragment>,
      )
      return
    }

    if (!deprecatedColors.includes(colorName)) {
      general.push(
        <ColorPreview
          circle
          key={createID()}
          value={color as Stage.Color}
          name={colorName}
        />,
      )
    }
  })

  return (
    <>
      <Header size={['xl', 'xl', 'xl', 'l']} mb="xl">
        Foundation
      </Header>
      <Flexbox wrap="wrap" mb="xl">
        {general}
      </Flexbox>
      {palette}
    </>
  )
}

export default ColorPage
