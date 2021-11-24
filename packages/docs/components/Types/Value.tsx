import React from 'react'
import { Flexbox, Link, Text } from '@stage-ui/core'
import TextTypes from '@stage-ui/core/content/Text/types'
import { OType, Property } from '@stage-ui/docs/utils/types'

const LightText = (props: { children: string }) => (
  <Text size="xs" color="hard">
    {props.children}
  </Text>
)

const Badge = (props: {
  text: string
  textColor?: TextTypes.Props['textColor']
  backgroundColor?: TextTypes.Props['backgroundColor']
}) => (
  <Text
    h="fit-content"
    size="xs"
    p=".125rem 0.25rem"
    mx=".125rem"
    mb=".25rem"
    textColor={props.textColor || 'onSurface'}
    backgroundColor={
      props.backgroundColor ||
      ((c) => {
        switch (props.text) {
          case 'number':
            return c.success.alpha(0.2)
          case 'boolean':
            return c.primary.alpha(0.2)
          case 'string':
            return c.error.alpha(0.2)
          case 'function':
            return c.primary.alpha(0.3)
          default:
            return c.onSurface.alpha(0.1)
        }
      })
    }
    css={{ borderRadius: '.25rem' }}
  >
    {props.text}
  </Text>
)

const Value = (props: { property: Property }) => {
  const { property } = props

  let values: JSX.Element[] = []

  const { value, tags } = property

  const push = (newVal: OType) => {
    let val = newVal
    let isArray = false
    let ret = <span />

    if (val.type === 'array') {
      val = val.elementType
      isArray = true
    }
    if (val.type === 'reflection') {
      if (val.declaration.signatures) {
        ret = <Badge text="function" />
      }
    }
    if (val.type === 'intrinsic') {
      const text = val.name
      ret = <Badge text={text} />
    }
    if (val.type === 'stringLiteral') {
      const text = val.value
      ret = <Badge text={text} />
    }
    if (val.type === 'reference') {
      ret = <Badge text={val.name} backgroundColor="onSurface" textColor="surface" />
    }

    values.push(
      isArray ? <span key={Math.random()}>[{ret}]</span> : <span key={Math.random()}>{ret}</span>,
    )
  }

  const val = value

  if (val.type === 'union') {
    val.types.map((v) => push(v))
  } else {
    push(val)
  }

  if (values.length === 0) {
    values.push(<LightText key={Math.random()}>Not documented yet</LightText>)
  }

  if (tags.display) {
    const vals = tags.display.split('|')
    values = []
    for (const v of vals) {
      values.push(
        <Badge
          key={Math.random()}
          text={v.trim()}
          textColor={tags.display ? 'primary' : undefined}
          backgroundColor={tags.display ? (c) => c.primary.alpha(0.1) : undefined}
        />,
      )
    }
  }
  if (tags.link) {
    return (
      <Link target="_blank" css={{ textDecoration: 'underline' }} color="primary" href={tags.link}>
        {values}
      </Link>
    )
  }

  return <Flexbox wrap="wrap">{values}</Flexbox>
}

export default Value
