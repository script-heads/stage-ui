import Global from '@flow-ui/core/types'

declare namespace FieldTypes {

    interface Props extends Global.Props{
        label?: React.ReactNode
        hint?: React.ReactNode
        size?: Global.Size
        decoration?: 'none' | 'filled' | 'underline' | 'outline'
        color?: Global.ColorProp,
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

    interface Styles<T extends {[T in keyof Styles]?: Object} = {}> {
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
        styles: Global.FlowStyles<Styles>
        state?: Object
        
        labelName?: string
        attributes?: Object
        children?: React.ReactNode
    }   
    
}

export default FieldTypes