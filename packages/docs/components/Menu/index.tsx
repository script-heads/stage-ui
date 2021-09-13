import React from 'react'
import { Block, Button, Flexbox, Link, Text, useTheme } from '@stage-ui/core'
import { Brush, Github } from '@stage-ui/icons'
import ButtonTypes from '@stage-ui/core/control/Button/types'
import { panel } from '@stage-ui/docs/components/Themer/src/ThemeConfigurator'
import ThemeSwitcher from './ThemeSwitcher'
import { CustomPageProps } from '../../utils/core'

type MenuItemProps = ButtonTypes.Props & {
  active: boolean
}
const MenuItem = (props: MenuItemProps) => {
  const { active, ...buttomProps } = props
  return (
    <Button
      p="0"
      mr="m"
      decoration="text"
      color={props.active ? 'onSurface' : 'light'}
      overrides={{
        container: () => [
          {
            transition: 'all 0.125s',
            background: 'none !important',
          },
        ],
      }}
      {...buttomProps}
    />
  )
}

const Menu = (props: CustomPageProps) => {
  const landingPage = props.path === '/'
  const theme = useTheme()

  if (landingPage) {
    return null
  }

  return (
    <Flexbox w="100%" column pb="xl">
      <Flexbox justifyContent="space-between" alignItems="center">
        {/* <Block mr="xl">
          <Text size="m" weight={800} onClick={() => props.setPath('/')}>
            {props.config.name}
          </Text>
        </Block> */}
        <Flexbox flex={1}>
          <MenuItem
            label="Getting started"
            active={props.path === '/getting-started'}
            onClick={() => props.setPath('/getting-started')}
          />
          <MenuItem
            label="Props"
            active={props.path === '/props'}
            onClick={() => props.setPath('/props')}
          />
          <MenuItem
            label="Overrides"
            active={props.path === '/overrides'}
            onClick={() => props.setPath('/overrides')}
          />
          <MenuItem
            label="Theming"
            active={props.path === '/theming'}
            onClick={() => props.setPath('/theming')}
          />
          <MenuItem
            label="Icons"
            active={props.path === '/icons'}
            onClick={() => props.setPath('/icons')}
          />
          <MenuItem
            label="Components"
            active={props.path === '/components'}
            onClick={() => props.setPath('/components')}
          />
        </Flexbox>
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
    </Flexbox>
  )
}

export default Menu
