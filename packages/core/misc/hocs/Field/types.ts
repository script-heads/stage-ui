import Global from '@flow-ui/core/types'
import { SerializedStyles } from '@emotion/core'

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
    }

    interface Styles {
        container: void
        field: {
            disabled: Props['disabled']
            focus: boolean 
            shape: Props['shape']
            size: Props['size'] 
            decoration: Props['decoration']
        }
        content: {
            isLabelOverlay: boolean
        }
        label: {
            size: Props['size']
            isLabelOutside: boolean 
            isLabelOverlay: boolean
        }
        child: {
            align: 'right' | 'left'
            size: Props['size']
        }
        hint: {
            size: Props['size'] 
        }
    }

    interface PrivateProps extends Props {
        focus: boolean
        isLabelOutside: boolean 
        isLabelOverlay: boolean
        styles: Global.FlowStyles<Styles>
        additionalStyles?: {
            [K: string]: SerializedStyles
        }
        
        labelName?: string
        attributes?: any
        children?: React.ReactNode

        onEnter?: () => void
        onClear?: () => void
    }   
    
}

export default FieldTypes