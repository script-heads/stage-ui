import React from 'react'

import { FocusTrap, FocusTrapProps } from 'focus-trap-react'

export const FocusTrapWrapper = ({
  trapFocus,
  children,
  focusTrapOptions,
}: {
  children: JSX.Element
  trapFocus?: boolean
  focusTrapOptions?: FocusTrapProps['focusTrapOptions']
}) => {
  if (trapFocus) {
    return (
      <FocusTrap {...focusTrapOptions}>
        <div>{children}</div>
      </FocusTrap>
    )
  }
  return children
}
