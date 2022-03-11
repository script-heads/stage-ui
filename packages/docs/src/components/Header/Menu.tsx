import React from 'react'
import { Text, Flexbox } from '@stage-ui/core'
import { useHistory, useLocation } from 'react-router-dom'

const MenuItem = ({
  active,
  label,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) => (
  <Text
    p="0"
    mr="xl"
    color={active ? 'primary' : 'onBackground'}
    style={{
      transition: 'all 0.125s',
    }}
    weight={500}
    onClick={onClick}
  >
    {label}
  </Text>
)

const Menu = () => {
  const history = useHistory()
  const location = useLocation()

  return (
    <Flexbox alignItems="center" gridArea="menu">
      <MenuItem
        label="Guide"
        active={location.pathname === '/'}
        onClick={() => history.push('/')}
      />
      <MenuItem
        label="Components"
        active={location.pathname === '/components'}
        onClick={() => history.push('/components')}
      />
      <MenuItem
        label="Icons"
        active={location.pathname === '/icons'}
        onClick={() => history.push('/icons')}
      />
      <MenuItem
        label="Colors"
        active={location.pathname === '/colors'}
        onClick={() => history.push('/colors')}
      />
    </Flexbox>
  )
}

export default Menu
