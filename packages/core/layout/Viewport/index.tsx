import React, { forwardRef, ForwardRefRenderFunction } from 'react'

import * as themes from '@stage-ui/core/themes'
import { Provider } from '@stage-ui/system'

import MountArea from './MountArea'
import Types from './types'

const Viewport: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { theme: themeProp = themes.light, wrapper, cache, children, global } = props
  const theme = typeof themeProp === 'string' ? themes[themeProp] : themeProp

  const Content = (
    <Provider theme={theme} global={global} cacheOptions={cache}>
      <>
        {children}
        <MountArea />
      </>
    </Provider>
  )

  if (wrapper) {
    return <div ref={ref}>{Content}</div>
  }

  return Content
}

export default forwardRef(Viewport)
