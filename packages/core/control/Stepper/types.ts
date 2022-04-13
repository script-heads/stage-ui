declare namespace StepperTypes {
  interface StepperData {
    label?: React.ReactNode
    text?: React.ReactNode
  }

  interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'onChange'> {
    data: StepperData[]

    size?: Stage.Sizes

    current?: number

    onChange?: (step: StepperData, stepIndex: number) => void
  }

  type ClassState = {
    size: Stage.Sizes
    active: boolean
    complete: boolean
    pointer: boolean
  }

  type Classes = {
    /**
     * Root element
     */
    container: void
    stepContainer: void
    stepText: ClassState
    step: ClassState
    separator: ClassState
  }
}

export default StepperTypes
