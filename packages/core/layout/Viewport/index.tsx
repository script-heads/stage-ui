import React, { forwardRef, ForwardRefRenderFunction } from 'react'

import * as themes from '@stage-ui/core/themes'
import { Provider, useSystem } from '@stage-ui/system'

import { DropRenderer } from '../../hooks/components/DropRenderer'

import MountArea from './MountArea'
import Types from './types'

import styles from './styles'

const Viewport: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { theme: themeProp = themes.light, wrapper, cache, children } = props
  const theme = typeof themeProp === 'string' ? themes[themeProp] : themeProp
  const { classes, attributes, events, styleProps } = useSystem(
    'Viewport',
    props,
    styles,
    {
      theme,
    },
  )
  const Content = (
    <Provider
      theme={theme}
      global={!wrapper ? [classes.container, styleProps.all] : undefined}
      cacheOptions={cache}
    >
      <>
        {children}
        <MountArea />
        <DropRenderer />
      </>
    </Provider>
  )

  if (wrapper) {
    return (
      <div ref={ref} {...attributes} {...events}>
        {Content}
      </div>
    )
  }

  return Content
}

export default forwardRef(Viewport)
