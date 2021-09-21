import { Badge, Button, Grid, Flexbox, Header, Paragraph, Text, useTheme } from '@stage-ui/core'
import { Moon } from '@stage-ui/icons'
import React from 'react'
import { CustomPageProps } from '../../utils/core'
import corePackage from '../../../core/package.json'

export default (props: CustomPageProps) => {
  const theme = useTheme()
  return (
    <Flexbox
      justifyContent="center"
      alignItems="center"
      h="100vh"
      pb="6rem"
      css={{
        [`@media (max-width: ${theme.breakpoints[3]})`]: {
          flexDirection: 'column-reverse',
        },
      }}
    >
      <Flexbox
        column
        justifyContent="center"
        w="25rem"
        mr={['3rem', '3rem', '3rem', '0']}
        css={{
          [`@media (max-width: ${theme.breakpoints[3]})`]: {
            width: 'auto',
            textAlign: 'center',
          },
        }}
      >
        <Header m="0" size="6.5rem" lineHeight={1} weight={800}>
          <span>StageUI</span>
          <Text
            size="xl"
            weight={500}
            css={{
              verticalAlign: 'text-top',
            }}
            textColor="primary"
          >
            β
          </Text>
        </Header>
        <Paragraph size="l" color="light">
          Flexible UI Framework declared by your own Design System.
        </Paragraph>
        <Grid
          mt="xl"
          templateColumns={['1fr 1fr', '1fr 1fr', '1fr']}
          rowGap="2rem"
          columnGap="1rem"
          justifyItems="center"
        >
          <Button
            w="12rem"
            size="l"
            onClick={() => props.setPath('/getting-started')}
            label="Getting started"
          />
          <Badge size="xs" content={`v.${corePackage.version}`}>
            <Button
              w="12rem"
              size="l"
              color="lightest"
              onClick={() => props.setPath('/components')}
            >
              Components
            </Button>
          </Badge>
        </Grid>

        <Flexbox alignItems="center" justifyContent="center" mt="4rem">
          <Moon
            size="3rem"
            onClick={() => {
              props.setTheme(props.themes[props.theme.name === 'Dark' ? 'light' : 'dark'])
            }}
            color={props.theme.name === 'Dark' ? 'primary' : 'lightest'}
          />
        </Flexbox>
      </Flexbox>
    </Flexbox>
  )
}
