import React from 'react';
import LabTag from '../../LabTag';
import code from './default.raw';
import pie from './pie.raw';

export const title = 'Chart'
export const subtitle = ''
export const ns = 'ChartTypes'
export const tag = <LabTag/>
export const cases = [
    {
        label: 'Default',
        code
    },
    {
        label: 'Pie',
        code: pie
    },
]
