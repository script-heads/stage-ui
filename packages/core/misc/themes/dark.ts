import light from './light'

const dark = light.replace({
    main: {
        name: 'Dark',

        color: {
            background: [44, 44, 52],
            backgroundVariant: [50, 50, 60],
            surface: [55, 55, 64],
            surfaceVariant: [75, 75, 85],

            onBackground: [255, 255, 255],
            onSurface: [255, 255, 255],
            onPrimary: [255, 255, 255],
            onSecondary: [255, 255, 255],

            lightest: [110, 110, 120],
            light: [150, 150, 160],
            hard: [180, 180, 200],
            hardest: [230, 230, 250],

            accent: {
                red: [188, 0, 0],
                green: [0, 120, 0],
                blue: [0, 122, 255],
                orange: [255, 149, 0]
            },
        },
    }
})

export default dark
