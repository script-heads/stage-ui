import React from 'react'

import { DropMenu, DropMenuItem, DropMenuOptions } from './components/DropMenu'
import { dropDelegate } from './misc/dropDelegate'

import { dropRef, UseDropOptions } from './misc/dropRef'

export const useDropMenu = (
  values: DropMenuItem[],
  options: UseDropOptions & DropMenuOptions = {},
) => {
  const id = Math.random()
  const { clickMode = 'toggle' } = options
  return (e?: unknown) => {
    ;(e as MouseEvent)?.preventDefault()

    if (dropDelegate.visible && clickMode === 'toggle') {
      dropDelegate.close()
    } else {
      dropRef?.current?.toggle(
        id,
        e as MouseEvent,
        (close) => <DropMenu close={close} values={values} {...options} />,
        options,
      )
    }
  }
}
