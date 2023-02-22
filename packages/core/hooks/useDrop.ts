import { DropNode, dropRef, UseDropOptions } from './misc/dropRef'

export const useDrop = (dropNode: DropNode, options: UseDropOptions = {}) => {
  const id = Math.random()
  return (e?: unknown) => {
    dropRef?.current?.toggle(id, e as MouseEvent, dropNode, options)
  }
}
