import React from 'react'

import { Block, Flexbox, Calendar } from '@stage-ui/core'

export default () => {
  return (
    <Block p="m" decoration="surface" w="20rem">
      <Calendar
        type="day"
        onDayRender={(options) => {
          const range = [5, 6, 7, 8, 9, 10]
          const day = options.self.date()
          return (
            <Flexbox
              justifyContent="center"
              alignItems="center"
              w="100%"
              h="2rem"
              onClick={options.onClick}
              backgroundColor={(c) =>
                options.isActive
                  ? c.error
                  : range.includes(day)
                  ? c.primary.alpha(0.2)
                  : c.surface
              }
              children={day}
            />
          )
        }}
      />
    </Block>
  )
}
