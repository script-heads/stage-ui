export default (value, name, theme) => {
    const styles = {}
    const
        styleName = name[0] == 'p' ? 'padding' : 'margin',
        x = name[1] == 'x', y = name[1] == 'y',
        t = name[1] == 't', b = name[1] == 'b',
        l = name[1] == 'l', r = name[1] == 'r'

    if (typeof value === 'number') {
        value = value.toString() + 'px'
    }

    const styleValue = value.split(' ').map(value => theme.spacing[value] || value)

    if (name.length == 1) {
        if (styleValue[1] == void 0) styleValue[1] = styleValue[0]
        if (styleValue[2] == void 0) styleValue[2] = styleValue[0]
        if (styleValue[3] == void 0) styleValue[3] = styleValue[1]
        styles[styleName] = styleValue
    } else {
        if (t || y) styles[styleName][0] = styleValue[0]
        if (r || x) styles[styleName][1] = styleValue[0]
        if (b || y) styles[styleName][2] = styleValue[1] || styleValue[0]
        if (l || x) styles[styleName][3] = styleValue[1] || [0]
    }

    return styles[styleName].join(' ')
}