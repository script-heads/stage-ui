import { useEffect, useMemo } from 'react'
import createID from '../../misc/utils/createID'
import IMask from 'imask'

const elements: { [key: string]: IMask.InputMask<IMask.AnyMaskedOptions> } = {}

export default (ref, masked) => {

    const id = useMemo(() => createID(), [])

    useEffect(() => {
        if (ref.current && masked) {
            elements[id] = IMask(
                ref.current,
                masked
            )
        }
    }, [])

    return elements[id]
}