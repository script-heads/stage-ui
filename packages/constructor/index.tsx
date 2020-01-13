import ComponentTree from '@flow-ui/constructor/src/ComponentTree/index'
import PreferencePanel from '@flow-ui/constructor/src/PreferencePanel'
import Render from '@flow-ui/constructor/src/Render'
import useForceUpdate from '@flow-ui/constructor/src/utils/useForceUpdate'
import { StructureContext } from '@flow-ui/constructor/types'
import { Split } from '@flow-ui/lab'
import styles from './styles'

const callbacks: (() => void)[] = []

const context: StructureContext = {
    structure: require('./$DEMO').default,
    current: null,
    target: null,
    focused: null,
}

export default () => {
    const forceUpdate = useForceUpdate()
    const onUpdate = () => {
        forceUpdate()
    }
    return (
        <Split css={styles.container} direction="row" areaSize={4} positions={[25, 50, 25]}>
            <ComponentTree
                context={context}
                onUpdate={onUpdate}
            />
            <Render
                context={context}
                onUpdate={onUpdate}
            />
            <PreferencePanel
                context={context}
                onUpdate={onUpdate}
            />
        </Split>
    )
}