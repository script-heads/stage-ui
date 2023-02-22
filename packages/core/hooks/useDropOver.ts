import { dropDelegate } from './misc/dropDelegate'

import { DropNode, dropRef, UseDropOptions } from './misc/dropRef'

export const useDropOver = (dropNode: DropNode, options: UseDropOptions = {}) => {
  const id = Math.random()
  return {
    onMouseOver: (e?: unknown) => {
      dropRef?.current?.toggle(id, e as MouseEvent, dropNode, {
        ...options,
        pointerEvents: options.pointerEvents ?? false,
      })
    },
    onMouseLeave: () => {
      dropDelegate.close()
    },
    onMouseMove: (e: unknown) => {
      dropRef?.current?.move(e as MouseEvent)
    },
  }
}
