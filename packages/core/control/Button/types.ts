import WhaleTypes from '@flow-ui/whale/types'

declare namespace ButtonTypes {

    interface Props extends WhaleTypes.AllProps<HTMLButtonElement, Overrides> {
        //Native button props
        autoFocus?: boolean
        disabled?: boolean
        form?: string
        formAction?: string
        /**
         * The formenctype attribute specifies how form-data should be encoded 
         * before sending it to a server. This attribute overrides the form's 
         * enctype attribute.
         * The formenctype attribute is only used for buttons with type="submit".
         */
        formEncType?: string
        formMethod?: string
        formNoValidate?: boolean
        formTarget?: string
        name?: string
        type?: 'submit' | 'reset' | 'button'
        value?: string | string[] | number

        //Amazing button props
        size?: WhaleTypes.Size
        decoration?: 'filled' | 'outline' | 'text' | 'plain'
        shape?: 'square' | 'rounded' | 'round'
        uppercase?: boolean
        color?: WhaleTypes.ColorProp
        children?: React.ReactNode
    }

    interface Overrides {
        container:{
            decoration: Props['decoration']
            shape: Props['shape']
            size: Props['size']
        }
    }
}

export default ButtonTypes