import ButtonTypes from '@flow-ui/core/control/Button/types'

declare namespace ButtonGroupTypes {
    export interface Props extends ButtonTypes.Props {
        children: (
            React.ReactElement<ButtonTypes.Props>
            |
            React.ReactElement<ButtonTypes.Props>[]
        )
    }
}

export default ButtonGroupTypes