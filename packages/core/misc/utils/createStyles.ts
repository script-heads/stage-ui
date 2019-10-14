import GlobalTypes from "../../types";
import {css, SerializedStyles} from "@emotion/core";
import useFlow from "../hooks/useFlow";
import ThemeTypes from "../themes/types";

export type Variant<T> = (variants: T) => GlobalTypes.EmotionStyles
export type VariantedStyle<T> = ((variant: Variant<T>) => GlobalTypes.EmotionStyles) | GlobalTypes.EmotionStyles
export type Style = (state?: { [x: string]: string | boolean | undefined }) => SerializedStyles
export type ComponentStyles<T> = {[x: string]: VariantedStyle<T>}

const createStyles = <K, T>(props, styles: ((props,theme) => any )| any, overrides?: keyof ThemeTypes.Overrides): { [O in keyof K]: Style } => {
    
    const { theme } = useFlow();
    let FlowStyles = {} as any;
    if (typeof styles === 'function') {
        styles = styles(props,theme)
    }
    
    Object.keys(styles).map(styleName => {
        FlowStyles[styleName] = (state) => {

            const variant: Variant<T> = (varaints) => {
                let variantStyles: any = {};
                for (const variantName of Object.keys(varaints)) {
                    const variantValue = {...props, ...state}[variantName];

                    if (typeof variantValue === 'string') {
                        variantStyles = varaints[variantName][variantValue]
                    }
                    
                    if (typeof variantValue === 'boolean') {
                        variantStyles = varaints
                    }
                    
                    return variantStyles
                }
                return variantStyles
            }
            
            const overrideStyle = 
                overrides && 
                theme.overrides[overrides] && 
                createStyles(props, theme.overrides[overrides])
            
            if (overrideStyle && overrideStyle[styleName]) {
                return css([resolveStyles<T>(styles[styleName], variant), overrideStyle[styleName]()])
            }

            return resolveStyles<T>(styles[styleName], variant)
        }
    })
    
    return FlowStyles
}

function resolveStyles<T>(style: VariantedStyle<T>, variant: Variant<T>): SerializedStyles {
    if (typeof style === 'function') {
        return css(style(variant))
    } else {
        return css(style)
    }
}

export default createStyles