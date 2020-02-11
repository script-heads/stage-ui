import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, Button, Paragraph, Select } from '@flow-ui/core'
import { ButtonGroup } from '@flow-ui/lab'

type Props = {
    name: string,
    values: string[] | number[]
    tools: ArchitectTools
}

const LiteralControls = (props: Props) => {
    if (!props.tools.focused) {
        return null
    }

    const defaultKey = 'default'
    const values = [defaultKey].concat(props.values as string[])
    const focusedValue = props.tools.focused.props[props.name]
    let currentValue = values.find(item => item === focusedValue)
    if (!currentValue) {
        currentValue = values[0]
    }
    return (
        <Block pb="0.5rem">
            <Paragraph
                pb=".25rem"
                pl=".25rem"
                lineHeight="0.75rem"
                color={c => c.light}
                children={props.name[0].toUpperCase() + props.name.slice(1)}
            />
            {values.length < 5
                ? (
                    <ButtonGroup>
                        {
                            values.map((value: number | string) => (
                                <Button
                                    flex={1}
                                    size="s"
                                    decoration={value === currentValue ? 'filled' : 'outline'}
                                    key={value}
                                    children={value}
                                    onClick={() => {
                                        if (props.tools.focused) {
                                            props.tools.focused.props[props.name] = value
                                            if (value === defaultKey) {
                                                delete props.tools.focused.props[props.name]
                                            }
                                            props.tools.update()
                                        }
                                    }}
                                />
                            ))
                        }
                    </ButtonGroup>
                )
                : (
                    <Select
                        size="s"
                        defaultValues={[
                            { text: currentValue, value: currentValue }
                        ]}
                        options={values.map(value => ({
                            text: value, value
                        }))}
                        onChange={(e, option) => {
                            if (props.tools.focused && option) {
                                props.tools.focused.props[props.name] = option.value
                                if (option.value === defaultKey) {
                                    delete props.tools.focused.props[props.name]
                                }
                                props.tools.update()
                            }
                        }}
                    />
                )}
        </Block>
    )
}
export default LiteralControls