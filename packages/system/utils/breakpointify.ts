export default (style, value, resolver, theme) => {
    if (Array.isArray(value)) {
        const queries = theme.breakpoints.map(bp => `@media (max-width: ${bp})`)
        return value.map((currentValue, index) => ({
            [queries[index]]: {
                [style]: resolver(currentValue, theme)
            }
        }))
    }
    return {
        [style]: resolver(value, theme)
    }
}