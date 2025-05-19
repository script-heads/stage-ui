import { useRef } from 'react'

import { dropDelegate } from './misc/dropDelegate'

import { DropNode, dropRef, UseDropOptions } from './misc/dropRef'

export const useDropOver = (dropNode: DropNode, options: UseDropOptions = {}) => {
  const id = Math.random()

  const lastTarget = useRef<HTMLElement | null>(null)

  return {
    onMouseOver: (e?: unknown) => {
      const target =
        (e instanceof MouseEvent && e.target instanceof HTMLElement && e.target) || null

      dropRef?.current?.toggle(id, e as MouseEvent, dropNode, {
        ...options,
        pointerEvents: options.pointerEvents ?? false,
        forceSkip:
          !!target &&
          (lastTarget.current?.contains(target) ||
            Array.from(lastTarget.current?.children || new HTMLCollection()).some((c) =>
              c.contains(target),
            )),
      })
      lastTarget.current = target
    },
    onMouseLeave: () => {
      dropDelegate.close()
    },
    onMouseMove: (e: unknown) => {
      dropRef?.current?.move(e as MouseEvent)
    },
  }
}
