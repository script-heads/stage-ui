import { Block, Flexbox, Grid, Header, Paragraph } from '@flow-ui/core'
import Container from '../../components/Container'

const TextBlock = (props: { title: string, text: string }) => {
    return (
        <Block>
            <Header children={props.title}/>
            <Paragraph children={props.text}/>
        </Block>
    )
}

export default () => {
    return (
        <Block mb="6rem">
            <Grid gap="4rem" templateColumns="repeat(auto-fit,minmax(18rem,1fr))">
                <TextBlock
                    title="Superpower theme"
                    text="Get unique design moving top-down. From simple general statements like colours and spacing through shared styles like typography and borders to fine tuning each component. You can specify only a few values or define everything. And then create a new theme from the current."
                />
                <TextBlock
                    title="Work together"
                    text="Components designed for combinations. Highly reused layout and content primitives and the ability of complex components to take them gives you room for building what you imagined."
                />
                <TextBlock
                    title="Speed up boring stuff"
                    text="Shorthands for setting styles like padding, margin and flex positioning. Easy color management to get this brighten, darken or different hue. Utilities for show up modal or notification in one function call."
                />
            </Grid>
        </Block>
    )
}