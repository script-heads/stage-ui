import WhalePropsTypes from '../../types'

/**
 * Function resolving p,pt,pr,pb,pr,m..props
 * into single css string
 */
const resolver: WhalePropsTypes.StyleResolver = (params) => {
    if (params.propValue) {
        let { propName: n, propValue, ctx, theme } = params,
            k = n[0] == 'p' ? 'padding' : 'margin',
            x = n[1] == 'x', y = n[1] == 'y',
            t = n[1] == 't', b = n[1] == 'b',
            l = n[1] == 'l', r = n[1] == 'r'

        if (typeof propValue === 'number') {
            propValue = propValue.toString() + 'px'
        }
        const v = propValue.split(' ').map(value => theme.spacing[value] || value)

        if (n.length == 1) {
            if (v[1] == void 0) v[1] = v[0]
            if (v[2] == void 0) v[2] = v[0]
            if (v[3] == void 0) v[3] = v[1]
            ctx[k] = v
        } else {
            if (t || y) ctx[k][0] = v[0]
            if (r || x) ctx[k][1] = v[0]
            if (b || y) ctx[k][2] = v[1] || v[0]
            if (l || x) ctx[k][3] = v[1] || v[0]
        }
        return ctx[k].join(' ')
    }
}

export default resolver