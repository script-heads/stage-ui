import React from 'react'

import { useTheme } from '@stage-ui/system/'
import createID from '@stage-ui/system/utils/createID'

function List({ data, higlightBefore }: { data: string[]; higlightBefore?: string }) {
  const theme = useTheme()

  return (
    <ul
      css={{
        padding: 0,
        listStyle: 'none',
        lineHeight: 1.5,
      }}
    >
      {higlightBefore
        ? data.map((child) => {
            const split = child.split(higlightBefore)[0]
            const other = child.substring(split.length)

            return (
              <li key={createID()}>
                <span
                  css={{
                    backgroundColor: theme.color.onSurface.alpha(0.1).rgb().string(),
                    color: theme.color.onSurface.hex(),
                    padding: '.05rem .4rem .1rem',
                    borderRadius: '.2rem',
                    fontSize: '0.75rem',
                  }}
                >
                  {split}
                </span>
                {other}
              </li>
            )
          })
        : data.map((child, index) => <li key={createID()}>{child}</li>)}
    </ul>
  )
}

export default List
