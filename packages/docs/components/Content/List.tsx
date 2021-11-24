import React from 'react'
import { useTheme } from '@stage-ui/system/'

export default (props: { data: string[]; higlightBefore?: string }) => {
  const theme = useTheme()

  return (
    <ul
      css={{
        padding: 0,
        listStyle: 'none',
        lineHeight: 1.5,
      }}
    >
      {props.higlightBefore
        ? props.data.map((child, index) => {
            const split = child.split(props.higlightBefore as string)[0]
            const other = child.substring(split.length)

            return (
              <li key={`${child}${index}`}>
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
        : props.data.map((child, index) => <li key={`${child}${index}`}>{child}</li>)}
    </ul>
  )
}
