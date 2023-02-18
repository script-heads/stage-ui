import React, { useEffect } from 'react'

import { Grid, Text, useAppearance } from '@stage-ui/core'
import corePackage from '@stage-ui/core/package.json'
import { Appearance } from '@stage-ui/icons'

import useThemes from '../../hooks/useThemes'

import { gradientAnimation } from '../CardPreview'

import { Logo } from './Logo'
import Menu from './Menu'

const Header: React.FC = () => {
  const { currentTheme, themes, setTheme } = useThemes()
  const appearance = useAppearance()
  useEffect(() => {
    setTheme?.(themes[appearance])
  }, [appearance])
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
        size="s"
        mt="xs"
        weight={900}
        borderRadius="0.25rem"
        gridArea="version"
        style={{
          background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
          backgroundSize: '400% 400%',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          animation: `${gradientAnimation} 10s ease infinite`,
        }}
      >
        v.{corePackage.version}
      </Text>
      <Menu />
      <Appearance
        gridArea="theme"
        size="1.5rem"
        borderRadius="100%"
        type={currentTheme.name === 'Dark' ? 'outline' : 'filled'}
        color={currentTheme.name === 'Dark' ? 'onSurface' : 'gray400'}
        onClick={() => {
          setTheme?.(themes[currentTheme.name === 'Dark' ? 'light' : 'dark'])
        }}
      />
    </Grid>
  )
}

export default Header
