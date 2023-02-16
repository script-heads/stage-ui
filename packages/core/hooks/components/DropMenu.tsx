import React, { Fragment } from 'react'

import { Button, Divider, Flexbox, Text, useTheme } from '@stage-ui/core'
import * as Icons from '@stage-ui/icons'

import IconTypes from '@stage-ui/icons/Icon/types'

import { Hotkey } from '../../experimental/Hotkey'
import FlexboxTypes from '../../layout/Flexbox/types'
import ButtonTypes from '../../control/Button/types'
import TextTypes from '../../content/Text/types'
import { DropMenuItem } from '../misc/dropRef'

export type DropMenuDecorationProps = {
  menuProps?: FlexboxTypes.Props
  buttonProps?: ButtonTypes.Props
  iconProps?: IconTypes.Props
  textProps?: TextTypes.Props
  hotkeyProps?: FlexboxTypes.Props
}

type Props = { values: DropMenuItem[]; close: () => void } & DropMenuDecorationProps

export const DropMenu = (props: Props) => {
  const { values, close, menuProps, buttonProps, iconProps, textProps, hotkeyProps } =
    props

  const theme = useTheme()

  return (
    <Flexbox column p="s" {...menuProps}>
      {values.map((value, index) => {
        if (value.hidden) return null
        const key = value.value || value.text
        const Icon = value.icon ? Icons[value.icon] : null
        if (value.text === '-') {
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
              onClick={(e) => {
                e.stopPropagation()
                value.onClick?.()
                close()
              }}
              disabled={value.disabled}
              my="0.0625rem"
              borderRadius="s"
              overrides={{
                container: {
                  justifyContent: 'flex-start',
                  ':hover': {
                    backgroundColor: value.disabled
                      ? 'transparent'
                      : theme.color.onSurface.alpha(0.05).string(),
                  },
                },
              }}
              {...buttonProps}
            >
              {Icon && (
                <Icon
                  mr="s"
                  color={(c) =>
                    value.disabled
                      ? c.onSurface.alpha(0.3)
                      : value.color || c.onSurface.alpha(0.5)
                  }
                  {...iconProps}
                />
              )}
              <Text
                flex={1}
                size="xs"
                align="start"
                color={(c) =>
                  value.disabled ? c.onSurface.alpha(0.3) : c.onSurface.alpha(0.75)
                }
                weight={600}
                lineHeight="1rem"
                {...textProps}
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
