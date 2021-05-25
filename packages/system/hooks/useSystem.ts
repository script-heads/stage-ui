import useTheme from './useTheme'
import propsResolers from '../props'
import createVariant, { Variant } from '../utils/createVariant'
import isFunction from '../utils/isFunction'
import { AllEventProps, AttributeProps } from '../props/types'

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

export type FunctionClassDefinition<ClassSchema> = ((variant: Variant<ClassSchema>, state: ClassSchema) => Stage.JSS)

export type ClassesDefinition<ClassesSchema> = {
    [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends Object
    ? FunctionClassDefinition<ClassesSchema[ClassName]>
    : Stage.JSS
}

export type FunctionClass<ClassSchema> = (state: ClassSchema) => Stage.JSS

export type Classes<ClassesSchema> = {
    [ClassName in keyof ClassesSchema]: ClassesSchema[ClassName] extends Object
    ? FunctionClass<ClassesSchema[ClassName]>
    : Stage.JSS
}

export type CreateClasses<ClassesSchema, Props> = (
    theme: Stage.Theme,
    props: Props,
    styleProps: StyleProps
) => ClassesDefinition<ClassesSchema>

export type ComponentData<Props extends Record<string, any>, ClassesSchema> = {
    classes: Classes<ClassesSchema>
    attributes: Pick<Props, keyof AttributeProps>
    events: Pick<Props, keyof AllEventProps<any>>
}

function useSystem<Props extends Record<string, any>, ClassesSchema>(
    name: string,
    props: Props,
    createClasses: CreateClasses<ClassesSchema, Props>,
    options: Options = {}) {

    const {
        focus = 'always',
        label = name,
        theme = useTheme(),
    } = options

    const data = {
        classes: {},
        attributes: {},
        events: {},
    } as ComponentData<Props, ClassesSchema>

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
            data.events[key as keyof AllEventProps<any>] = props[key]
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

    const componentClasses: ClassesDefinition<ClassesSchema> = createClasses(theme, props, styleProps)

    const themeOverrideClasses: ClassesDefinition<ClassesSchema> = isFunction(themeOverrides)
        ? themeOverrides(props, styleProps)
        : themeOverrides || {}

    const propsOverrideClasses: ClassesDefinition<ClassesSchema> = isFunction(propsOverrides)
        ? propsOverrides(theme, styleProps)
        : propsOverrides || {}

    for (let key in componentClasses) {
        const classLabel = { label: `${label}-${key}` }

        data.classes[key] = (isFunction(componentClasses[key])
            ? ((state) => {
                const variant = createVariant(state)
                return [
                    classLabel,
                    (componentClasses[key] as FunctionClassDefinition<ClassesSchema[typeof key]>)(variant, state),
                    (themeOverrideClasses[key] as FunctionClassDefinition<ClassesSchema[typeof key]>)?.(variant, state),
                    (propsOverrideClasses[key] as FunctionClassDefinition<ClassesSchema[typeof key]>)?.(variant, state),
                ]
            })
            : [
                classLabel,
                componentClasses[key],
                themeOverrideClasses[key],
                propsOverrideClasses[key],
            ]) as Classes<ClassesSchema>[typeof key]
    }

    return data
}

export default useSystem