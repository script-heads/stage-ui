import { Block, Button, Flexbox, Paragraph } from '@stage-ui/core'
import { ButtonGroup } from '@stage-ui/lab'
import { context } from '../../../..'
import React from 'react'

const SizeConrols = () => {
    if (!context.tools.focused) {
        return null
    }
    const valueTypes = [
        { text: 'rem', value: 'rem' },
        { text: '%', value: '%' }
    ]
    let valueType = valueTypes[0].value

    return (
        <Block pb="0.5rem">
            <Paragraph
                pb=".25rem"
                pl=".25rem"
                lineHeight="0.75rem"
                color={c => c.light}
                children="Flex"
            />
            <Flexbox flex={1}>
                {/* <TextField 
                    placeholder="auto" 
                    label="Width"
                    defaultValue={context.tools.focused.props.w}
                    w="1px" 
                    size="s"
                    onChange={e => {
                        if (context.tools.focused) {
                            if (e.target.value) {
                                context.tools.focused.props.w = e.target.value + valueType
                            } else {
                                delete context.tools.focused.props.w
                            }
                            context.tools.update()
                        }
                    }}
                />
                <TextField 
                    ml="1rem"
                    placeholder="auto" 
                    label="Height"
                    defaultValue={context.tools.focused.props.h}
                    w="1px" 
                    size="s"
                    onChange={e => {
                        if (context.tools.focused) {
                            if (e.target.value) {
                                context.tools.focused.props.h = e.target.value + valueType
                            } else {
                                delete context.tools.focused.props.h
                            }
                            context.tools.update()
                        }
                    }}
                /> */}
                <ButtonGroup flex={1}>
                    {Array(11).fill(0).map((_, index) => {
                        const focused = context.tools.focused
                        return (
                            <Button
                                key={index}
                                flex={1}
                                size="xs"
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
                                        context.tools.update()
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
                    defaultValue={context.tools.focused.props.flex}
                    w="1px" 
                    size="s"
                    onChange={e => {
                        if (context.tools.focused) {
                            if (e.target.value) {
                                context.tools.focused.props.flex = e.target.value
                            } else {
                                delete context.tools.focused.props.flex
                            }
                            context.tools.update()
                        }
                    }}
                /> */}
            </Flexbox>
        </Block>
    )
}
export default SizeConrols