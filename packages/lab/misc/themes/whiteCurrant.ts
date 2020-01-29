import light from '@flow-ui/core/misc/themes/light'

const whiteCurrant = light.replace({
	main: {
		name: 'White currant',

		color: {
			background: [246, 245, 247],
			backgroundVariant: [255, 255, 255],
			surface: [250, 250, 250],
			surfaceVariant: [245, 245, 245],
			primary: [207, 0, 119],
			secondary: [107, 54, 143],

			onPrimary: [255, 255, 255],
			onSecondary: [255, 255, 255],
			onBackground: [0, 0, 0],
			onSurface: [0, 0, 0],

			lightest: [230, 230, 230],
			light: [150, 150, 150],
			hard: [120, 120, 120],
			hardest: [80, 80, 80],

			error: [188, 0, 0],
			successful: [0, 200, 0],
			warning: [255, 149, 0]
		}
	}
})

export default whiteCurrant
