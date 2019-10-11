import { T3 } from '@flow-ui/core';
import React from 'react';
import code from './default.raw';
import pie from './pie.raw';

export const title = 'Chart'
export const subtitle = ''
export const ns = 'ChartTypes'
export const tag = (
    <T3 
        color={c => c.onPrimary.css()}
        background={"rgb(0, 200, 0)"}
        px="0.5rem"
        py="0.125rem"
        css={{ borderRadius: "1rem" }}
        children="lab"
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
