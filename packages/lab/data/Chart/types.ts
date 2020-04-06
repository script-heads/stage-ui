import { ChartDataSets, ChartOptions } from 'chart.js'
import SystemTypes from '@stage-ui/system/types'

declare namespace ChartTypes {
    type ChartType = 'line' | 'pie' | 'verticalBar' | 'horizontalBar' | 'doughnut' | 'radar' | 'polar' | 'scatter' | 'bubble'
    interface Props extends SystemTypes.AllProps<HTMLDivElement, Styles> {
        /**
         * @default line
         */
        type: ChartType
        labels: Array<string | string[]>
        data: Array<number[] | ChartDataSets>
        options?: ChartOptions
    }

    interface Styles {

    }
}

export default ChartTypes