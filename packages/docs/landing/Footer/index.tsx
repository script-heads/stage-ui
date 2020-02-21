import { Block, ScrollView, Grid, Flexbox, Header, Paragraph } from '@flow-ui/core'
import { HomePageProps } from '@flow-ui/documaker/core'

export default () => {
    return (
        <Flexbox justifyContent="center" backgroundColor={c => c.onSurface}>
            <Block textColor={c => c.surface} css={{
                width: '45rem',
                minWidth: '45rem'
            }}>
                <Header children="FlowUI" />
            </Block>
        </Flexbox>
    )
}