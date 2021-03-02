import useTheme from './useTheme'
import propsResolers from '../props'
import createVariant, { Variant } from '../utils/createVariant'
import isFunction from '../utils/isFunction'
import { AllEventProps, AttributeProps, CoreProps } from '../props/types'

export interface Options {
    focus?: 'always' | 'tabOnly' | 'never'
    label?: string
    theme?: Stage.Theme
}

export interface StyleProps {
    all: Stage.JSS[]
    container: Stage.JSS[]
    content: Stage.JSS[]

    style: Stage.JSS[]
    margin: Stage.JSS[]
    flex: Stage.JSS[]
    grid: Stage.JSS[]

    padding: Stage.JSS[]
    color: Stage.JSS[]
    border: Stage.JSS[]
    layout: Stage.JSS[]
}

export type ClassesDefinition<ClassesSchema> = {
    [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends Object
    ? ((variant: Variant<ClassesSchema[ClassName]>) => Stage.JSS)
    : Stage.JSS
}

export type Classes<ClassesSchema> = {
    [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends Object
    ? (state: ClassesSchema[ClassName]) => Stage.JSS
    : Stage.JSS
}

export type CreateClasses<ClassesSchema, Props> = (
    theme: Stage.Theme,
    props: Props,
    styleProps: StyleProps
) => ClassesDefinition<ClassesSchema>

function useComponent<Props extends CoreProps, ClassesSchema>(
    name: string,
    props: Props,
    createClasses: CreateClasses<ClassesSchema, Props>,
    options: Options = {}) {

    const {
        focus = 'always',
        label = name,
        theme = useTheme(),
    } = options

    const data: {
        classes: Classes<ClassesSchema>
        attributes: Pick<Props, keyof AttributeProps>
        events: Pick<Props, keyof AllEventProps<any>>
    } = {
        classes: {},
        attributes: {},
        events: {},
    }

    const styleProps: StyleProps = {
        all: [],
        container: [],
        content: [],

        style: [],
        margin: [],
        flex: [],
        grid: [],

        padding: [],
        color: [],
        border: [],
        layout: [],
    }

    for (let key in props) {
        if (key[0] === 'o' && key[1] === 'n') {
            data.events[key] = props[key]
        }
        if (propsResolers.hasOwnProperty(key)) {
            propsResolers[key](props, data, styleProps, theme, focus)
        }
    }

    styleProps.container.concat(styleProps.margin, styleProps.flex, styleProps.grid, styleProps.style)
    styleProps.content.concat(styleProps.padding, styleProps.color, styleProps.border, styleProps.layout)
    styleProps.all.concat(styleProps.container, styleProps.content)

    const themeOverrides = theme.overrides[name]
    const propsOverrides = props['overrides']

    const componentClasses = createClasses(theme, props, styleProps)

    const themeOverrideClasses = isFunction(themeOverrides)
        ? themeOverrides(props, styleProps)
        : themeOverrides

    const propsOverrideClasses = isFunction(propsOverrides)
        ? propsOverrides(theme, props, styleProps)
        : propsOverrides

    for (let key in componentClasses) {
        const classLabel = { label: `${label}-${key}` }

        data.classes[key] = isFunction(componentClasses[key])
            ? (state) => {
                const variant = createVariant(state)
                return [    
                    classLabel,
                    componentClasses[key](variant, state),
                    themeOverrideClasses[key]?.(variant, state),
                    propsOverrideClasses[key]?.(variant, state),
                ] as Stage.JSS
            }
            : [
                classLabel,
                componentClasses[key],
                themeOverrideClasses[key],
                propsOverrideClasses[key],
            ] as Stage.JSS
    }

    return data
}

export default useComponent