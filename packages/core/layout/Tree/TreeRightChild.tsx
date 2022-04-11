import React, { Fragment } from 'react'

import Types from './types'

const TreeRightChild = (props: Types.TreeRightChildProps) => {
  let { options, children } = props

  if (typeof children === 'function') {
    children = children(options)
  }
  return <>{children}</>
}

export default TreeRightChild
