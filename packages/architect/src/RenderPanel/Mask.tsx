import { Block, Text, useFlow } from '@flow-ui/core'
import React, { forwardRef, RefForwardingComponent, useImperativeHandle, useRef, useState } from 'react'
import createStyles from './styles'

type MaskProps = {
}
export type MaskRefs = {
    update: (rect: { x:number, y:number, h:number, w:number }, name?: string) => void
    hide: () => void,
}

const Mask: RefForwardingComponent<MaskRefs, MaskProps> = (props, ref) => {
    const { theme } = useFlow()
    const styles = createStyles(theme)
    const selectMask = useRef<HTMLDivElement>(null)
    const [name, setName] = useState('')

    useImperativeHandle(ref, () => ({
        update: (rect, name) => {
            if (selectMask.current) {
                selectMask.current.style.opacity = '1'
                selectMask.current.style.width = rect.w + 'px'
                selectMask.current.style.height = rect.h + 'px'
                selectMask.current.style.top = rect.y + 'px'
                selectMask.current.style.left = rect.x + 'px'
            }
            setName(name || '')
        },
        hide: () => {
            if (selectMask && selectMask.current) {
                selectMask.current.style.opacity = '0'
            }
        }
    }))

    return (
        <Block
            css={styles.mask}
            ref={selectMask}
            children={
                name 
                && 
                <Text size={3} css={styles.maskName}>{name}</Text>
            }
        />
    )
}

export default forwardRef(Mask)