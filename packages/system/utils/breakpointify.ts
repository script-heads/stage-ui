export default (style, value, colorResolver, theme) => {
    if (Array.isArray(value)) {
        const queries = theme.breakpoints.map(bp => `@media (max-width: ${bp})`)
        return value.map((currentValue, index) => ({
            [queries[index]]: {
                [style]: colorResolver(theme, currentValue)
            }
        }))
    }
    return {
        [style]: colorResolver(theme, value)
    }
}