import { StructureContext } from '@flow-ui/constructor/types'
import { Block, Button, Paragraph, Select } from '@flow-ui/core'
import { ButtonGroup } from '@flow-ui/lab'

type Props = {
    name: string,
    values: string[] | number[]
    context: StructureContext,
    onUpdate: () => void
}

const LiteralGroupControls = (props: Props) => {
    if (!props.context.focused) {
        return null
    }

    const values = ['default'].concat(props.values as string[])
    const focusedValue = props.context.focused[props.name]
    let currentValue = values.find(item => item === focusedValue)
    if (!currentValue) {
        currentValue = values[0]
    }
    return (
        <Block pb="0.5rem">
            <Paragraph
                size={4}
                pb=".25rem"
                pl=".25rem"
                lineHeight="0.75rem"
                color={c => c.light.hex()}
                children={props.name[0].toUpperCase() + props.name.slice(1)}
            />
            {values.length < 5
                ? (
                    <ButtonGroup>
                        {
                            values.map((value: number | string) => (
                                <Button
                                    flex={1}
                                    size="small"
                                    decoration={value === currentValue ? 'filled' : 'outline'
                                    }
                                    key={value}
                                    children={value}
                                    onClick={() => {
                                        props.context.focused[props.name] = value
                                        props.onUpdate()
                                    }}
                                />
                            ))
                        }
                    </ButtonGroup>
                )
                : (
                    <Select
                        size="small"
                        defaultValues={[
                            { text: currentValue, value: currentValue }
                        ]}
                        options={values.map(value => ({
                            text: value, value
                        }))}
                        onChange={(e, option) => {
                            props.context.focused[props.name] = option.value
                            props.onUpdate()
                        }}
                    />
                )}
        </Block>
    )
}
export default LiteralGroupControls