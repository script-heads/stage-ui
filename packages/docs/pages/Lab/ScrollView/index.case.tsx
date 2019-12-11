import React from 'react';
import LabTag from '../../LabTag';
import code from './default.raw';
import scrollTop from './scrollTop.raw';

export const title = 'ScrollView'
export const subtitle = ''
export const ns = 'ScrollTypes'
export const tag = <LabTag/>
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