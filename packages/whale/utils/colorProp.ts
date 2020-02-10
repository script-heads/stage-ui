import Color from 'color'

export default <P, L>(prop: P, lib: L): Color | undefined => {
    const color = typeof prop === 'function'
        ? prop(lib)
        : prop

    return prop ? Color(color) : undefined
}