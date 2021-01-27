/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Block, Divider, Flexbox, Header, Text, useTheme } from '@stage-ui/core'

interface ComponentsProps {
    title: string
    subtitle: string
    components: string[]
}

export default (props: ComponentsProps) => {

    const { title, subtitle, components } = props
    const theme = useTheme()
    return (
        <Block mb="6rem">
            <Divider mb="6rem" gap="4px" dash="1px" />
            <Block flex={1} css={{ overflow: 'hidden' }}>
                <Header 
                    size="xl" 
                    children={title} 
                    color={c => c.light} 
                    mb={0} 
                    css={{ maxWidth: '40rem' }} 
                />
                <Header
                    mt={0}
                    // size="xl"
                    children={subtitle}
                    css={{ maxWidth: '50rem' }}
                />
                <Flexbox
                    css={t => ({
                        flexWrap: 'wrap',
                        color: theme.color.primary.hex(),
                        'span': {
                            cursor: 'pointer',
                        }
                    })}
                    mt="2rem">
                    {components.map((name, index) => (
                        <Text
                            key={name + index}
                            id="component-label"
                            size="s"
                            weight="bold"
                            mr="1rem"
                            mt="1rem"
                            transform="uppercase"
                            children={name}
                            onClick={() => location.href = '/' + name.toLocaleLowerCase()}
                        />
                    ))}
                </Flexbox>
            </Block>
        </Block>
    )
}