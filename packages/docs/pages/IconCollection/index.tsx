import { Block, Flexbox, Text, Link, notify, Header } from '@stage-ui/core'
import * as AllIcons from '@stage-ui/icons'
import React, { useEffect, useState } from 'react'

export const title = 'Collection'

type DelayProps = {
  index: number
  children?: React.ReactNode
}

const Delay = (props: DelayProps) => {
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true)
    }, 1 * (props.index + 1))
  }, [])

  if (!display) {
    return null
  }

  return <>{props.children}</>
}

export default () => {
  return (
    <Flexbox w={['53rem', '44.5rem', '35.5rem', '17rem']} column m="0 auto" my="m">
      <Block backgroundColor="surface" borderRadius="1rem" p="m">
        <Header size="l" mt="0">
          Icons
        </Header>
        <Flexbox column alignItems="flex-start">
          <Text size="s">
            To use icons add{' '}
            <Link
              size="s"
              weight="bold"
              href="https://www.npmjs.com/package/@stage-ui/icons"
              target="_blank"
            >
              @stage-ui/icons
            </Link>
          </Text>
          <Block
            style={{
              display: 'grid',
              width: '100%',
              overflow: 'hidden',
              gridTemplateColumns: 'repeat(auto-fill, 8rem)',
            }}
          >
            {Object.keys(AllIcons).map((key, index) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              const PreviewIcon = AllIcons[key]
              return (
                <Delay key={key} index={index}>
                  <Flexbox
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
                        borderRadius="10rem 0 0 10rem"
                        background="lightest"
                      />
                      <PreviewIcon
                        type="outline"
                        shape="oval"
                        size="2rem"
                        borderRadius="0 10rem 10rem 0"
                        color="lightest"
                        background="onSurface"
                      />
                    </Flexbox>
                    <Text
                      color={(c) => c.light}
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
                </Delay>
              )
            })}
          </Block>
        </Flexbox>
      </Block>
    </Flexbox>
  )
}
