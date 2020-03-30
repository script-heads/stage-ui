import SystemTypes from '@flow-ui/system/types'

declare namespace ButtonTypes {

    interface Props extends SystemTypes.AllProps<HTMLButtonElement, Styles> {
        /**
         * Specifies that the button should have input focus when the page loads
         */
        autoFocus?: boolean
        /**
         * Prevents the user from interacting with the button
         */
        disabled?: boolean
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
        type?: 'submit' | 'reset' | 'button'
        /**
         * Defines the value associated with the button’s name when it’s submitted with the form data
         */
        value?: string | string[] | number

        /**
         * Size of button
         * @default m
         */
        size?: SystemTypes.Size
        /**
         * Defines how button look
         * @default filled
         */
        decoration?: 'filled' | 'outline' | 'text' | 'plain'
        /**
         * Shape of button
         * @default rounded
         */
        shape?: 'square' | 'rounded' | 'round'
        /**
         * Make button's text uppercase
         */
        uppercase?: boolean
        /**
         * Color of button
         */
        color?: SystemTypes.ColorProp
        /**
         * Button's content
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
    }

    interface StyleState {
        decoration: Props['decoration']
        shape: Props['shape']
        size: Props['size']
    }

    interface Styles {
        /**
         * Root element
         */
        container: StyleState
        /**
         * Content's wrappers
         */
        child: StyleState & {
            align: 'left' | 'right'
        }
    }
}

export default ButtonTypes