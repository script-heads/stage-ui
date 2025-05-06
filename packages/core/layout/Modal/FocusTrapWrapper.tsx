import React from 'react'

import { FocusTrap } from 'focus-trap-react'

export const FocusTrapWrapper = ({
  trapFocus,
  children,
}: {
  children: JSX.Element
  trapFocus?: boolean
}) => {
  if (trapFocus) {
    return (
      <FocusTrap>
        <div>{children}</div>
      </FocusTrap>
    )
  }
  return children
}
