import React from 'react'
import { Block, Calendar, Grid } from '@stage-ui/core'

export default () => {
    return (
        <Grid gap="1rem" templateRows="1fr 1fr" templateColumns="1fr 1fr" alignItems="start">
            <Block p="m" decoration="mediumShadow" w="16rem">
                <Calendar type="day" />
            </Block>
            <Block p="m" decoration="mediumShadow" w="16rem">
                <Calendar type="week" />
            </Block>
            <Block p="m" decoration="mediumShadow" w="16rem">
                <Calendar type="month" />
            </Block>
            <Block p="m" decoration="mediumShadow" w="16rem">
                <Calendar type="year" />
            </Block>
        </Grid>
    )
}