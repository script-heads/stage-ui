type variant = (key: string, variants: {[x: string]: any[]} | any[]) => any[]

interface params {
    props:  {}
    overrides?: {
        items?: {}
        variants?: {}
    }, 
    styles: {[x: string]: (variant: variant) => void}
}

export default (params: params) => {

    const {props, overrides, styles} = params;
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
            
            const resolvedStyle = styles[styleName](variant);
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