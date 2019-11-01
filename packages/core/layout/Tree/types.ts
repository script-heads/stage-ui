import Global from '@flow-ui/core/types'

declare namespace TreeTypes {

    interface Props extends Global.Props {
        label?: React.ReactNode | string | ((isOpen: boolean) => React.ReactNode)
        children?: React.ReactNode
        decoration?: 'flat' | 'drop' | 'inline'
        alwaysOpen?: boolean
        defaultOpen?: boolean
        indent?: boolean
    }

    interface Styles {
        container: {
            decoration: Props['decoration']
            needIndent: boolean
        }
        label: void
        icon: {
            decoration: Props['decoration']
            disabled: boolean
        }
        child: {
            isOpen: boolean
        }
    }
}

export default TreeTypes