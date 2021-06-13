import React from 'react'
import { Block, Button, Flexbox, Link, Text, useTheme } from '@stage-ui/core'
import { Brush, Github } from '@stage-ui/icons'
import { panel } from '@stage-ui/docs/components/Themer/src/ThemeConfigurator'
import ThemeSwitcher from './ThemeSwitcher'
import { CustomPageProps } from '../../utils/core'

const Menu = (props: CustomPageProps) => {
  const landingPage = props.path === '/'
  const showcasePage = props.path.match(/\/components\/\D+/g)
  const theme = useTheme()

  if (landingPage || showcasePage) {
    return null
  }

  return (
    <Flexbox alignItems="center" column>
      <Block w={['53rem', '44.5rem', '35.5rem', '17rem']}>
        <Flexbox p="m 0" justifyContent="space-between" alignItems="center">
          <Block flex={1}>
            <Text size="xl" weight={800} onClick={() => props.setPath('/')}>
              {props.config.name}
            </Text>
          </Block>
          <Flexbox>
            <ThemeSwitcher
              themes={props.themes}
              currentTheme={props.theme}
              setTheme={props.setTheme}
            />
            <Brush
              onClick={() => {
                panel(theme, props.setTheme, {
                  boxShadow: '0 -2rem 10rem rgba(0,0,0,0.2)',
                  border: 0,
                })
              }}
              style={{ display: 'block' }}
              size="1.5rem"
              ml="1rem"
              color="primary"
            />
            {props.config.git && (
              <Link target="_blank" href={props.config.git} ml="1rem">
                <Github size="1.5rem" />
              </Link>
            )}
          </Flexbox>
        </Flexbox>
        <Flexbox wrap="wrap" pt="m" ml="-0.5rem">
          <Button
            p="s"
            size="s"
            shape="round"
            fontSize="1rem"
            decoration={props.path === '/getting-started' ? 'filled' : 'text'}
            onClick={() => props.setPath('/getting-started')}
          >
            Getting started
          </Button>
          <Button
            p="s"
            size="s"
            shape="round"
            fontSize="1rem"
            decoration={props.path === '/props' ? 'filled' : 'text'}
            onClick={() => props.setPath('/props')}
          >
            Props
          </Button>
          <Button
            p="s"
            size="s"
            shape="round"
            fontSize="1rem"
            decoration={props.path === '/overrides' ? 'filled' : 'text'}
            onClick={() => props.setPath('/overrides')}
          >
            Overrides
          </Button>
          <Button
            p="s"
            size="s"
            shape="round"
            fontSize="1rem"
            decoration={props.path === '/theming' ? 'filled' : 'text'}
            onClick={() => props.setPath('/theming')}
          >
            Theming
          </Button>
          <Button
            p="s"
            size="s"
            shape="round"
            fontSize="1rem"
            decoration={props.path === '/icons' ? 'filled' : 'text'}
            onClick={() => props.setPath('/icons')}
          >
            Icons
          </Button>
          <Button
            p="s"
            size="s"
            shape="round"
            fontSize="1rem"
            decoration={props.path === '/components' ? 'filled' : 'text'}
            onClick={() => props.setPath('/components')}
          >
            Components
          </Button>
        </Flexbox>
      </Block>
    </Flexbox>
  )
}

export default Menu
