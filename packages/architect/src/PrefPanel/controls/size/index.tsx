import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, Flexbox, Button, Paragraph } from '@flow-ui/core'
import { ButtonGroup } from '@flow-ui/lab'

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
            <Paragraph
                size={4}
                pb=".25rem"
                pl=".25rem"
                lineHeight="0.75rem"
                color={c => c.light.hex()}
                children="Flex"
            />
            <Flexbox flex={1}>
                {/* <TextField 
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
                /> */}
                <ButtonGroup flex={1}>
                    {Array(11).fill(0).map((_, index) => {
                        const focused = props.tools.focused
                        return (
                            <Button
                                key={index}
                                flex={1}
                                size="xsmall"
                                children={index ? index : '✕'}
                                decoration={(focused && focused.props.flex === index)
                                    ? 'filled'
                                    : 'outline'}
                                onClick={() => {
                                    if (focused) {
                                        if (index) {
                                            focused.props.flex = index
                                        } else {
                                            delete focused.props.flex
                                        }
                                        props.tools.update()
                                    }
                                }}
                            />
                        )
                    })}
                </ButtonGroup>
                {/* <TextField 
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
                /> */}
            </Flexbox>
        </Block>
    )
}
export default SizeConrols