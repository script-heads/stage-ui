import { Text, Header, Button, Flexbox } from '@flow-ui/core'
import { HomePageProps } from '@flow-ui/documaker/core'

export default (props: HomePageProps) => {

    return (
        <Flexbox column alignItems="center" mt="2rem" flex={1}>
            <Header>FlowUI</Header>
            <Text color={c => c.light.hex()}>Consistent React UI Framework declared by your own Design System.</Text>
            <Flexbox mt="1rem">
                <Button
                    onClick={() => props.history.push(props.pages.docs)}
                    children="Documentation"
                />
                <Button
                    ml="0.25rem"
                    color={c => c.lightest.hex()}
                    onClick={() => props.history.push('architect')}
                    children="🚧 Architect"
                />
            </Flexbox>
        </Flexbox>
    )
}