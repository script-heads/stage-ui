import SystemTypes, { EmotionStyles } from '../types'
import useTheme from './useTheme'
import resolver from '../utils/resolver'

export interface Options {
    focus?: 'always' | 'tab' | 'mouse' | 'never'
    label?: string
    theme?: SystemTypes.Theme
}

const isFunction = (a) => typeof a === 'function'

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

    const initialClasses = createClasses(props, theme)

    const decorationClasses = theme.decorations[name] && props.decoration
        && isFunction(theme.decorations[name][props.decoration])
        ? theme.decorations[name][props.decoration](props)
        : theme.decorations[name][props.decoration]

    const overrideClasses = isFunction(theme.overrides[name])
        ? theme.overrides[name](props)
        : theme.overrides[name]

    const data = {
        classes: {},
        attributes: {},
        events: {
            all: {},
            form: {},
            focus: {},
            image: {},
            media: {},
            mouse: {},
            touch: {},
            wheel: {},
            pointer: {},
            keyboard: {},
            selection: {},
            animation: {},
            clipboard: {},
            transition: {},
            composition: {},
            scroll: {}
        },
        styles: {
            all: [],
            flow: [],
            self: [],
            qs: {},
            color: {},
            border: {},
            padding: {},
            layout: {},
            margin: {},
            flex: {},
            grid: {}
        }
    }

    for (let key in props) {
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
                    initialClasses[key]?.(state),
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