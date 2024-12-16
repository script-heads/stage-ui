import React, { Fragment } from 'react'

import { Button, Divider, Flexbox, Text, useTheme } from '@stage-ui/core'
import * as Icons from '@stage-ui/icons'

import IconTypes from '@stage-ui/icons/Icon/types'

import { ColorProp } from '@stage-ui/system/props/color'

import { Hotkey } from '../../experimental/Hotkey'
import FlexboxTypes from '../../layout/Flexbox/types'
import ButtonTypes from '../../control/Button/types'
import TextTypes from '../../content/Text/types'

export type DropMenuOptions = {
  menuProps?: FlexboxTypes.Props
  buttonProps?: ButtonTypes.Props
  iconProps?: Partial<IconTypes.Props>
  textProps?: TextTypes.Props
  hotkeyProps?: FlexboxTypes.Props
  dividerSign?: string
}

export type DropMenuItem = {
  text: string
  selected?: boolean
  icon?: keyof typeof Icons
  customIconComponent: React.ReactNode
  color?: ColorProp
  iconColor?: ColorProp
  value?: string | number
  props?: ButtonTypes.Props
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  hidden?: boolean
  disabled?: boolean
  hotkey?: {
    key: string
    alt?: boolean
  }
}

type Props = { values: DropMenuItem[]; close: () => void } & DropMenuOptions

export const DropMenu = (props: Props) => {
  const {
    values,
    close,
    menuProps,
    buttonProps,
    iconProps,
    textProps,
    hotkeyProps,
    dividerSign = '-',
  } = props

  const theme = useTheme()

  return (
    <Flexbox column p="s" {...menuProps}>
      {values.map((value, index) => {
        if (value.hidden) return null
        const key = value.value || value.text
        const Icon = value.icon ? Icons[value.icon] : value.customIconComponent || null
        if (value.text === dividerSign) {
          return (
            <Divider
              key={key}
              my="0.25rem"
              color={(c) => c.onSurface.alpha(0.03).string()}
            />
          )
        }
        return (
          <Fragment key={key}>
            <Button
              w="100%"
              size="s"
              decoration="text"
              onClick={
                value.selected
                  ? undefined
                  : (e) => {
                      value.onClick?.(e)
                      if (!e.isPropagationStopped()) {
                        close()
                      }
                      e.stopPropagation()
                    }
              }
              disabled={value.disabled}
              my="0.0625rem"
              borderRadius="s"
              overrides={{
                container: {
                  justifyContent: 'flex-start',
                  ':hover': value.selected
                    ? {
                        backgroundColor: 'transparent',
                      }
                    : {
                        backgroundColor: value.disabled
                          ? 'transparent'
                          : theme.color.onSurface.alpha(0.05).string(),
                      },
                },
              }}
              {...value.props}
              {...buttonProps}
            >
              {Icon && (
                <Icon
                  mr="s"
                  {...iconProps}
                  color={
                    value.disabled
                      ? (c) => c.onSurface.alpha(0.3)
                      : value.iconColor || ((c) => c.onSurface.alpha(0.5))
                  }
                />
              )}
              <Text
                flex={1}
                size="xs"
                align="start"
                weight={600}
                lineHeight="1rem"
                {...textProps}
                color={
                  value.disabled
                    ? (c) => c.onSurface.alpha(0.3)
                    : value.color || ((c) => c.onSurface.alpha(0.75))
                }
              >
                {value.text}
              </Text>
              {value.hotkey && (
                <Hotkey ml="0.5rem" alt={value.hotkey.alt} {...hotkeyProps}>
                  {value.hotkey.key}
                </Hotkey>
              )}
            </Button>
          </Fragment>
        )
      })}
    </Flexbox>
  )
}
