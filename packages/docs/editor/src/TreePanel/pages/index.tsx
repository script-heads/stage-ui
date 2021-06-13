import { Paragraph } from '@stage-ui/core'
import React, { Fragment } from 'react'
import { TabProps } from '..'
import { context } from '../../..'

const PagesTab = (props: TabProps) => {
  return (
    <>
      {context.tools.getItems().length === 0 && (
        <Paragraph align="center" pt="2rem" color={(c) => c.light} children="Pages" />
      )}
    </>
  )
}

export default PagesTab
