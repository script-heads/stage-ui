import { Flexbox, Block, Text, Header, useTheme } from '@stage-ui/core'
import React, { Fragment } from 'react'

export const title = 'Collection'

export default () => {
  const theme = useTheme()

  const colors: Record<string, Record<string, string>> = {}

  const capString = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

  Object.keys(theme.color).map((color) => {
    Object.keys(theme.color[color]).map((key) => {
      if (theme.color[color][50]) {
        let colorKey = capString(color)
        if (!colors[colorKey]) {
          colors[colorKey] = {}
        }
        if (key.startsWith('A')) {
          colorKey = colorKey + ' Accent'
          if (!colors[colorKey]) {
            colors[colorKey] = {}
          }
          colors[colorKey][key] = theme.color[color][key]
        } else {
          colors[colorKey][key] = theme.color[color][key]
        }
      }
    })
  })

  return (
    <Flexbox column mb="m">
      {Object.keys(colors).map((color) => (
        <Fragment key={color}>
          <Header size="xs" my="s" color="gray400">{color}</Header>
          <Flexbox>
            {Object.keys(colors[color]).map((key, index) => (
              <Flexbox key={key}>
                <Block borderRadius="s" w="3rem" h="2rem" mr="xs" p="s" backgroundColor={colors[color][key]}>
                  <Text weight={600} size="xs" color={index > 4 ? 'surface' : 'onSurface'}>{key}</Text>
                </Block>
              </Flexbox>
            ))}
          </Flexbox>
        </Fragment>
      ))}
    </Flexbox>
  )
}
