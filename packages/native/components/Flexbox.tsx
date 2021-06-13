import React from 'react'
import { Animated, StyleProp, ViewProps, ViewStyle } from 'react-native'
import useStyleProps, { StyleProps } from 'shared/hooks/useStyleProps'

export interface FlexboxProps extends ViewProps, StyleProps {
  centered?: boolean
  grow?: number
  shrink?: number
  row?: boolean
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

function Flexbox(props: FlexboxProps) {
  const [styleProps, otherProps] = useStyleProps(props)

  const {
    centered,
    row,
    direction,
    grow,
    wrap,
    shrink,
    justifyContent,
    alignItems,
    style,
    ...viewProps
  } = otherProps

  return (
    <Animated.View
      style={[
        {
          flexDirection: row ? 'row' : direction,
          justifyContent: justifyContent || (centered ? 'center' : undefined),
          alignItems: alignItems || (centered ? 'center' : undefined),
          flexGrow: grow,
          flexShrink: shrink,
          flexWrap: wrap,
        },
        style,
        styleProps,
      ]}
      {...viewProps}
    />
  )
}

export default Flexbox
