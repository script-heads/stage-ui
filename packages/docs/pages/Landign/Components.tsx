import { Block, Flexbox, Header, Text, useTheme } from '@stage-ui/core'
import React from 'react'

interface ComponentsProps {
  title: string
  graphic?: React.ReactNode
  subtitle: string
  components: string[]
}

export default (props: ComponentsProps) => {
  const { title, subtitle, components } = props
  const theme = useTheme()
  return (
    <Block h="70vh">
      <Block flex={1} css={{ overflow: 'hidden' }}>
        <Header size="xl" color="light" mb={0}>
          {title}
        </Header>
        <Header mt={0} mb="2rem">
          {subtitle}
        </Header>
        {props.graphic}
        <Text display="block" mt="2rem" size="xs" color="light">
          Also at {title}:
        </Text>
        <Flexbox
          css={() => ({
            flexWrap: 'wrap',
            color: theme.color.primary.rgb().string(),
            span: {
              cursor: 'pointer',
            },
          })}
        >
          {components.map((name, index) => (
            <Text
              key={`${name}${index}`}
              id="component-label"
              size="s"
              weight="bold"
              mr="1rem"
              mt="0.5rem"
              transform="uppercase"
              onClick={() => {
                window.location.href = `/components/${name.toLocaleLowerCase()}`
              }}
            >
              {name}
            </Text>
          ))}
        </Flexbox>
      </Block>
    </Block>
  )
}
