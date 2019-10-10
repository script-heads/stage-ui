import React from 'react';
import { T1, T4 } from '@flow-ui/core';
import code from './default.raw';
import pie from './pie.raw';

export const title = 'Chart'
export const subtitle = ''
export const ns = 'ChartTypes'
export const tag = (
    <T4 
        color={c => c.onPrimary.css()}
        background={c => c.accent.green.css()}
        children="labs"
    />
)
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
