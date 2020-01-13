import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, Flexbox, TextField } from '@flow-ui/core'

type Props = {
    tools: ArchitectTools
}

const SizeConrols = (props: Props) => {
    if (!props.tools.focused) {
        return null
    }
    const valueTypes = [
        { text:'rem', value:'rem' },
        { text:'%', value:'%' }
    ]
    let valueType = valueTypes[0].value

    return (
        <Block pb="0.5rem">
            <Flexbox alignItems="center">
                <TextField 
                    placeholder="auto" 
                    label="Width"
                    defaultValue={props.tools.focused.props.w}
                    w="1px" 
                    size="small" 
                    onChange={e => {
                        if (props.tools.focused) {
                            if (e.target.value) {
                                props.tools.focused.props.w = e.target.value + valueType
                            } else {
                                delete props.tools.focused.props.w
                            }
                            props.tools.update()
                        }
                    }}
                />
                <TextField 
                    ml="1rem"
                    placeholder="auto" 
                    label="Height"
                    defaultValue={props.tools.focused.props.h}
                    w="1px" 
                    size="small" 
                    onChange={e => {
                        if (props.tools.focused) {
                            if (e.target.value) {
                                props.tools.focused.props.h = e.target.value + valueType
                            } else {
                                delete props.tools.focused.props.h
                            }
                            props.tools.update()
                        }
                    }}
                />
                <TextField 
                    ml="1rem"
                    placeholder="auto" 
                    label="Flex"
                    defaultValue={props.tools.focused.props.flex}
                    w="1px" 
                    size="small" 
                    onChange={e => {
                        if (props.tools.focused) {
                            if (e.target.value) {
                                props.tools.focused.props.flex = e.target.value
                            } else {
                                delete props.tools.focused.props.flex
                            }
                            props.tools.update()
                        }
                    }}
                />
            </Flexbox>
        </Block>
    )
}
export default SizeConrols