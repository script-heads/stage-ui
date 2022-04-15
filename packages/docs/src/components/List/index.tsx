import React from 'react'

import { createID, useTheme } from '@stage-ui/system'
import { Flexbox, Paragraph } from '@stage-ui/core'

function List({ data, higlightBefore }: { data: string[]; higlightBefore?: string }) {
  const theme = useTheme()

  return (
    <Flexbox wrap="wrap">
      {higlightBefore
        ? data.map((child) => {
            const stageProp = child.split(higlightBefore)[0]
            const cssProp = child.substring(stageProp.length).slice(1)

            return (
              <Flexbox column key={createID()} p="0.5rem">
                <Paragraph
                  p="s xl"
                  align="center"
                  m="0"
                  backgroundColor={(c) => c.onSurface}
                  color={(c) => c.surface}
                  fontSize="1.25rem"
                >
                  {stageProp}
                </Paragraph>
                <Paragraph m="xs" p="0" color={(c) => c.onSurface.alpha(0.6)}>
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
