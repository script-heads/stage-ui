import GlobalTypes from "../../types";
import {css, SerializedStyles} from "@emotion/core";

type Variant = (key: string, variants: {[x: string]: GlobalTypes.EmotionStyles} | GlobalTypes.EmotionStyles) => GlobalTypes.EmotionStyles
type VariantedStyle = ((variant: Variant) => GlobalTypes.EmotionStyles) | GlobalTypes.EmotionStyles
type Style = (state?: { [x: string]: string | boolean | undefined }) => SerializedStyles
type ComponentStyles = {[x: string]: VariantedStyle}
interface Params {
    props: {[x: string]: any},
    styles: ComponentStyles,
    overrides?: {
        styles?: {
            [x: string]: GlobalTypes.EmotionStyles | undefined
        }
        variants?: {
            [x: string]: {
                [x: string]: {
                    [x: string]: GlobalTypes.EmotionStyles | undefined
                } | undefined
            } | undefined
        }
    }
}

export default <P extends Params, O extends keyof P["styles"]>(params: P): {[K in O]: Style} => {
    const {props, styles, overrides} = params
    let FlowStyles = {} as any;
    
    Object.keys(styles).map(styleName => {
        FlowStyles[styleName] = (state) => {

            const variant: Variant = (variantName, varaints) => {
                let variantStyles;
                const variantValue = {...props, ...state}[variantName];
                const overrideVariantStyles = 
                    overrides && 
                    overrides.variants && 
                    overrides.variants[variantName] &&
                    overrides.variants[variantName]![variantValue] && 
                    overrides.variants[variantName]![variantValue]![styleName]

                if (typeof variantValue === 'string') {
                    variantStyles = varaints[variantValue]
                }
                if (typeof variantValue === 'boolean') {
                    variantStyles = varaints
                }
                if (overrideVariantStyles && variantStyles) {
                    return [variantStyles, ...overrideVariantStyles]
                }
                if (variantStyles) return variantStyles
                return null
            }
            
            const overrideStyle = 
                overrides && 
                overrides.styles && 
                overrides.styles[styleName]
            
            if (overrideStyle) {
                return css([resolveStyles(styles[styleName], variant), ...overrideStyle])
            }

            return resolveStyles(styles[styleName], variant)
        }
    })
    
    return FlowStyles
}

function resolveStyles(style: VariantedStyle, variant: Variant): SerializedStyles {
    if (typeof style === 'function') {
        return css(style(variant))
    } else {
        return css(style)
    }
}
