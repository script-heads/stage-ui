import { useFlow } from "../..";

type styles = any[];

type variant = (key: string, variants: {[x: string]: styles} | styles) => styles

interface params {
    props:  {}
    override?: string, 
    styles: {
        [x: string]: ((variant: variant) => styles) | styles
    }
}

export default (params: params) => {

    const {theme} = useFlow();
    const {props, styles} = params;
    const overrides = params.override && theme.overrides[params.override]
    let nextStyles: any = {};
    
    Object.keys(styles).map(styleName => {
        nextStyles[styleName] = (state: Object) => {
            
            const variant: variant = (key, varaints) => {
                let variantStyle;
                const variantKey = {...props, ...state}[key];
                const overrideVariantStyle = 
                    overrides && 
                    overrides.variants && 
                    overrides.variants[key] &&
                    overrides.variants[key][variantKey] && 
                    overrides.variants[key][variantKey][styleName]

                if (typeof variantKey === 'string') {
                    variantStyle = varaints[variantKey]
                }
                if (typeof variantKey === 'boolean') {
                    variantStyle = varaints
                }
                if (overrideVariantStyle && variantStyle) {
                    return [variantStyle, ...overrideVariantStyle]
                }
                if (variantStyle) return variantStyle
                return {}
            }
            
            let resolvedStyle

            if (typeof styles[styleName] === 'function') {
                //@ts-ignore
                resolvedStyle = styles[styleName](variant);
            } else {
                resolvedStyle = styles[styleName]
            }
            
            const overrideStyle = 
                    overrides && 
                    overrides.items && 
                    overrides.items[styleName]
            
            if (overrideStyle) {
                return [resolvedStyle, ...overrideStyle]
            }

            return resolvedStyle
        }
    })
    
    return nextStyles
}