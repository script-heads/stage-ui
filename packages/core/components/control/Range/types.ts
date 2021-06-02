declare namespace RangeTypes {
  interface Props extends Omit<AllProps<HTMLDivElement, Styles>, 'onChange'> {
    min?: number
    max?: number
    defaultValue?: number
    value?: number
    onChange?: (value: number) => void
    mode?: 'single' | 'range'
    className?: string
  }

  interface Ref {
    container: HTMLDivElement
    setValue: (value: number) => void
  }
  interface Styles {
    container: void
    rail: void
    track: void
    thumb: void
  }
}

export default RangeTypes
