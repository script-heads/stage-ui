import WhaleTypes from '@flow-ui/whale/types'

declare namespace FieldTypes {

    interface Props extends Omit<WhaleTypes.AllProps<HTMLInputElement, Overrides>, 'onChange'> {
        label?: React.ReactNode
        hint?: React.ReactNode
        size?: WhaleTypes.Size
        decoration?: 'none' | 'filled' | 'underline' | 'outline'
        color?: WhaleTypes.ColorProp,
        shape?: 'round' | 'rounded' | 'square'
        disabled?: boolean
        rightChild?: React.ReactNode
        leftChild?: React.ReactNode
        clearable?: boolean

        onEnter?: () => void
        onClear?: () => void
    }

    interface State {
        disabled: Props['disabled']
        focus: boolean 
        shape: Props['shape']
        size: Props['size'] 
        decoration: Props['decoration']
    }

    interface Overrides<T extends {[T in keyof Overrides]?: Object} = {}> {
        container: State & T['container']
        field: State & T['field']
        content: State & T['content']
        label: State & T['label']
        child: {
            align: 'right' | 'left'
        } & State & T['child']
        clearButton: State & T['clearButton']
        hint: State & T['hint']
    }

    interface PrivateProps extends Omit<Props, 'styles'> {
        focus: boolean
        styles: WhaleTypes.ComponentStyles<Overrides>
        state?: Object
        
        labelName?: string
        attributes?: any
        events?: any
        children?: React.ReactNode
    }   
    
}

export default FieldTypes