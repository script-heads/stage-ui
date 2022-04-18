/* eslint-disable react/destructuring-assignment */
import React from 'react'

import { Flexbox, notify, Text, useTheme } from '@stage-ui/core'

type ColorPreviewProps = {
  value: Stage.Color
  prefix?: string
  name: string
  circle?: boolean
}
const ColorPreview: React.FC<ColorPreviewProps> = (props) => {
  const { name, prefix = '', value, circle } = props
  const theme = useTheme()

  const copyColor = () => {
    const el = document.createElement('textarea')
    el.value = `${prefix}${name}`
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    notify({
      title: 'Color',
      message: `${prefix}${name} copyed to clipboard`,
      timeout: 3000,
    })
  }

  if (circle) {
    return (
      <Flexbox
        w="15rem"
        mb="l"
        alignItems="center"
        onClick={copyColor}
        css={{
          '> div': {
            transition: 'all 0.5s',
            transform: 'scale(1)',
          },
          ':hover > div': {
            transform: 'scale(1.1) translateX(-10%)',
          },
        }}
      >
        <Flexbox
          as="div"
          backgroundColor={value}
          w="3rem"
          h="3rem"
          borderRadius="100%"
          shadow="xs"
        />
        <Flexbox as="span" column ml="m">
          <Text color="onSurface" size="l" weight="bold" lineHeight={1.5}>
            {name}
          </Text>
          <Text size="s" color="light" lineHeight={1.5}>
            {value.hex()}
          </Text>
        </Flexbox>
      </Flexbox>
    )
  }
  return (
    <Flexbox
      column
      mb="m"
      onClick={copyColor}
      css={{
        '> div': {
          transition: 'all 0.5s',
          transform: 'scale(1)',
        },
        ':hover > div': {
          transform: 'scale(1.1) translateX(-10%) translateY(-10%)',
          borderRadius: '0.25rem',
        },
      }}
    >
      <Flexbox as="div" w="5.4rem" h="3rem" p="s" backgroundColor={value} />
      <Text color="onSurface" size="m" weight="bold" mt="s">
        {name}
      </Text>
      <Text size="xs" color="light">
        {value.hex()}
      </Text>
    </Flexbox>
  )
}

export default ColorPreview
