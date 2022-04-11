import React, { FC } from 'react'

import { Flexbox, Spinner } from '@stage-ui/core'

export const AsyncPage: FC<
  { component: React.LazyExoticComponent<any> } & Record<string, unknown>
> = ({ component, ...props }) => {
  const Component = component
  return (
    <React.Suspense
      fallback={
        <Flexbox centered m="xl" my="40vh">
          <Spinner color={(c) => c.onSurface.alpha(0.5)} />
        </Flexbox>
      }
    >
      <Component {...props} />
    </React.Suspense>
  )
}
