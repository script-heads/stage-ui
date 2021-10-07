import React, { forwardRef, ForwardRefRenderFunction, useEffect, useState } from 'react'
import { useSystem } from '@stage-ui/system'

import createClasses from './styles'
import Types from './types'

const Button: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { disabled, defaultValue } = props
  const { classes, attributes, events, styleProps } = useSystem('Toggle', props, createClasses, {
    focus: 'tabOnly',
  })
  /**
   * Store of selected values
   */
  const [value, setValue] = useState<Types.Option | undefined>()
  const [offset, setOffset] = useState(0)
  const refs: HTMLDivElement[] = []
  /**
   * Call when ever values change
   * support controlled and uncontrolled
   * second arg need if you need filter values by search
   */
  function onChange(newValue: Types.Option) {
    if (props.value === undefined) {
      setValue(newValue)
    }
    props.onChange?.(newValue)
  }

  /**
   * Setting values
   */
  function setOption(v: Types.Option) {
    onChange?.(v)
    setValue(v)
    setOffset(refs[props.options.findIndex((o) => o.value === v.value)]?.offsetLeft)
  }

  /**
   * Component did mount
   */
  useEffect(() => {
    if (defaultValue) {
      setOption(defaultValue)
    }
  }, [])

  /**
   * Component will receive value
   */
  useEffect(() => {
    if (props.value) {
      setOption(props.value)
    }
  }, [props.value?.value])

  return (
    <div
      {...attributes}
      {...events}
      ref={ref}
      onChange={undefined}
      css={[
        classes.container,
        styleProps.all,
        {
          ':before': {
            content: value && `"${value?.text}"`,
            left: `${offset}px`,
          },
        },
      ]}
    >
      {props.options.map((option) => (
        <div
          ref={(r) => refs.push(r!)}
          key={option.value.toString()}
          css={[
            classes.option({
              selected: option.value === value?.value,
            }),
          ]}
          onClick={(e) => {
            e.stopPropagation()
            if (typeof props.value !== 'undefined') {
              props.onChange?.(option)
            } else {
              setOption(option)
            }
          }}
        >
          {option.text}
        </div>
      ))}
    </div>
  )
}

export default forwardRef(Button)
