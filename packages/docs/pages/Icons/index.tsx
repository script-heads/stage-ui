import { Flexbox, notify, Text } from '@stage-ui/core'
import * as AllIcons from '@stage-ui/icons'
import React from 'react'

export const title = 'Collection'

export default () => {
  return (
    <Flexbox wrap="wrap" pb="4rem" justifyContent="space-between">
      {Object.keys(AllIcons).map((key) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const PreviewIcon = AllIcons[key]
        return (
          // <Delay key={key} index={index}>
          <Flexbox
            key={key}
            column
            p="1rem"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            <Flexbox
              css={{
                transition: 'all 0.25s',
                ':hover': {
                  transform: 'scale(1.1)',
                },
                ':active': {
                  transform: 'scale(0.9)',
                },
              }}
              onClick={() => {
                navigator.clipboard
                  .writeText(`import ${key} from '@stage-ui/icons/lib/${key}'`)
                  .then(
                    () => {
                      notify({
                        title: 'Icons',
                        message: `${key} copyed to clipboard`,
                        timeout: 3000,
                      })
                    },
                    (err) => {
                      if (err instanceof Error) {
                        notify({
                          title: 'Icons',
                          message: `Could not copy import cause of error ${err.message}`,
                        })
                      }
                    },
                  )
              }}
            >
              <PreviewIcon
                type="filled"
                shape="oval"
                size="2rem"
                borderRadius="1rem 0 0 1rem"
                background="lightest"
              />
              <PreviewIcon
                type="outline"
                shape="oval"
                size="2rem"
                borderRadius="0 1rem 1rem 0"
                color="lightest"
                background="onSurface"
              />
            </Flexbox>
            <Text
              color="light"
              mt=".5rem"
              size="xs"
              align="center"
              css={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%',
              }}
            >
              {key}
            </Text>
          </Flexbox>
        )
      })}
    </Flexbox>
  )
}
