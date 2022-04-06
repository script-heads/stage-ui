import React from 'react'

import { Grid, Text, Header as TextHeader } from '@stage-ui/core'
import { Moon } from '@stage-ui/icons'
import corePackage from '@stage-ui/core/package.json'
import { useNavigate } from 'react-router-dom'

import useThemes from '../../hooks/useThemes'

import Menu from './Menu'

function Header() {
  const navigate = useNavigate()
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
        `"logo menu version theme theme"`,
        `"logo menu version theme theme"`,
        `"logo menu version theme theme"`,
        `"logo version theme theme" "menu menu menu menu"`,
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
          filter: 'blur(1px)',
        }}
        color={(c) => c.onSurface.alpha(0.35)}
        onClick={() => navigate('/')}
      >
        StageUI
        <Text size="3rem" lineHeight={0}>
          .
        </Text>
      </TextHeader>
      <Text
        size="xs"
        mt="xs"
        p="0.0625rem s"
        color="surface"
        weight={600}
        borderRadius="1rem"
        gridArea="version"
        backgroundColor={(c) => c.onSurface.alpha(0.9)}
      >
        v.{corePackage.version}
      </Text>
      <Menu />
      <Moon
        gridArea="theme"
        size="1.5rem"
        borderRadius="100%"
        color={currentTheme.name === 'Dark' ? 'primary' : 'onSurface'}
        onClick={() => {
          setTheme?.(themes[currentTheme.name === 'Dark' ? 'light' : 'dark'])
        }}
      />
    </Grid>
  )
}

export default Header
