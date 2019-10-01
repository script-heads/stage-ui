import { ChartDataSets, ChartOptions } from "chart.js";
import Global from "@flow-ui/core/types";

declare namespace ChartTypes {
    export type ChartType = 'line' | 'pie' | 'verticalBar' | 'horizontalBar' | 'doughnut' | 'radar' | 'polar' | 'scatter' | 'bubble';
    export interface Props extends Global.Props {
        /**
         * @default line
         */
        type: ChartType
        labels: Array<string | string[]>
        data: Array<number[] | ChartDataSets>
        options?: ChartOptions
    }
}

export default ChartTypes