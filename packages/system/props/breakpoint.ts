export type BreakpointProp<T> = T[] | T

export default (style, value, resolver, theme) => {
    if (Array.isArray(value)) {
        const queries = theme.breakpoints.map(bp => `@media (max-width: ${bp})`)
        return value.map((currentValue, index) => ({
            [queries[index]]: {
                [style]: resolver(theme, currentValue)
            }
        }))
    }
    return {
        [style]: resolver(theme, value)
    }
}