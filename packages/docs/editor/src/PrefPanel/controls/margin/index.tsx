import { context } from '../../../..'
import ValueCross from '../padding/ValueCross'
import React from 'react'

const MarginControls = () => {
    if (!context.tools.focused) {
        return null
    }
    return (
        <ValueCross
            label="Margin"
            propKeys={['mt', 'ml', 'mr', 'mb']}
        />
    )
}
export default MarginControls