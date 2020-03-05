import WhaleTypes from '@flow-ui/whale/types'
import Types from './types'

const styles: WhaleTypes.CreateStyles<Types.Styles, Types.Props> = (props, theme) => {
	
	return {
		container: [
			{
				willChange: 'scroll-position',
				position: 'fixed',
				zIndex: 300,
			}
		]
	}
}
export default styles