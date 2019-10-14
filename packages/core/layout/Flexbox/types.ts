import Global from '../../types';
import CSS from 'csstype';

declare namespace FlexboxTypes {
    interface Props extends Global.Props {
        column?: boolean
        inline?: boolean
        alignItems?: CSS.Properties["alignItems"]
        alignContent?: CSS.Properties["alignContent"]
        justifyContent?: CSS.Properties["justifyContent"]
        justifyItems?: CSS.Properties["justifyItems"]
        direction?: CSS.Properties["flexDirection"]
        wrap?: CSS.Properties["flexWrap"]
        flow?: CSS.Properties["flexFlow"]
        children?: React.ReactNode
    }

    export interface Styles {
        
    }
}

export default FlexboxTypes