import { ArchitectTools } from '@flow-ui/architect/types'
import ValueCross from '../padding/ValueCross'

type Props = {
    tools: ArchitectTools
}
const MarginControls = (props: Props) => {
    if (!props.tools.focused) {
        return null
    }
    return (
        <ValueCross 
            {...props}
            label="Margin"
            propKeys={['mt','ml','mr','mb']}
        />
    )
}
export default MarginControls