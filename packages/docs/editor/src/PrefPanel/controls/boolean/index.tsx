import { Block, Switch } from '@stage-ui/core'
import React from 'react'
import { context } from '../../../..'

type Props = {
  name: string
}

const BooleanControls = (props: Props) => {
  if (!context.tools.focused) {
    return null
  }
  const { name } = props

  return (
    <Block pb="0.5rem">
      <Switch
        size="s"
        label={name[0].toUpperCase() + name.slice(1)}
        onChange={(value) => {
          if (context.tools.focused) {
            context.tools.focused.props[props.name] = value
            context.tools.update()
          }
        }}
      />
    </Block>
  )
}
export default BooleanControls
