import Global from '@flow-ui/core/types'

declare namespace ButtonTypes {

    export interface Props extends Global.Props {
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
        size?: Global.Size
        decoration?: 'filled' | 'outline' | 'text' | 'plain'
        shape?: 'square' | 'rounded' | 'round'
        uppercase?: boolean
        color?: Global.ColorProp
        children?: React.ReactNode
    }

    export interface Styles {
        container:{
            decoration: Props['decoration']
            shape: Props['shape']
            size: Props['size']
        }
    }
}

export default ButtonTypes