import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, Switch } from '@flow-ui/core'

type Props = {
    name: string
    tools: ArchitectTools
}

const BooleanControls = (props: Props) => {
    if (!props.tools.focused) {
        return null
    }
    let { name } = props

    return (
        <Block pb="0.5rem">
            <Switch
                size="s"
                label={name[0].toUpperCase() + name.slice(1)}
                onChange={value => {
                    if (props.tools.focused) {
                        props.tools.focused.props[props.name] = value
                        props.tools.update()
                    }
                }}
            />
        </Block>
    )
}
export default BooleanControls