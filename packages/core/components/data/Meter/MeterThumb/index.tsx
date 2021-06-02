import { useSystem } from '@stage-ui/system'
import React from 'react'
import styles from './styles'
import Types from './types'

const MeterThumb = (props: Types.PrivateProps) => {
  const { shape = 'round', size = 'm', value = 0 } = props
  const { classes, attributes, events } = useSystem('MeterThumb', props, styles)

  return (
    <div
      {...attributes}
      {...events}
      css={classes.container({ shape, size })}
      style={{
        width: `${value}%`,
      }}
    />
  )
}

export default MeterThumb
