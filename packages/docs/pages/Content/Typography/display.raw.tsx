import React, { Fragment } from 'react'
import { Display } from '@flow-ui/core'

export default () => {
    return (
        <Fragment>
            <Display>Display</Display>
            <Display size={2}>Display</Display>
            <Display size={3}>Display</Display>
            <Display size={4}>Display</Display>
        </Fragment>
    )
}