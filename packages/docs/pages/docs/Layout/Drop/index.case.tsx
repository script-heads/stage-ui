import code from './default.raw'
import followCursor from './followCursor.raw'

export const title = 'Drop'
export const subtitle = 'displays absolute positioned data near target'
export const ns = 'DropTypes'
export const cases = [
    {
        label: 'Basic',
        code
    },
    {
        label: 'Follow cursor',
        code: followCursor
    }
]
