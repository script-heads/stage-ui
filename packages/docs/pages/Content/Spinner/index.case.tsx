import code from './default.raw'
import another from './another.raw'

export const title = 'Spinner'
export const subtitle= 'indicate loading state of application, can also spin any other components'

export const ns = 'SpinnerTypes'
export const cases = [
    { label: 'Basic', code },
    { label: 'Spin anything', code: another }
]
