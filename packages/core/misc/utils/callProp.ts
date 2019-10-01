export default <P, L>(prop: P, lib: L): Exclude<P, Function> => {
    return typeof prop === 'function'
        ? prop(lib)
        : prop
}