import React from 'react'

import { createID, useTheme } from '@stage-ui/system'
import { Flexbox, Paragraph } from '@stage-ui/core'

function List({ data, highlightBefore }: { data: string[]; highlightBefore?: string }) {
  const theme = useTheme()

  return (
    <Flexbox wrap="wrap">
      {highlightBefore
        ? data.map((child) => {
            const stageProp = child.split(highlightBefore)[0]
            const cssProp = child.substring(stageProp.length).slice(1)

            return (
              <Flexbox column key={createID()} p="0.5rem" alignItems="center">
                <Paragraph
                  p="s xl"
                  align="center"
                  m="0"
                  borderRadius="0.75rem"
                  backgroundColor={(c) => c.onSurface.alpha(0.05)}
                  color={(c) => c.onSurface.alpha(0.75)}
                >
                  {stageProp}
                </Paragraph>
                <Paragraph m="xs" p="0" color={(c) => c.onSurface.alpha(0.3)}>
                  {cssProp}
                </Paragraph>
              </Flexbox>
            )
          })
        : data.map((child, index) => <li key={createID()}>{child}</li>)}
    </Flexbox>
  )
}

export default List
