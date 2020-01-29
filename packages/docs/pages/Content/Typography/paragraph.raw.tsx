import React, { Fragment } from 'react'
import { Paragraph } from '@flow-ui/core'

export default () => {
    return (
        <Fragment>
            <Paragraph size="xl">Extra large</Paragraph>
            <Paragraph size="l">Large</Paragraph>
            <Paragraph size="m">Medium</Paragraph>
            <Paragraph size="s">Small</Paragraph>
            <Paragraph size="xs">Extra small</Paragraph>
        </Fragment>
    )
}