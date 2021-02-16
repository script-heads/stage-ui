import SystemTypes from '@stage-ui/system/types'

declare namespace FieldTypes {

    interface Props<S = Styles> extends Omit<SystemTypes.AllProps<HTMLInputElement, S>, 'onChange'> {
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
         * Size of field
         * @default m
         * @display SystemTypes.Size
         * @link /props/#size
         */
        size?: SystemTypes.Size
        /**
         * Defines how field look
         * @default filled
         */
        decoration?: 'none' | 'filled' | 'underline' | 'outline'
        /**
         * Color of field
         * @default surface
         */
        color?: SystemTypes.ColorProp
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
         * Event is fired when user press Enter
         */
        onEnter?: () => void
        /**
         * Event is fired when user clear value
         */
        onClear?: () => void
    }

    interface State {
        disabled: Props['disabled']
        focus: boolean
        shape: Props['shape']
        size: Props['size']
        decoration: Props['decoration']
        labelType: Props['labelType']
    }

    interface Styles<T extends { [T in keyof Styles]?: Object } = {}> {
        /**
         * Root element
         */
        container: State & T['container']
        /**
         * Container of field
         */
        field: State & T['field']
        /**
         * Container of field content
         */
        content: State & T['content']
        /**
         * Label element
         */
        label: State & T['label']
        /**
         * Container for left and right childs
         */
        child: {
            align: 'right' | 'left'
        } & State & T['child']
        /**
         * The button that clear value
         */
        clearButton: State & T['clearButton']
        /**
         * Container of hint
         */
        hint: State & T['hint']
    }

    interface PrivateProps extends Omit<Props, 'styles'> {
        focus: boolean
        styles: SystemTypes.ComponentStyles<Styles>
        state?: Object

        labelName?: string
        attributes?: any
        events?: any
        children?: React.ReactNode
    }

}

export default FieldTypes