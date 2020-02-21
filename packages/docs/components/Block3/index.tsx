import { Block, ScrollView, Grid, Flexbox, Header, Paragraph } from '@flow-ui/core'
import { HomePageProps } from '@flow-ui/documaker/core'

const TextBlock = (props: { title: string, text: string }) => {
    return (
        <Block decoration="surface" borderWidth={0} px="1rem" m="0.5rem" css={{
            width: '15rem',
            minWidth: '15rem'
        }}>
            <Header children={props.title}/>
            <Paragraph children={props.text}/>
        </Block>
    )
}
export default (props: HomePageProps) => {
    return (
        // <ScrollView mode="hidden">
            <Flexbox justifyContent="center">
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
            </Flexbox>
        // </ScrollView>
    )
}