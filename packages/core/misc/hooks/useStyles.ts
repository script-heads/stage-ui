import GlobalTypes from "../../types";
import {css, SerializedStyles} from "@emotion/core";
import useFlow from "./useFlow";
import ThemeTypes from "../themes/types";

export type FlowStyles<C,V> = {[O in keyof C]: FlowStyle<V>}
export type FlowStyle<V> = (state?: { [O in keyof V]: string | boolean | undefined }) => SerializedStyles

const createStyles = <C, V = any, S = C extends (...args: any) => any ? ReturnType<C> : C>(
    props, 
    componentStyles: C, 
    componentName?: keyof ThemeTypes.Overrides): FlowStyles<S,V> => {
    
    const { theme } = useFlow();
    let FlowStyles: FlowStyles<S, V> = {} as FlowStyles<S, V>;

    if (typeof componentStyles === 'function') {
        componentStyles = componentStyles(props,theme)
    }

    Object.keys(componentStyles).map(styleName => {
        FlowStyles[styleName] = (state) => {

            const variant: GlobalTypes.Variant<V> = (varaints) => {
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
                createStyles(props, theme.overrides[componentName])
            
            if (overrideStyle && overrideStyle[styleName]) {
                return css([resolveStyles<V>(componentStyles[styleName], variant), overrideStyle[styleName]()])
            }

            return resolveStyles<V>(componentStyles[styleName], variant)
        }
    })
    
    return FlowStyles
}

function resolveStyles<V>(style: GlobalTypes.ComponentStyle<V>, variant: GlobalTypes.Variant<V>): SerializedStyles {
    if (typeof style === 'function') {
        return css(style(variant))
    } else {
        return css(style)
    }
}

export default createStyles