import { dropDelegate } from './misc/dropDelegate'

import { DropNode, dropRef, UseDropOptions } from './misc/dropRef'

export const useDropOver = (dropNode: DropNode, options: UseDropOptions = {}) => {
  return {
    onMouseOver: (e?: unknown) => {
      if (dropDelegate.visible) {
        dropDelegate.close()
      } else {
        dropRef?.current?.open(e as MouseEvent, dropNode, {
          ...options,
          pointerEvents: options.pointerEvents ?? false,
        })
      }
    },
    onMouseLeave: () => {
      dropDelegate.close()
    },
    onMouseMove: (e: unknown) => {
      dropRef?.current?.move(e as MouseEvent)
    },
  }
}
