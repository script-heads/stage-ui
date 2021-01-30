import code from './default.raw'
import animation from './animation.raw'
import stickCursor from './stickCursor.raw'

export const title = 'Drop'
export const subtitle = 'displays absolute positioned data near target'
export const ns = 'DropTypes'
export const cases = [
    {
        label: 'Basic',
        code
    },
    {
        label: 'Animation',
        code: animation
    },
    {
        label: 'Stick cursor',
        code: stickCursor
    }
]
