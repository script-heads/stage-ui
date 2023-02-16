import { dropDelegate } from './misc/dropDelegate'

import { DropNode, dropRef, UseDropOptions } from './misc/dropRef'

export const useDrop = (dropNode: DropNode, options: UseDropOptions = {}) => {
  return (e?: unknown) => {
    if (dropDelegate.visible) {
      dropDelegate.close()
    } else {
      dropRef?.current?.open(e as MouseEvent, dropNode, options)
    }
  }
}
