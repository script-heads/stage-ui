import WhaleTypes, { EmotionStyles } from '../types'
import { css } from '@emotion/core'

type createComponentStyles = <S>(
    styles: WhaleTypes.Styles<S>, 
    propStyles: { [K in keyof S]?: EmotionStyles }, 
    overrideName: string, 
    overrides: WhaleTypes.Theme['overrides']
) => WhaleTypes.ComponentStyles<S>

const createComponentStyles: createComponentStyles = (styles, propStyles, overrideName, overrides) => {

    const ComponentStyles = {} as WhaleTypes.ComponentStyles<any>
    const ComponentOverrides = overrides?.[overrideName]

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
                    {
                        label: `${overrideName}-${styleName}`
                    },
                    styles[styleName](variant),
                    ComponentOverrides?.[styleName]?.(variant),
                    propStyles[styleName]
                )
            }
        } else {
            ComponentStyles[styleName] = css(
                {
                    label: `${overrideName}-${styleName}`
                },
                styles[styleName],
                ComponentOverrides?.[styleName],
                propStyles[styleName]
            )
        }
    })

    return ComponentStyles
}

export default createComponentStyles