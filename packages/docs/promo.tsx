import {Block, Header, Button} from '@flow-ui/core'

export default (props) => {
    return (
        <Block>
            <Header>Promo</Header>
            <Button onClick={()=>props.open()}>Go to Docs</Button>
        </Block>
    )
}