import React from 'react';
import { Chart } from '@stage-ui/lab';

export default () => {
    return (
        <Chart
            type="line"
            labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
            data={[[0, 17, 28, 41, 83, 94, 100]]}
            options={{
                maintainAspectRatio: false,
                legend: {
                    display: false
                }
            }}
        />
    )
}