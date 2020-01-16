import { ArchitectTools } from '@flow-ui/architect/types'
import ValueCross from './ValueCross'

type Props = {
    tools: ArchitectTools
}
const PaddingControls = (props: Props) => {
    if (!props.tools.focused) {
        return null
    }
    return (
        <ValueCross 
            {...props}
            label="Padding"
            propKeys={['pt','pl','pr','pb']}
        />
    )
}
export default PaddingControls