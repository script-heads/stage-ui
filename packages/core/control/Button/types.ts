import React, { ComponentPropsWithoutRef } from 'react'

declare namespace ButtonTypes {
  type Decoration = 'filled' | 'outline' | 'text' | 'plain'
  type Shape = 'square' | 'rounded' | 'round'
  type Type = 'submit' | 'reset' | 'button'
  type ChildAlign = 'left' | 'right'

  interface SharedProps {
    /**
     * Sizes of button
     * @display Sizes
     * @link /props/#size
     * @default m
     */
    size?: Stage.Sizes
    /**
     * Defines how button look
     * @default filled
     */
    decoration?: Decoration
    /**
     * Shape of button
     * @default rounded
     */
    shape?: Shape

    /**
     * Color of button
     */
    color?: Stage.ColorProp

    /**
     * same as label
     */
    children?: React.ReactNode
    /**
     * Place for items to the right of children
     */
    rightChild?: React.ReactNode
    /**
     * Place for items to the left of children
     */
    leftChild?: React.ReactNode

    /**
     * Prevents the user from interacting with the button
     */
    disabled?: boolean
  }

  interface Props extends Stage.AllProps<HTMLButtonElement, Classes>, SharedProps {
    /**
     * Specifies that the button should have input focus when the page loads
     */
    autoFocus?: boolean

    /**
     * The <form> element to associate the button with
     */
    form?: string
    /**
     * The URL that processes the information submitted by the button
     */
    formAction?: string
    /**
     * If the button is a submit button, specifies how to encode the form data that is submitted
     */
    formEncType?: string
    /**
     * If the button is a submit button, this attribute specifies the HTTP method used to submit the form
     */
    formMethod?: string
    /**
     * If the button is a submit button, this Boolean attribute specifies that the form
     * is not to be validated when it is submitted
     */
    formNoValidate?: boolean
    /**
     * If the button is a submit button, this attribute is a author-defined name or standardized, underscore
     * prefixed keyword indicating where to display the response from submitting the form
     */
    formTarget?: string
    /**
     * The name of the button, submitted as a pair with the button’s value as part of the form data
     */
    name?: string
    /**
     * The default behavior of the button
     */
    type?: Type
    /**
     * Defines the value associated with the button’s name when it’s submitted with the form data
     */
    value?: string | string[] | number

    /**
     * Make button's text uppercase
     */
    uppercase?: boolean

    /**
     * Button's label
     */
    label?: React.ReactNode

    /**
     * Async onClick
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void
    /**
     * Loading component shows when onClick pending promise
     * if no component set then regular spinner will be used instead
     */
    loadingComponent?: React.ReactNode
  }

  interface PolymorphicProps<E extends React.ElementType>
    extends Stage.AllProps<React.ComponentPropsWithoutRef<E>, Classes>,
      SharedProps {}

  type Classes = {
    /**
     * Root element
     */
    container: void
    /**
     * Content's wrappers
     */
    child: {
      align: ChildAlign
    }
  }
}

export default ButtonTypes
