import SystemTypes, { EmotionStyles } from '../types'
import useTheme from './useTheme'

export interface Options<Styles> {
    focus?: 'always' | 'tab' | 'mouse' | 'never'
    label?: string
    theme?: SystemTypes.Theme
    combineStyles?: Partial<Record<
        keyof Styles,
        (keyof InjectedStyles | 'focus' | 'styles')[]
    >>,
}

const isFunction = (a) => typeof a === 'function'

const useComponent = <Props, Styles>(
    name: string,
    props: Props,
    styles: SystemTypes.CreateStyles<Styles, Props>,
    options: Options<Styles> = {}) => {

    const {
        focus = 'always',
        label,
        theme = useTheme(),
        combineStyles = { container: ['all'] }
    } = options

    const initialStyles = styles(props, theme)

    const overrideStyles = isFunction(theme.overrides[name])
        ? theme.overrides[name](props)
        : theme.overrides[name]

    const propStyles = isFunction(props['styles'])
        ? props['styles'](props, theme)
        : props['styles']

    const componentStyles = {}, systemProps = {
        focus: focused && theme.assets.focus
    }

    for (let key in props) {
        if (sharedPropsResolver.hasOwnProperty(key)) {
            const resolver = sharedPropsResolver[key]
            systemProps[resolver[0]] = resolver[1](props[key], theme, focus)
        }
    }

    for (let key in styles) {
        const emotionLabel = {
            label: `${label || name}-${key}`
        }

        const sorthandStyles = systemProps.styles['something']
        const propStylesLocal = propsStyles || propsStyles[key]

        componentStyles[key] = isFunction(styles[key])
            ? (state) => {
                return [
                    emotionLabel,
                    initialStyles[key](state),
                    overrideStyles[key]?.(state),
                    propStylesLocal(state),
                    sorthandStyles
                ] as EmotionStyles
            }
            : [
                emotionLabel,
                initialStyles[key],
                overrideStyles[key],
                propStylesLocal,
                sorthandStyles
            ] as EmotionStyles
    }

    return {
        cs: componentStyles,
        attributes: systemProps.attributes,
        events: systemProps.events
    }
}

export default useComponent