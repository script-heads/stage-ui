import WhaleTypes from '../types'
import WhalePropsTypes from '../utils/attachProps/types'
import useTheme from './useTheme'
import attachProps from '../utils/attachProps'
import createStyles from '../utils/createStyles'
import { useState, useMemo, CSSProperties } from 'react'

export interface Options<Styles, Props> {
    props: Props,
    styles: WhaleTypes.Styles<Styles> | WhaleTypes.CreateStyles<Styles, Props>,
    styleProps?: Partial<Record<keyof Styles, (keyof WhalePropsTypes.InjectedStyles)[]>>
    styleLabel?: string,
    focus?: {
        applyDecoration?: boolean
        ignoreMouse?: boolean
    }
    theme?: WhaleTypes.Theme
}

const useComponent = <Styles, Props, Params>(
    overrideName: string,
    options: Options<Styles, Props>,
    params?: Params) => {

    const theme = options.theme || useTheme()

    const [focus, setfocus] = useState(false)

    const { cs, attributes, events } = useMemo(() => {

        const resolvedStyles = typeof options.styles === 'function'
            ? options.styles(options.props, theme, params)
            : options.styles

        const {
            attributes,
            events,
            propStyles
        } = attachProps<Styles, Props>(options.props, theme, setfocus, options)

        const cs = createStyles(
            resolvedStyles,
            propStyles,
            options.styleLabel || '',
            options.props,
            overrideName,
            theme.overrides
        )

        return { cs, attributes, events }

    }, [options.props, options.styles, theme])

    if (options.focus?.applyDecoration) {
        attributes.style = {}
        attributes.style = focus
            ? Object.assign({}, theme.assets.focus, JSON.parse(JSON.stringify(attributes.style)))
            : Object.assign({}, attributes.style)
    }
    return { cs, attributes, events, focus, theme }
}

export default useComponent