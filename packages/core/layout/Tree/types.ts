import Shared from '@flow-ui/whale/types'

declare namespace TreeTypes {

    interface Props extends Shared.AllProps {
        label?: React.ReactNode | string | ((isOpen: boolean) => React.ReactNode)
        children?: React.ReactNode
        decoration?: 'flat' | 'drop' | 'inline'
        alwaysOpen?: boolean
        defaultOpen?: boolean
        indent?: boolean
    }

    interface Overrides {
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