declare namespace ToggleTypes {
  type OptionType = string | number | boolean
  interface Option<T = OptionType> {
    text: string
    value: T
  }

  interface Ref {
    options: Option[]
    values: Option[]
  }

  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    /**
     * Items contained in Toggle
     */
    options: Option[]
    /**
     * Prevents the user from interacting with the button
     */
    disabled?: boolean
    /**
     * Event is fired when user change value
     */
    onChange?: (value: Option) => void

    value?: Option

    defaultValue?: Option

    /**
     * Sizes of button
     * @display Sizes
     * @link /props/#size
     * @default m
     */
    size?: Stage.Sizes
    /**
     * Shape of button
     * @default rounded
     */
    shape?: 'square' | 'rounded' | 'round'
  }

  type Classes = {
    /**
     * Root element
     */
    container: void
    /**
     * Container of every item in drop
     */
    option: {
      selected: boolean
    }
  }
}

export default ToggleTypes
