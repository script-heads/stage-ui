import SystemTypes, { EmotionStyles } from '../types'
import useTheme from './useTheme'
import resolver from '../utils/resolver'

export interface Options {
    focus?: 'always' | 'tab' | 'mouse' | 'never'
    label?: string
    theme?: SystemTypes.Theme
}

const isFunction = (a: unknown) => typeof a === 'function'

function useComponent<Props, Styles>(
    name: string,
    props: Props,
    createClasses: SystemTypes.CreateStyles<Styles, Props>,
    options: Options = {}) {

    const {
        focus = 'always',
        label = name,
        theme = useTheme(),
    } = options

    const overrides = theme.overrides[name]
    const decorations = theme.decorations[name] && theme.decorations[name][props.decoration]

    const initialClasses = createClasses(props, theme)

    const decorationClasses = isFunction(decorations)
        ? decorations(props)
        : decorations

    const overrideClasses = isFunction(overrides)
        ? overrides(props)
        : overrides

    const data = {
        classes: {},
        attributes: {},
        events: {},
        styles: {
            all: [],
            flow: [],
            self: [],
            qs: [],
            color: [],
            border: [],
            padding: [],
            layout: [],
            margin: [],
            flex: [],
            grid: []
        }
    }

    for (let key in props) {
        if (key[0] === 'o' && key[1] === 'n') {
            data.events[key] = props[key]
        }
        if (resolver.hasOwnProperty(key)) {
            resolver[key](data, props[key], theme, focus)
        }
    }

    for (let key in initialClasses) {
        const classLabel = { label: `${label}-${key}` }

        data.classes[key] = isFunction(initialClasses[key])
            ? (state) => {
                return [
                    classLabel,
                    initialClasses[key](state),
                    overrideClasses[key]?.(state),
                    decorationClasses[key]?.(state)
                ] as EmotionStyles
            }
            : [
                classLabel,
                initialClasses[key],
                overrideClasses[key],
                decorationClasses[key]
            ] as EmotionStyles
    }

    return data
}

export default useComponent