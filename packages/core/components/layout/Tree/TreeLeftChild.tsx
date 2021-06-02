import { ArrowRight } from '@stage-ui/icons'
import React, { Fragment } from 'react'
import Types from './types'

const TreeLeftChild = (props: Types.TreeLeftChildProps) => {
  let { options, children, className } = props

  if (typeof children === 'function') {
    children = children(options)
  }
  return (
    <>
      {children !== undefined ? children : <ArrowRight rotate={options.isOpen ? 90 : 0} className={className} />}
    </>
  )
}

export default TreeLeftChild
