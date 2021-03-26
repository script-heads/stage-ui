import code from './default.raw'
import panel from './panel.raw'
import fullscreen from './fullscreen.raw'

export const title = 'Modal'
export const subtitle = 'provides foundation for creating dialogs, lightboxes and more'
export const ns = 'ModalTypes'
export const cases = [
    {
        label: 'Basic',
        code
    },
    {
        label: 'Panel decoration',
        code: panel
    },
    {
        label: 'Fullscreen decoration',
        code: fullscreen
    }
]
