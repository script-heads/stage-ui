import light from './light';

const dark = light.replace({
    name: "Dark",

    color: {
        background: [55, 55, 64],
        backgroundVariant: [75, 75, 85],
        surface: [44, 44, 52],
        surfaceVariant: [50, 50, 60],

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
            green: [0, 74, 0],
            blue: [0, 122, 255],
            orange: [255, 149, 0]
        },
    },
})

export default dark
