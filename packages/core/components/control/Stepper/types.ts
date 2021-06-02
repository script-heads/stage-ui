declare namespace StepperTypes {
  interface StepperData {
    label?: React.ReactNode
  }

  interface Props extends Omit<Stage.AllProps<HTMLDivElement, Styles>, 'onChange'> {
    data: StepperData[]

    size?: Stage.Sizes

    current?: number

    onChange?: (step: StepperData, stepIndex: number) => void
  }

  interface StyleState {
    size: Stage.Sizes
    active: boolean
    complete: boolean
    pointer: boolean
  }

  interface Styles {
    /**
     * Root element
     */
    container: void
    step: StyleState
    separator: StyleState
  }
}

export default StepperTypes
