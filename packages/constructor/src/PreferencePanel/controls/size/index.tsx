import { StructureContext } from '@flow-ui/constructor/types'
import { Block, Text, Paragraph, TextField, Flexbox, Select } from '@flow-ui/core'
import { ButtonGroup } from '@flow-ui/lab'

const SizeConrols = (props: { context: StructureContext, onUpdate: () => void }) => {
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
            <Paragraph
                size={3}
                weight="bold"
                color={c => c.light.hex()}
                children="Size"
            />
            <Flexbox>
                <TextField 
                    placeholder="width" 
                    defaultValue={parseInt(props.context.focused.w)}
                    w="1px" 
                    size="xsmall" 
                    onChange={e => {
                        if (props.context.focused) {
                            if (e.target.value) {
                                props.context.focused.w = e.target.value + valueType
                            } else {
                                delete props.context.focused.w
                            }
                            props.onUpdate()
                        }
                    }}
                />
                <Text color={c => c.light.hex()} p="0 0.25rem">x</Text>
                <TextField 
                    placeholder="height" 
                    defaultValue={parseInt(props.context.focused.h) || ''}
                    w="1px" 
                    size="xsmall" 
                    onChange={e => {
                        if (props.context.focused) {
                            if (e.target.value) {
                                props.context.focused.h = e.target.value + valueType
                            } else {
                                delete props.context.focused.h
                            }
                            props.onUpdate()
                        }
                    }}
                />
                {/* <Select
                    ml="0.25rem"
                    size="xsmall" 
                    defaultValues={[valueTypes[0]]}
                    options={valueTypes}
                    onChange={(e, option) => {
                        valueType = option.value
                    }}
                /> */}
            </Flexbox>
        </Block>
    )
}
export default SizeConrols