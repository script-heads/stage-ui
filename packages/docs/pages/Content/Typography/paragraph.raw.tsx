import React, { Fragment } from 'react'
import { Paragraph } from '@flow-ui/core'

export default () => {
    return (
        <Fragment>
            <Paragraph>Paragraph</Paragraph>
            <Paragraph size={2}>Paragraph</Paragraph>
            <Paragraph size={3}>Paragraph</Paragraph>
            <Paragraph size={4}>Paragraph</Paragraph>
        </Fragment>
    )
}