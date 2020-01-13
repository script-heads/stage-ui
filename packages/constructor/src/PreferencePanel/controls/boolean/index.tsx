import { ConstructorContext } from '@flow-ui/constructor/types'
import { Block, Switch } from '@flow-ui/core'

type Props = {
    name: string
    context: ConstructorContext
}

const BooleanControls = (props: Props) => {
    if (!props.context.focused) {
        return null
    }
    let { name } = props

    return (
        <Block pb="0.5rem">
            <Switch
                size="small"
                label={name[0].toUpperCase() + name.slice(1)}
                onChange={value => {
                    props.context.focused[props.name] = value
                }}
            />
        </Block>
    )
}
export default BooleanControls