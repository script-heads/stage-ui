import React from 'react'

import FlexboxTypes from '../../layout/Flexbox/types'

export type Drop = (node: React.ReactNode) => void

export type UseDropOptions = {
  clickMode?: 'toggle' | 'open'
  containerProps?: FlexboxTypes.Props
  pointerEvents?: boolean
  screenPadding?: number
  dropOffsetX?: number
  dropOffsetY?: number
  onOpen?: () => void
  onClose?: () => void
  forceSkip?: boolean
}

type CloseFn = () => void

export type DropNode = React.ReactNode | ((close: CloseFn) => React.ReactNode)

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
