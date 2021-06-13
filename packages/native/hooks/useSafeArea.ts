import { useSafeAreaInsets } from 'react-native-safe-area-context'
import scale from 'shared/utils/scale'
import useTheme from 'shared/hooks/useTheme'

export type SafeAreaType = 'narrow' | 'modal' | undefined

export default (type?: SafeAreaType) => {
  const edgeInsets = useSafeAreaInsets()
  const theme = useTheme()
  const space = scale(type === 'narrow' ? theme.spacing.l : theme.spacing.m)

  return {
    top: space + (type !== 'modal' ? edgeInsets.top : 0),
    right: space + edgeInsets.right,
    bottom: space + edgeInsets.bottom,
    left: space + edgeInsets.left,
  }
}
