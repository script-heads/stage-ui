import React from 'react'

import * as Icons from '@stage-ui/icons'

import FlexboxTypes from '../../layout/Flexbox/types'

export type Drop = (node: React.ReactNode) => void

export type UseDropOptions = {
  containerProps?: FlexboxTypes.Props
  pointerEvents?: boolean
  screenPadding?: number
  dropOffsetX?: number
  dropOffsetY?: number
  onOpen?: () => void
  onClose?: () => void
}

type CloseFn = () => void

export type DropNode = React.ReactNode | ((close: CloseFn) => React.ReactNode)

export type DropMenuItem = {
  text: string
  icon?: keyof typeof Icons
  color?: string
  value?: string | number
  onClick?: () => void
  hidden?: boolean
  disabled?: boolean
  hotkey?: {
    key: string
    alt?: boolean
  }
}

export type DropRef = {
  toggle: (
    id: number,
    e: MouseEvent | null,
    dropNode: DropNode,
    options: UseDropOptions,
  ) => void
  move: (e: MouseEvent | null) => void
}

export const dropRef = React.createRef<DropRef>()
