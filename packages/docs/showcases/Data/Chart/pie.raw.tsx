import React from 'react'
import { Chart } from '@stage-ui/lab'

export default () => {
  return (
    <Chart
      labels={['Earth', 'Moon', 'Mars']}
      type="pie"
      data={[
        {
          label: 'Radius',
          borderWidth: 0,
          backgroundColor: ['#80b1ff', '#c5c5c5', '#ff9f1f'],
          data: [6371, 1737, 3389],
        },
      ]}
      options={{
        maintainAspectRatio: false,
      }}
    />
  )
}
