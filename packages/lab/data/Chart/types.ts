import { ChartDataSets, ChartOptions } from 'chart.js'

declare namespace ChartTypes {
  type ChartType =
    | 'line'
    | 'pie'
    | 'verticalBar'
    | 'horizontalBar'
    | 'doughnut'
    | 'radar'
    | 'polar'
    | 'scatter'
    | 'bubble'
  interface Props extends Stage.AllProps<HTMLDivElement, Classes> {
    /**
     * @default line
     */
    type: ChartType
    labels: Array<string | string[]>
    data: Array<number[] | ChartDataSets>
    options?: ChartOptions
  }

  type Classes = {}
}

export default ChartTypes
