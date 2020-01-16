import { Block, Text, useTheme } from '@flow-ui/core'
import React, { forwardRef, RefForwardingComponent, useImperativeHandle, useRef, useState, useEffect } from 'react'
import createStyles from './styles'
import ThemeTypes from '@flow-ui/core/misc/themes/types'
import { ArchitectItem } from '../../types'

type MaskProps = {
    color: (color: ThemeTypes.Index['color']) => string,
    item?: ArchitectItem | null
}
export type MaskRefs = {
    update: (rect: { x:number, y:number, h:number, w:number }, name?: string) => void
    hide: () => void,
}

const Mask: RefForwardingComponent<MaskRefs, MaskProps> = (props, ref) => {
    const theme = useTheme()
    const styles = createStyles(theme)
    const selectMask = useRef<HTMLDivElement>(null)
    const [name, setName] = useState('')

    const update = (rect, name) => {
        if (selectMask.current) {
            selectMask.current.style.opacity = '1'
            selectMask.current.style.width = rect.w + 'px'
            selectMask.current.style.height = rect.h + 'px'
            selectMask.current.style.top = rect.y + 'px'
            selectMask.current.style.left = rect.x + 'px'
        }
        setName(name || '')
    }

    const hide = () => {
        if (selectMask && selectMask.current) {
            selectMask.current.style.opacity = '0'
        }
    }

    useEffect(() => {
        if (props.item) {
            const { $, component } = props.item
            update($.getRect(), component)
        }
        if (props.item === null) {
            hide()
        }
    })

    useImperativeHandle(ref, () => ({ update, hide }))

    return (
        <Block
            css={styles.mask(props.color(theme.color))}
            ref={selectMask}
            children={
                name 
                && 
                <Text size={3} css={styles.maskName(props.color(theme.color))}>{name}</Text>
            }
        />
    )
}

export default forwardRef(Mask)