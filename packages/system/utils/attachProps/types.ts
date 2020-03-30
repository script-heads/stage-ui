import CSS from 'csstype'
import SystemTypes from '../../types'

declare namespace SystemPropsTypes {
    type StyleResolverObject = {
        [key: string]: [string, string, StyleResolver?]
    }

    type StyleResolverContext = {
        padding: [string, string, string, string],
        margin: [string, string, string, string]
    }

    type StyleResolver = (resolverParams: {
        propValue: any
        propName: string
        styleName: string
        theme: SystemTypes.Theme
        ctx: StyleResolverContext
    }) => string | Record<string, string> | void

    interface StyleProps extends
        SystemTypes.ColorProps,
        SystemTypes.BorderProps,
        SystemTypes.PaddingProps,
        SystemTypes.MarginProps,
        SystemTypes.LayoutProps,
        SystemTypes.FlexProps,
        SystemTypes.GridProps {
        [key: string]: unknown
    }

    interface InjectedStyles {
        event: ColorStyles
        color: ColorStyles
        border: BorderStyles
        padding: PaddingStyles
        margin: MarginStyles
        layout: LayoutStyles
        flex: FlexStyles
        grid: GridStyles
        flow: MarginStyles & FlexStyles & GridStyles
        self: PaddingStyles & LayoutStyles & ColorStyles & BorderStyles
        all: MarginStyles & FlexStyles & GridStyles & PaddingStyles & LayoutStyles & ColorStyles & BorderStyles
    }

    type InjectedStylesNames = keyof InjectedStyles

    type ColorStyles = {
        background: CSS.Properties['background']
        color: CSS.Properties['color']
    }

    type BorderStyles = {
        borderWidth: CSS.Properties['borderWidth']
        borderStyle: CSS.Properties['borderStyle']
        borderColor: CSS.Properties['borderColor']
        borderRadius: CSS.Properties['borderRadius']
    }
    type PaddingStyles = {
        padding: CSS.Properties['padding']
    }

    type MarginStyles = {
        margin: CSS.Properties['margin']
    }

    type LayoutStyles = {
        display: CSS.Properties['display']
        visibility: CSS.Properties['visibility']
        width: CSS.Properties['width']
        height: CSS.Properties['height']
        transition: CSS.Properties['transition']
    }

    type FlexStyles = {
        flex: CSS.Properties['flex']
        flexBasis: CSS.Properties['flexBasis']
        flexGrow: CSS.Properties['flexGrow']
        flexShrink: CSS.Properties['flexShrink']
        alignSelf: SystemTypes.FlexSelf
        justifySelf: SystemTypes.FlexSelf
        placeSelf: SystemTypes.FlexSelf
    }

    type GridStyles = {
        gridColumnStart: CSS.Properties['gridColumnStart']
        gridColumnEnd: CSS.Properties['gridColumnEnd']
        gridRowStart: CSS.Properties['gridRowStart']
        gridRowEnd: CSS.Properties['gridRowEnd']
        gridColumn: CSS.Properties['gridColumn']
        gridRow: CSS.Properties['gridRow']
        gridArea: CSS.Properties['gridArea']
        placeSelf: CSS.Properties['placeSelf']
    }
}

export default SystemPropsTypes