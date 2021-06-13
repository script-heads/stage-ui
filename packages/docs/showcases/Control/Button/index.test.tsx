import React from 'react'
import * as Core from '@stage-ui/core'
import ButtonTypes from '@stage-ui/core/components/control/Button/types'

const sizes = ['xl', 'l', 'm', 's', 'xs'] as ButtonTypes.Props['size'][]
const buttonDecoration = ['filled', 'outline', 'plain', 'text'] as ButtonTypes.Props['decoration'][]

export default () => (
  <Core.Block>
    <Core.Flexbox>
      {buttonDecoration.map((decoration) => (
        <div key={decoration}>
          {sizes.map((size) => (
            <div key={size}>
              <Core.Button size={size} decoration={decoration} children="Button" />
            </div>
          ))}
        </div>
      ))}
    </Core.Flexbox>
  </Core.Block>
)
