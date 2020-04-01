import { Block, Flexbox, Header, Text, Divider } from '@flow-ui/core'
import React from 'react'

interface ComponentsProps {
    title: string
    subtitle: string
    components: string[]
}

export default (props: ComponentsProps) => {

    const { title, subtitle, components } = props

    return (
        <Block mb="6rem">
            <Divider mb="6rem" />
            <Block flex={1} css={{ overflow: 'hidden' }}>
                <Header size="xl" children={title} color={c => c.light} mb={0} css={{ maxWidth: '40rem' }} />
                <Header
                    mt={0}
                    size="xl"
                    children={subtitle}
                    css={{ maxWidth: '50rem' }}
                />
                <Flexbox
                    css={t => ({
                        flexWrap: 'wrap',
                        color: t.color.primary.hex(),
                        'span': {
                            cursor: 'pointer',
                        }
                    })}
                    mt="2rem">
                    {components.map((name, index) => (
                        <Text
                            key={name + index}
                            id="component-label"
                            size="l"
                            mr="2rem"
                            mt="2rem"
                            weight="bold"
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