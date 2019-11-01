import Global from '../../types'
import {css} from '@emotion/core'
import useFlow from './useFlow'
import ThemeTypes from '../themes/types'

const createStyles = <S>(
        props, 
        componentStyles: Global.ComponentStyles<S> | Global.FunctionalComponentStyles<S>, 
        componentName?: keyof ThemeTypes.Overrides
    ): Global.FlowStyles<S> => {
    
    const { theme } = useFlow()
    const FlowStyles: Global.FlowStyles<S> = {} as Global.FlowStyles<S>

    if (typeof componentStyles === 'function') {
        componentStyles = componentStyles(props,theme)
    }

    const themeOverrides = componentName && theme.overrides[componentName]

    Object.keys(componentStyles).map(styleName => {
        if (typeof componentStyles[styleName] === 'function') {
            FlowStyles[styleName] = (state) => {

                const variant = (varaints) => {
                    let variantStyles: Global.EmotionStyles = []
                    
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
                    componentStyles[styleName](variant), 
                    
                    themeOverrides &&
                    themeOverrides[styleName] && 
                    themeOverrides[styleName](variant),
                    
                    props.overrides && 
                    props.overrides[styleName] && 
                    props.overrides[styleName](variant)
                )
            }
        } else {
            FlowStyles[styleName] = css(
                componentStyles[styleName], 
                
                themeOverrides &&
                themeOverrides[styleName] && 
                themeOverrides[styleName],
                
                props.overrides && 
                props.overrides[styleName] && 
                props.overrides[styleName]
            )
        }     
    })
    
    return FlowStyles
}

export default createStyles