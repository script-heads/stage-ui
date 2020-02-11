import WhaleTypes, { EmotionStyles } from '../types'
import { css } from '@emotion/core'

const createComponentStyles = <S>(styles: S, propStyles: { [K in keyof S]?: EmotionStyles }, overrides: S) => {

    const ComponentStyles = {} as WhaleTypes.ComponentStyles<S>

    Object.keys(styles).map(styleName => {
        if (typeof styles[styleName] === 'function') {
            ComponentStyles[styleName] = (state) => {

                const variant = (varaints) => {
                    let variantStyles: EmotionStyles = []

                    for (const variantName of Object.keys(varaints)) {
                        const variantValue = state[variantName]

                        if (typeof variantValue === 'string') {
                            variantStyles.push(varaints[variantName][variantValue])
                        }

                        if (typeof variantValue === 'boolean' && variantValue === true) {
                            variantStyles.push(varaints[variantName])
                        }

                        if (!Object.keys(state).includes(variantName)) {
                            console.warn(
                                `Can't find value of "${variantName}" variant in "${styleName}" style. 
                                    Function has been called with:`,
                                state
                            )
                        }
                    }
                    return variantStyles
                }

                return css(
                    styles[styleName](variant),
                    overrides?.[styleName]?.(variant),
                    propStyles[styleName]
                )
            }
        } else {
            ComponentStyles[styleName] = css(
                styles[styleName],
                overrides?.[styleName],
                propStyles[styleName]
            )
        }
    })

    return ComponentStyles
}

export default createComponentStyles