import { useMemo, useState, useEffect } from 'react'
import createID from '../utils/createID'

const objects: { [key: string]: any } = {}
/**
 * It you need useMemo in useEffect
 * hook return null on first load
 */
const useMemoEffect = <T>(createObject: () => T): T | null => {
    const id = useMemo(() => createID(), [])
    const [effect, setEffect] = useState(0)
    useEffect(() => setEffect(1), [])

    if (effect && !objects[id]) {
        objects[id] = createObject()
    }
    return objects[id] || null
}

export default useMemoEffect