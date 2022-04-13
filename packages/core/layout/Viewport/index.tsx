import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from 'react'

import * as themes from '@stage-ui/core/themes'
import { Provider, useSystem } from '@stage-ui/system'

import MountArea from './MountArea'
import styles from './styles'
import Types from './types'

const Viewport: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { wrapper, cache, children, theme: themeProp = themes.light } = props
  const theme = typeof themeProp === 'string' ? themes[themeProp] : themeProp

  const viewportRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => viewportRef.current as HTMLDivElement)

  const EmotionCache = {
    key: 'stage',
    container: (viewportRef && viewportRef.current) || undefined,
    ...cache,
  }

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
      cacheOptions={EmotionCache}
    >
      <>
        {children}
        <MountArea />
      </>
    </Provider>
  )

  return wrapper ? (
    <div
      {...attributes}
      {...events}
      ref={viewportRef}
      css={[classes.container, styleProps.all]}
    >
      {Content}
    </div>
  ) : (
    Content
  )
}

export default forwardRef(Viewport)
