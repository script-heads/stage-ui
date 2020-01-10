import { Block, Header, Button, Flexbox } from '@flow-ui/core'
import { HomePageProps } from '@flow-ui/documaker/core'

export default (props: HomePageProps) => {
   
    return (
        <Block>
            <Header>Promo</Header>
            <Flexbox>
                <Button
                    onClick={() => props.history.push(props.pages.docs)}
                    children="Documentation"
                />
                <Button
                    ml="0.25rem"
                    color={c => c.lightest.hex()}
                    onClick={() => props.history.push('constructor')}
                    children="🚧 Constructor"
                />
            </Flexbox>
        </Block>
    )
}