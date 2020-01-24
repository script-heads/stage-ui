import Shared from '@flow-ui/whale/types'

declare namespace FieldTypes {

    interface Props extends Shared.AllProps{
        label?: React.ReactNode
        hint?: React.ReactNode
        size?: Shared.Size
        decoration?: 'none' | 'filled' | 'underline' | 'outline'
        color?: Shared.ColorProp,
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
        isLabelOutside: boolean 
        isLabelOverlay: boolean
    }

    interface Overrides<T extends {[T in keyof Overrides]?: Object} = {}> {
        container: State & T['container']
        field: State & T['field']
        content: State & T['content']
        label: State & T['label']
        child: {
            align: 'right' | 'left'
        } & State & T['child']
        hint: State & T['hint']
    }

    interface PrivateProps extends Props {
        focus: boolean
        isLabelOutside: boolean 
        isLabelOverlay: boolean
        styles: Shared.FlowStyles<Overrides>
        state?: Object
        
        labelName?: string
        attributes?: Object
        children?: React.ReactNode
    }   
    
}

export default FieldTypes