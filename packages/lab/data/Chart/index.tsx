import {useTheme} from '@flow-ui/core'
import mergeObjects from '@flow-ui/core/misc/utils/mergeObjects'
import { ChartDataSets, ChartOptions } from 'chart.js'
import React, { FC, forwardRef } from 'react'
import { Bar, Bubble, Doughnut, HorizontalBar, Line, Pie, Polar, Radar, Scatter } from 'react-chartjs-2'
import ChartTypes from './types'

const Chart: FC<ChartTypes.Props> = (props, ref: any) => {

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
            fontColor: theme.color.onSurface.css()
        },
        legend: {
            labels: {
                fontColor: theme.color.onSurface.css()
            }
        },

        scales: {
            xAxes: [{
                gridLines: {
                    color: theme.color.lightest.css()
                },
                ticks: {
                    beginAtZero: true,
                    fontColor: theme.color.hard.css()
                },
            }],
            yAxes: [{
                gridLines: {
                    color: theme.color.lightest.css()
                },
                ticks: {
                    fontColor: theme.color.hard.css()
                },
            }]
        },
        elements: {
            point: {

                backgroundColor: theme.color.surface.css(),
                borderColor: theme.color.primary.css(),
                radius: 4,
            },
            line: {
                borderColor: theme.color.primary.css(),
                backgroundColor: theme.color.primary.alpha(0.2).css(),
            },
            rectangle: {
                borderColor: theme.color.primary.css(),
                backgroundColor: theme.color.primary.alpha(0.2).css(),
            },
            arc: {
                borderColor: theme.color.primary.css(),
                backgroundColor: theme.color.primary.alpha(0.2).css(),
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