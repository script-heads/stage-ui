import React from 'react'

import { Grid, Text } from '@stage-ui/core'
import { Moon } from '@stage-ui/icons'
import corePackage from '@stage-ui/core/package.json'
import { useNavigate } from 'react-router-dom'

import useThemes from '../../hooks/useThemes'

import Menu from './Menu'
import { Logo } from './Logo'

const Header: React.FC = () => {
  const navigate = useNavigate()
  const { currentTheme, themes, setTheme } = useThemes()

  return (
    <Grid
      my={['3rem', '2rem', '1.5rem', '1rem']}
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
        `"logo menu version theme theme"`,
        `"logo menu version theme theme"`,
        `"logo menu version theme theme"`,
        `"logo version theme theme" "menu menu menu menu"`,
      ]}
      alignItems="center"
    >
      <Logo />
      <Text
        size="xs"
        mt="xs"
        p="0.125rem 0.5rem"
        color="white"
        weight={800}
        borderRadius="0.25rem"
        gridArea="version"
        style={{
          background: 'linear-gradient(45deg, #2949EF 0%, #0DC5EE 80%, #0DEEE0 100%)',
        }}
      >
        v.{corePackage.version}
      </Text>
      <Menu />
      <Moon
        gridArea="theme"
        size="1.5rem"
        borderRadius="100%"
        type={currentTheme.name === 'Dark' ? 'outline' : 'filled'}
        color={currentTheme.name === 'Dark' ? 'primary' : 'gray300'}
        onClick={() => {
          setTheme?.(themes[currentTheme.name === 'Dark' ? 'light' : 'dark'])
        }}
      />
    </Grid>
  )
}

export default Header
