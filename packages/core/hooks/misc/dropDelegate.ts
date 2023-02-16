type DropDelegate = {
  visible: boolean
  close: () => void
}
export const dropDelegate: DropDelegate = {
  visible: false,
  close: () => {},
}
