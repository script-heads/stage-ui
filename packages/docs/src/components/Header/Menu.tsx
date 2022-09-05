import React from 'react'

import { Flexbox } from '@stage-ui/core'
import { useNavigate, useLocation } from 'react-router-dom'

import { CornerDownRight } from '@stage-ui/icons'

import MenuItem from './MenuItem'

function Menu() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Flexbox alignItems="center" gridArea="menu">
      <CornerDownRight
        mr="1rem"
        ml="1.75rem"
        size="1.5rem"
        color="gray400"
        display={['none', 'none', 'none', 'block']}
      />
      <MenuItem
        label="Components"
        active={location.pathname === '/components'}
        onClick={() => navigate('/components')}
      />
      <MenuItem
        label="Icons"
        active={location.pathname === '/icons'}
        onClick={() => navigate('/icons')}
      />
      <MenuItem
        label="Colors"
        active={location.pathname === '/colors'}
        onClick={() => navigate('/colors')}
      />
    </Flexbox>
  )
}

export default Menu
