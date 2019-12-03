import Shared from '@flow-ui/core/types'

declare namespace PanelTypes {
    interface Props extends Shared.AllProps {
        align?: 'top' | 'right' | 'bottom' | 'left'
        children?: React.ReactNode
    }

    interface Styles {
        container: {
            align: Props['align']
        }
    }
}

export default PanelTypes