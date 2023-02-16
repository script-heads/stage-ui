import React from 'react'

import { DropMenu, DropMenuDecorationProps } from './components/DropMenu'
import { dropDelegate } from './misc/dropDelegate'

import { DropMenuItem, dropRef, UseDropOptions } from './misc/dropRef'

export const useDropMenu = (
  values: DropMenuItem[],
  options: UseDropOptions & DropMenuDecorationProps = {},
) => {
  return (e?: unknown) => {
    ;(e as MouseEvent)?.preventDefault()
    if (dropDelegate.visible) {
      dropDelegate.close()
    } else {
      dropRef?.current?.open(
        e as MouseEvent,
        (close) => <DropMenu close={close} values={values} {...options} />,
        options,
      )
    }
  }
}
