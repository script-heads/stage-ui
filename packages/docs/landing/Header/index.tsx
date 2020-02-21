import { Block, Text, Badge, Button, Display, Flexbox, Paragraph } from '@flow-ui/core'
import { HomePageProps } from '@flow-ui/documaker/core'
import MovingBlock from './MovingBlock'

export default (props: HomePageProps) => {
    return (
        <Flexbox backgroundColor={c => c.surface} justifyContent="center">
            <Flexbox w="60rem" px="2rem" css={{
                justifyContent: 'space-between',
                '@media(max-width:980px)': {
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }
            }}>
                <Flexbox column justifyContent="center">
                    <Display m="0" lineHeight={1} weight={800}>
                        <span>FlowUI</span>
                        <Text size="xl" weight={500} css={{
                            verticalAlign: 'text-top',
                        }} textColor={c => c.primary}>β</Text>
                    </Display>
                    <Paragraph
                        w="22rem"
                        size="l"
                        color={c => c.light}
                        children="Consistent React UI Framework declared by your own Design System."
                    />
                    <Flexbox mt="2rem" wrap="wrap">
                        <Button
                            size="l"
                            mb="0.5rem"
                            mr="0.5rem"
                            onClick={() => props.history.push(props.pages.docs)}
                            children="Documentation"
                        />
                        <Button
                            size="l"
                            mb="0.5rem"
                            color={c => c.lightest}
                            onClick={() => props.history.push('architect')}
                            children="Graphics editor"
                        />
                    </Flexbox>
                </Flexbox>
                <MovingBlock />
            </Flexbox>
        </Flexbox>
    )
}