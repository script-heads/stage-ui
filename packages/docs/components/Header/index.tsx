import React from 'react'
import { Grid, Text, Header as TextHeader } from '@stage-ui/core'
import { Github, Moon } from '@stage-ui/icons'
import corePackage from '@stage-ui/core/package.json'
import { useHistory } from 'react-router-dom'
import useThemes from '../../hooks/useThemes'
import Menu from './Menu'

const Header = () => {
  const history = useHistory()
  const { currentTheme, themes, setTheme } = useThemes()

  return (
    <Grid
      my="3rem"
      w="100%"
      rowGap="1rem"
      columnGap="1rem"
      templateColumns={[
        'max-content 1fr repeat(3, max-content)',
        'max-content 1fr repeat(3, max-content)',
        'max-content 1fr repeat(3, max-content)',
        '1fr repeat(3, max-content)',
      ]}
      templateAreas={[
        `"logo menu version theme git"`,
        `"logo menu version theme git"`,
        `"logo menu version theme git"`,
        `"logo version theme git" "menu menu menu menu"`,
      ]}
      alignItems="center"
    >
      <TextHeader
        gridArea="logo"
        size="l"
        mr={['2rem', '2rem', '2rem', 0]}
        my={0}
        style={{
          transition: 'all 0.125s',
        }}
        onClick={() => history.push('/')}
      >
        StageUI
        <Text size="3rem" lineHeight={0}>
          .
        </Text>
      </TextHeader>
      <Menu />
      <Text size="xs" mt="xs" color="light" gridArea="version">
        v.{corePackage.version}
      </Text>
      <Moon
        gridArea="theme"
        size="1.5rem"
        color={currentTheme.name === 'Dark' ? 'primary' : 'onSurface'}
        onClick={() => {
          setTheme?.(themes[currentTheme.name === 'Dark' ? 'light' : 'dark'])
        }}
      />
      <Github
        gridArea="git"
        size="1.5rem"
        onClick={() => window.open('https://github.com/pt-one/StageUI', '_blank')}
      />
    </Grid>
  )
}

export default Header
