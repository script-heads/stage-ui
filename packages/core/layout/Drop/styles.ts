import Types from './types'
import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps'
import Shared from '../../types'

const DropStyles: Shared.FunctionalComponentStyles<Types.Styles> = (props: Types.Props) => {
	const styleProps = useStyleProps(props)

	return {
		container: [
			styleProps.self,
			{
				willChange: 'scroll-position',
				position: 'fixed',
				zIndex: 300,
			}
		]
	}
}
export default DropStyles