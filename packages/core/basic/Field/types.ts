import React from 'react'

declare namespace FieldTypes {
  interface PrivateProps extends Props {
    name?: string
    children?: React.ReactNode
  }

  interface Props<
    Element = HTMLInputElement,
    ClassesDefinition extends Stage.ClassesSchemaDefinition = Classes,
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

  type Classes = {
    /**
     * Root element
     */
    container: void
    /**
     * Container of field
     */
    field: void
    /**
     * Container of field content
     */
    content: void
    /**
     * Label element
     */
    label: void
    /**
     * Container for right child
     */
    rightChild: void
    /**
     * Container for left child
     */
    leftChild: void
    /**
     * The button that clear value
     */
    clearButton: void
    /**
     * Container of hint
     */
    hint: void
    /**
     * Container of error
     */
    error: void
  }
}

export default FieldTypes
