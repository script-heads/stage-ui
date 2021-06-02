import React from 'react'
import code from './default.raw'
import scrollToElement from './scrollToElement.raw'
import scrollTop from './scrollTop.raw'
import watchElement from './watchElement.raw'

export const title = 'ScrollView'
export const subtitle = 'all scrollable contens should be wrapper in ScrollView'
export const ns = 'ScrollViewTypes'
export const cases = [
    {
        label: 'Basic',
        code
    },
    {
        label: 'Scroll top',
        code: scrollTop
    },
    {
        label: 'Scroll to element',
        code: scrollToElement
    },
    {
        label: 'Watch element',
        code: watchElement
    }
]