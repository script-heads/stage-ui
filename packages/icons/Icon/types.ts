import SystemTypes from '@stage-ui/system/types'

declare namespace IconTypes {
    /**
     * TODO: circle и oval добавляют только padding
     */
    type IconShapes = 'circle' | 'oval' | 'square'
    type IconType = 'filled' | 'outline'

    interface Props extends SystemTypes.AllProps<HTMLDivElement, Styles> {
        svg: React.ReactElement
        shape?: IconShapes
        size?: SystemTypes.Size | (string & { T?: string })
        color?: SystemTypes.ColorProp
        hoverColor?: SystemTypes.ColorProp
        background?: SystemTypes.ColorProp
        rotate?: number
    }

    interface IconProps extends Omit<Props, 'svg'> {
        type?: IconType
    }

    interface Styles {
        container: {
            shape?: IconShapes
            size: SystemTypes.Size | (string & { T?: string })
        }
        icon: void
    }
}

export default IconTypes