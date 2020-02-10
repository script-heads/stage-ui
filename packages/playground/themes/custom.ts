import {light} from '@flow-ui/core/misc/themes'

declare global {
	namespace Whale {
		interface Palette<Color> {
            red: Color
            green: Color
            orangle: Color
            blue: Color
		}
	}
}

export default light.replace({
    main: {
        color: {
            palette: {
                red: [224, 32, 32],
                green: [109, 212, 0],
                orangle: [250, 100, 0],
                blue: [0, 145, 255],
            }
        }
    },
    overrides: {
        // Button: {
        //     container: (variant) => [
        //         {backgroundColor: 'green'}
        //     ]
        // }
    }
})