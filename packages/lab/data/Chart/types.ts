import { ChartDataSets, ChartOptions } from 'chart.js'
import WhaleTypes from '@flow-ui/whale/types'

declare namespace ChartTypes {
    type ChartType = 'line' | 'pie' | 'verticalBar' | 'horizontalBar' | 'doughnut' | 'radar' | 'polar' | 'scatter' | 'bubble'
    interface Props extends WhaleTypes.AllProps<HTMLDivElement, Overrides> {
        /**
         * @default line
         */
        type: ChartType
        labels: Array<string | string[]>
        data: Array<number[] | ChartDataSets>
        options?: ChartOptions
    }
    
    interface Overrides {

    }
}

export default ChartTypes