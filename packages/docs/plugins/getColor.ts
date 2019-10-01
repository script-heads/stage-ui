export default (colorName, theme) => {
    if (typeof colorName === 'string') {
        return colorName.substring(0, 6) != 'accent'
            ? theme[colorName]
            : theme['accent'][colorName.substring(7, colorName.length)]
    }
}