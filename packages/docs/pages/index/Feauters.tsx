import { Block, Grid, Header, Paragraph } from '@stage-ui/core'
import React from 'react'

const TextBlock = (props: { title: string, text: string }) => {
    return (
        <Block>
            <Header children={props.title} />
            <Paragraph align="justify" children={props.text} color="hard" />
        </Block>
    )
}

export default () => {
    return (
        <Block mb="6rem">
            <Grid gap="4rem" templateColumns="repeat(auto-fit,minmax(18rem,1fr))">
                <TextBlock
                    title="Superpower theme"
                    text="Get a special design moving top-down. From simple general statements, such as colors and spacing, through shared styles, such as typography and borders, to fine-tuning of each component. You can specify only a few values or define everything. And then create a new theme from the current one."
                />
                <TextBlock
                    title="Work together"
                    text="Components designed for combinations. Primitives for positioning elements and displaying content can be transferred to more complex components and vice versa. This makes it possible to control the HTML-coding finely to create the interface excactly the way you imagined."
                />
                <TextBlock
                    title="Speed up boring stuff"
                    text="Components contain special properties for setting styles quickly, such as padding, margin or flex. Each color in the theme contains functions for controlling brightness, transparency, hue, and other parameters. Modal windows and notifications can be called by one function even outside the React components."
                />
            </Grid>
        </Block>
    )
}