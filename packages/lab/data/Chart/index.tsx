import { useTheme } from '@flow-ui/core'
import mergeObjects from '@flow-ui/system/utils/mergeObjects'
import { ChartDataSets, ChartOptions } from 'chart.js'
import React, { forwardRef, RefForwardingComponent } from 'react'
import { Bar, Bubble, Doughnut, HorizontalBar, Line, Pie, Polar, Radar, Scatter } from 'react-chartjs-2'
import Types from './types'

type ChartRef = Bar | Bubble | Doughnut | HorizontalBar | Line | Pie | Polar | Radar | Scatter

const Chart: RefForwardingComponent<ChartRef, Types.Props> = (props, ref) => {

    const { type = 'line', labels, data, options } = props

    const datasets: ChartDataSets[] | undefined = data && data.map(dataItem => {
        let dataset: ChartDataSets = {}

        if (Array.isArray(dataItem)) {
            dataset.data = dataItem
        } else {
            dataset = dataItem
        }

        return dataset
    })

    const theme = useTheme()

    const defaultOptions: ChartOptions = {
        title: {
            fontColor: theme.color.onSurface.rgb().string()
        },
        legend: {
            labels: {
                fontColor: theme.color.onSurface.rgb().string()
            }
        },

        scales: {
            xAxes: [{
                gridLines: {
                    color: theme.color.lightest.rgb().string()
                },
                ticks: {
                    beginAtZero: true,
                    fontColor: theme.color.hard.rgb().string()
                },
            }],
            yAxes: [{
                gridLines: {
                    color: theme.color.lightest.rgb().string()
                },
                ticks: {
                    fontColor: theme.color.hard.rgb().string()
                },
            }]
        },
        elements: {
            point: {

                backgroundColor: theme.color.surface.rgb().string(),
                borderColor: theme.color.primary.rgb().string(),
                radius: 4,
            },
            line: {
                borderColor: theme.color.primary.rgb().string(),
                backgroundColor: theme.color.primary.alpha(0.2).rgb().string(),
            },
            rectangle: {
                borderColor: theme.color.primary.rgb().string(),
                backgroundColor: theme.color.primary.alpha(0.2).rgb().string(),
            },
            arc: {
                borderColor: theme.color.primary.rgb().string(),
                backgroundColor: theme.color.primary.alpha(0.2).rgb().string(),
            }
        }
    }

    const params = {
        ref,
        options: mergeObjects(defaultOptions, options),
        data: {
            labels,
            datasets
        }
    }

    switch (type) {
        case 'line': return <Line {...params} />
        case 'pie': return <Pie {...params} />
        case 'verticalBar': return <Bar {...params} />
        case 'horizontalBar': return <HorizontalBar {...params} />
        case 'doughnut': return <Doughnut {...params} />
        case 'scatter': return <Scatter {...params} />
        case 'radar': return <Radar {...params} />
        case 'polar': return <Polar {...params} />
        case 'bubble': return <Bubble {...params} />
        default: return null
    }
}

export default forwardRef(Chart)