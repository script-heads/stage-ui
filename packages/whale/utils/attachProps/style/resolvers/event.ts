import WhalePropsTypes from '../../types'

const resolver: WhalePropsTypes.StyleResolver = (params) => {
    const { propName } = params
    if (propName === 'onClick') {
        return {
            cursor: 'pointer',
            userSelect: 'none'
        }
    }
    return void 0
}

export default resolver