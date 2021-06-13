import { Block, Flexbox, Header, Paragraph } from '@stage-ui/core'
import FlexboxTypes from '@stage-ui/core/layout/Flexbox/types'
import colorUtils from 'color'
import { useEffect, useRef, useState } from 'react'

interface ColorPickProps {
  color: SystemTypes.ColorProp
  title?: string
  subtitle?: string
  onChange: (color: number[], hex: string) => void
  onClick?: () => void
  container?: FlexboxTypes.Props
}
let timer
const ColorPick = (props: ColorPickProps) => {
  const { color, title, subtitle, onChange, onClick } = props
  const [customColor, setCustomColor] = useState('')
  const colorRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!customColor) return
    clearTimeout(timer)
    timer = setTimeout(() => {
      onChange(colorUtils(customColor).rgb().array(), customColor)
    }, 250)
  }, [customColor])

  return (
    <Flexbox {...props.container}>
      <input
        hidden
        type="color"
        ref={colorRef}
        onChange={(e) => {
          setCustomColor(e.target.value)
        }}
      />
      <Block w="2.5rem" h="2.5rem" decoration="surface" borderRadius="2.5rem">
        <Block
          w="2rem"
          h="2rem"
          m="0.25rem"
          borderRadius="2rem"
          backgroundColor={customColor || color}
          onClick={() => {
            if (props.onClick) {
              props.onClick()
            } else {
              colorRef.current?.click()
            }
          }}
        />
      </Block>
      {(title || subtitle) && (
        <Block css={{ letterSpacing: '0.125rem' }} pl="0.5rem">
          {title && <Header m={0} size="s" weight={700} fontSize="0.75rem" children={title} />}
          {subtitle && (
            <Paragraph
              m={0}
              p={0}
              size="s"
              lineHeight={1}
              textColor="hard"
              fontSize="0.625rem"
              children={subtitle}
            />
          )}
        </Block>
      )}
    </Flexbox>
  )
}

export default ColorPick
