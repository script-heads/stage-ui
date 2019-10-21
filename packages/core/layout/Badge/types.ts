import Global from '@flow-ui/core/types';

declare namespace BadgeTypes {
    export interface Props extends Global.Props {
        content: React.ReactNode
        align?: "top" | "bottom" | "left" | "right" | "top-right" | "bottom-right" | "top-left" | "bottom-left"
        children?: React.ReactNode
    }

    type Styles = {
        container: null
        holder: {
            align: Props["align"]
        }
    }
}

export default BadgeTypes