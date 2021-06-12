import { Block, Flexbox, Link, Text, useTheme } from '@stage-ui/core'
import { Brush, Github } from '@stage-ui/icons'
import { panel } from '@stage-ui/docs/components/Themer/src/ThemeConfigurator'
import corePackage from '../../../core/package.json'
import ThemeSwitcher, { ThemeSwitcherProps } from './ThemeSwitcher'

export interface MenuProps extends ThemeSwitcherProps {
  title?: string
  git?: string
  setIndex: () => void
}

const Menu = (props: MenuProps) => {
  const theme = useTheme()

  return (
    <Flexbox
      px="1.5rem"
      h="4rem"
      justifyContent="space-around"
      alignItems="center"
      css={(t) => ({
        position: 'fixed',
        zIndex: 1,
        top: 0,
        right: 0,
        left: 0,
        background: `linear-gradient(180deg, ${theme.color.surface.rgb()}, ${theme.color.surface
          .alpha(0)
          .rgb()})`,
      })}
    >
      <Block flex={1}>
        <Text
          size="xl"
          weight="bold"
          css={{ cursor: 'pointer' }}
          onClick={props.setIndex}
          children={props.title}
        />
        <Text
          size="xs"
          lineHeight="0"
          textColor={(c) => c.primary}
          css={{
            verticalAlign: 'text-top',
          }}
          children="β"
        />
        <Text
          size="xs"
          lineHeight="0"
          ml="0.25rem"
          textColor="light"
          css={{
            verticalAlign: 'text-top',
          }}
          children={`${corePackage.version}`}
        />
      </Block>
      <Flexbox>
        <ThemeSwitcher
          themes={props.themes}
          currentTheme={props.currentTheme}
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
          color={(c) => c.primary}
        />
        {props.git && (
          <Link target="_blank" href={props.git} ml="1rem">
            <Github size="1.5rem" />
          </Link>
        )}
      </Flexbox>
    </Flexbox>
  )
}

export default Menu
