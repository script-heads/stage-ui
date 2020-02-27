import React from 'react'
import code from './default.raw'
import scrollTop from './scrollTop.raw'

export const title = 'ScrollView'
export const subtitle = 'all scrollable contens should be wrapper in ScrollView'
export const ns = 'ScrollTypes'
export const cases = [
    {
        label: 'Basic',
        code
    },
    {
        label: 'Scroll top',
        code: scrollTop
    }
]