/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Block, Divider, Flexbox, Header, Text, useTheme } from '@stage-ui/core'

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
        <Header size="xl" children={title} color={(c) => c.light} mb={0} css={{ maxWidth: '40rem' }} />
        <Header mt={0} mb="2rem" children={subtitle} css={{ maxWidth: '50rem' }} />
        {props.graphic}
        <Text display="block" mt="2rem" size="xs" color={(c) => c.light}>
          Also at {title}:
        </Text>
        <Flexbox
          css={(t) => ({
            flexWrap: 'wrap',
            color: theme.color.primary.rgb().string(),
            span: {
              cursor: 'pointer',
            },
          })}
          children={components.map((name, index) => (
            <Text
              key={name + index}
              id="component-label"
              size="s"
              weight="bold"
              mr="1rem"
              mt="0.5rem"
              transform="uppercase"
              children={name}
              onClick={() => (location.href = `/${name.toLocaleLowerCase()}`)}
            />
          ))}
        />
      </Block>
    </Block>
  )
}
