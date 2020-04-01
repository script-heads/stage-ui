import { context } from '../../../..'
import ValueCross from './ValueCross'
import React from 'react'

const PaddingControls = () => {
    if (!context.tools.focused) {
        return null
    }
    return (
        <ValueCross
            label="Padding"
            propKeys={['pt', 'pl', 'pr', 'pb']}
        />
    )
}
export default PaddingControls