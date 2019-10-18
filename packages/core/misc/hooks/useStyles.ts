import Global from "../../types";
import {css, SerializedStyles} from "@emotion/core";
import useFlow from "./useFlow";
import ThemeTypes from "../themes/types";

const createStyles = <S extends string, V = {}>(
        props, 
        componentStyles: Global.ComponentStyles<string>, 
        componentName?: keyof ThemeTypes.Overrides
    ): Global.FlowStyles<S,V> => {
    
    const { theme } = useFlow();
    let FlowStyles: Global.FlowStyles<S, V> = {} as any;

    if (typeof componentStyles === 'function') {
        componentStyles = componentStyles(props,theme)
    }

    Object.keys(componentStyles).map(styleName => {
        FlowStyles[styleName] = (state) => {

            const variant: Global.Variant<V> = (varaints) => {
                let variantStyles: any = {};
                for (const variantName of Object.keys(varaints)) {
                    const variantValue = {...props, ...state}[variantName];
                    if (typeof variantValue === 'string') {
                        variantStyles = varaints[variantName][variantValue]
                    }
                    
                    if (typeof variantValue === 'boolean' && variantValue === true) {
                        variantStyles = varaints[variantName]
                    }
                    
                    return variantStyles
                }
                return variantStyles
            }
            
            const overrideStyle = 
                componentName && 
                theme.overrides[componentName] && 
                createStyles(props, theme.overrides[componentName] as Global.ComponentStyles<string>)
            
            if (overrideStyle && overrideStyle[styleName]) {
                return css([resolveStyles<V>(componentStyles[styleName], variant), overrideStyle[styleName]()])
            }

            return resolveStyles<V>(componentStyles[styleName], variant)
        }
    })
    
    return FlowStyles
}

function resolveStyles<V>(
    style: Global.ComponentStyle<V>, 
    variant: Global.Variant<V>): SerializedStyles {

    if (typeof style === 'function') {
        return css(style(variant))
    } else {
        return css(style)
    }
}

export default createStyles