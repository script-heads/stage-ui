import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import React, { forwardRef, Fragment, RefForwardingComponent, useEffect, useMemo, createRef } from 'react'
import Separator from './Separator'
import Types from './types'

export type SplitElRef = (HTMLDivElement & { 
    _vertical?: true 
    _onMove?: () => void
    _onChange?: () => void
}) | null

interface SplitElRefs {
    [key: number]: SplitElRef
}

const Split: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { attributes } = useContainer(props)

    let vertical = props.direction === 'column'

    const refs: SplitElRefs = useMemo(() => ({}), [])

    const defaultSize = useMemo(() => (
        100 / props.children.length
    ), [])

    const getPositions = () => (
        Object.keys(refs).filter(key => parseInt(key) >= 0).map(key =>
            parseFloat(
                refs[key].style[vertical ? 'height' : 'width'] || ''
            )
        )
    )
    
    useEffect(() => {
        refs['-1']._onMove = () => {
            props.onMove && props.onMove(getPositions())
        }
        refs['-1']._onChange = () => {
            props.onChange && props.onChange(getPositions())
        }
    }, [props.onChange, props.onMove])

    useEffect(() => {
        Object.keys(refs).filter(key => parseInt(key) >= 0).map(key => {
            const percent = props.positions ? props.positions[key] : defaultSize
            refs[key].style[vertical ? 'height' : 'width'] = percent + '%'
        })
        refs['-1']._vertical = props.direction === 'column'
        
    }, [props.positions, props.direction])

    return (
        <div {...attributes} ref={r => { refs[-1] = r; ref = { current: r } }} css={{
            display: 'flex',
            width: '100%',
            height: '100%',
            flex: 1,
            flexDirection: vertical ? 'column' : 'row',
        }}>
            {
                props.children.map((child, index) => {

                    let separator = (props.children.length !== index + 1)
                        ? (
                            <Separator
                                areaSize={props.areaSize || 4}
                                defaultVertical={vertical}
                                container={() => refs[-1] as HTMLDivElement}
                                prev={() => refs[index] as HTMLDivElement}
                                next={() => refs[index + 1] as HTMLDivElement}
                            />
                        )
                        : null

                    return (
                        <Fragment key={index}>
                            <div
                                css={{
                                    display: 'flex',
                                }}
                                style={{
                                    [vertical ? 'height' : 'width']: defaultSize + '%'
                                }}
                                ref={ref => refs[index] = ref}
                                children={child}
                            />
                            {separator}
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default forwardRef(Split)