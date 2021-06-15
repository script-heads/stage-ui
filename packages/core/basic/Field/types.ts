import { ClassesSchemaDefinition } from '@stage-ui/system/hooks/useSystem'
import React from 'react'

declare namespace FieldTypes {
  interface Props<
    Element = HTMLInputElement,
    ClassesDefinition extends ClassesSchemaDefinition = Classes,
  > extends Stage.AllProps<Element, ClassesDefinition> {
    /**
     * Label for field
     */
    label?: React.ReactNode
    /**
     * Define where label be placed
     */
    labelType?: 'none' | 'outside' | 'inside'
    /**
     * Place for hint content
     */
    hint?: React.ReactNode
    /**
     * Place for error content
     */
    error?: React.ReactNode
    /**
     * Sizes of field
     * @default m
     * @display Sizes
     * @link /props/#size
     */
    size?: Stage.Sizes
    /**
     * Defines how field look
     * @default filled
     */
    decoration?: 'none' | 'filled' | 'underline' | 'outline'
    /**
     * Color of field
     * @default surface
     */
    color?: Stage.ColorProp
    /**
     * Shape of field
     * @default rounded
     */
    shape?: 'round' | 'rounded' | 'square'
    /**
     * Prevents the user from interacting
     */
    disabled?: boolean
    /**
     * Place for items to the left of value
     */
    rightChild?: React.ReactNode
    /**
     * Place for items to the left of value
     */
    leftChild?: React.ReactNode
    /**
     * Allow user clear value
     */
    clearable?: boolean
    /**
     * Event is fired when user clear value
     */
    onClear?: () => void
  }

  type State = {
    disabled: Props['disabled']
    shape: Props['shape']
    size: Props['size']
    decoration: Props['decoration']
    labelType: Props['labelType']
  }

  type Classes = {
    /**
     * Root element
     */
    container: State
    /**
     * Container of field
     */
    field: State
    /**
     * Container of field content
     */
    content: State
    /**
     * Label element
     */
    label: State
    /**
     * Container for left and right childs
     */
    child: State & {
      align: 'right' | 'left'
    }
    /**
     * The button that clear value
     */
    clearButton: State
    /**
     * Container of hint
     */
    hint: State
    /**
     * Container of error
     */
    error: State
  }

  interface PrivateProps extends Props {
    name?: string
    children?: React.ReactNode
  }
}

export default FieldTypes
