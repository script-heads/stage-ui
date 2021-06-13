import React from 'react'
import { Dimensions, StyleProp, ViewStyle } from 'react-native'
import { StyleProps } from 'shared/hooks/useStyleProps'
import useTheme from 'shared/hooks/useTheme'
import scale from 'shared/utils/scale'
import Button from './Button'
import Flexbox from './Flexbox'
import Text from './Text'

export interface ProgressButtonProps extends StyleProps {
  progress: number
  leftLabel: string
  rightLabel: string
  style?: StyleProp<ViewStyle>
  onPress: () => void
}

function ProgressButton({
  progress,
  leftLabel,
  rightLabel,
  style,
  onPress,
}: ProgressButtonProps) {
  const theme = useTheme()

  return (
    <Button
      style={[
        {
          borderWidth: 4,
          borderColor: theme.color.primary.string(),
        },
        style,
      ]}
      background={(c) => c.onPrimary.string()}
      p={0}
      onPress={onPress}
    >
      <Flexbox
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          style={{
            position: 'absolute',
            top: scale(15),
            left: scale(10),
          }}
          weight="bold"
          color={(c) => c.primary.string()}
        >
          {leftLabel}
        </Text>
        <Text
          style={{
            position: 'absolute',
            top: scale(15),
            right: scale(10),
          }}
          weight="bold"
          color={(c) => c.primary.string()}
        >
          {rightLabel}
        </Text>
      </Flexbox>
      <Flexbox
        background={(c) => c.primary.string()}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: -2,
          width: `${progress || 0}%`,
          overflow: 'hidden',
        }}
      >
        <Flexbox
          direction="row"
          w={Dimensions.get('screen').width - 48}
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            style={{
              position: 'absolute',
              top: scale(15),
              left: scale(10),
            }}
            weight="bold"
            color={(c) => c.onPrimary.string()}
          >
            {leftLabel}
          </Text>
          <Text
            style={{
              position: 'absolute',
              top: scale(15),
              right: scale(10),
            }}
            weight="bold"
            color={(c) => c.onPrimary.string()}
          >
            {rightLabel}
          </Text>
        </Flexbox>
      </Flexbox>
    </Button>
  )
}

export default ProgressButton
