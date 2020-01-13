import { ConstructorContext } from '@flow-ui/constructor/types'
import { Block, Text, Paragraph, TextField, Flexbox, Select } from '@flow-ui/core'
import { ButtonGroup } from '@flow-ui/lab'

const SizeConrols = (props: { context: ConstructorContext }) => {
    if (!props.context.focused) {
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
                    defaultValue={props.context.focused.w}
                    w="1px" 
                    size="small" 
                    onChange={e => {
                        if (props.context.focused) {
                            if (e.target.value) {
                                props.context.focused.w = e.target.value + valueType
                            } else {
                                delete props.context.focused.w
                            }
                            props.context.update()
                        }
                    }}
                />
                <TextField 
                    ml="1rem"
                    placeholder="auto" 
                    label="Height"
                    defaultValue={props.context.focused.h}
                    w="1px" 
                    size="small" 
                    onChange={e => {
                        if (props.context.focused) {
                            if (e.target.value) {
                                props.context.focused.h = e.target.value + valueType
                            } else {
                                delete props.context.focused.h
                            }
                            props.context.update()
                        }
                    }}
                />
                <TextField 
                    ml="1rem"
                    placeholder="auto" 
                    label="Flex"
                    defaultValue={props.context.focused.flex}
                    w="1px" 
                    size="small" 
                    onChange={e => {
                        if (props.context.focused) {
                            if (e.target.value) {
                                props.context.focused.flex = e.target.value
                            } else {
                                delete props.context.focused.flex
                            }
                            props.context.update()
                        }
                    }}
                />
            </Flexbox>
        </Block>
    )
}
export default SizeConrols