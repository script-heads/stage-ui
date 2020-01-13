import { ArchitectTools } from '@flow-ui/architect/types'
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

type Props = {
    tools: ArchitectTools
}

const PaddingControls = (props: Props) => {
    if (!props.tools.focused) {
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
                children="Padding"
            />
            <ButtonGroup>
                {
                    values.map(value => (
                        <Button
                            flex={1}
                            size="small"
                            decoration={
                                (
                                    (!props.tools.focused.props.p && value[1] === 'none')
                                    || props.tools.focused.props.p === value[1]
                                ) ? 'filled' : 'outline'
                            }
                            key={value[0]}
                            children={value[0]}
                            onClick={() => {
                                if (props.tools.focused) {
                                    props.tools.focused.props.p = value[1]
                                    props.tools.update()
                                }
                            }}
                        />
                    ))
                }
            </ButtonGroup>
        </Block>
    )
}
export default PaddingControls