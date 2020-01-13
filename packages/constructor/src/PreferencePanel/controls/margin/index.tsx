import { StructureContext } from '@flow-ui/constructor/types'
import { Block, Button, Paragraph } from '@flow-ui/core'
import { ButtonGroup } from '@flow-ui/lab'

const values = [
    ['none', 'none'],
    ['xsmall', '0.125rem'],
    ['small', '0.25rem'],
    ['normal', '0.5rem'],
    ['large', '0.75rem'],
    ['xlarge', '1rem'],
]

const MarginControls = (props: { context: StructureContext, onUpdate: () => void }) => {
    if (!props.context.focused) {
        return null
    }
    return (
        <Block pb="0.5rem">
            <Paragraph
                size={4}
                pb=".25rem"
                pl=".25rem"
                lineHeight="0.75rem"
                color={c => c.light.hex()}
                children="Margin"
            />
            <ButtonGroup>
                {
                    values.map(value => (
                        <Button
                            flex={1}
                            size="small"
                            decoration={
                                (
                                    (!props.context.focused.m && value[1] === 'none')
                                    || props.context.focused.m === value[1]
                                ) ? 'filled' : 'outline'
                            }
                            key={value[0]}
                            children={value[0]}
                            onClick={() => {
                                props.context.focused.m = value[1]
                                props.onUpdate()
                            }}
                        />
                    ))
                }
            </ButtonGroup>
        </Block>
    )
}
export default MarginControls