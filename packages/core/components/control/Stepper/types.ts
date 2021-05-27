import SystemTypes from '@stage-ui/system/types'

declare namespace StepperTypes {

    interface StepperData {
        label?: React.ReactNode
    }

    interface Props extends Omit<AllProps<HTMLDivElement, Styles>, 'onChange'> {
        
        data: StepperData[]
        
        size?: SystemTypes.Size

        current?: number

        onChange?: (step: StepperData, stepIndex: number) => void
    }

    interface StyleState {
        size: SystemTypes.Size
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