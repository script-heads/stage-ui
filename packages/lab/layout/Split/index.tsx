import React, { forwardRef, Fragment, useMemo, useEffect } from 'react'
import Separator from './Separator'
import SplitTypes from './types'

export type SplitElRef = (HTMLDivElement & { _vertical?: true }) | null

interface SplitElRefs {
    [key: number]: SplitElRef
}

const Split = (props: SplitTypes.Props, ref: any) => {

    let vertical = props.direction === 'column';

    const refs: SplitElRefs = useMemo(() => {
        return {}
    }, [])

    const defaultSize = useMemo(() => {
        return 100 / props.children.length
    }, [])

    useEffect(() => {
        Object.keys(refs).filter(key => parseInt(key) >= 0).map(key => {
            const percent = props.positions ? props.positions[key] : defaultSize
            refs[key].style[vertical ? 'height' : 'width'] = percent + '%'
        })
        refs["-1"]._vertical = props.direction === 'column';
    }, [props.positions, props.direction]);

    const getPositions = () => (
        Object.keys(refs).filter(key => parseInt(key) >= 0).map(key =>
            parseFloat(
                refs[key].style[vertical ? 'height' : 'width']!
            )
        )
    )

    return (
        <div ref={r => { refs[-1] = r; ref = r }} css={{
            display: "flex",
            width: "100%",
            height: "100%",
            flex: 1,
            flexDirection: vertical ? 'column' : 'row',
        }}>
            {
                props.children.map((child, index) => {
                    let separator: any = null
                    if (props.children.length !== index + 1) {
                        separator = (
                            <Separator
                                defaultVertical={vertical}
                                container={() => refs[-1]!}
                                prev={() => refs[index]!}
                                next={() => refs[index + 1]!}
                                onMove={() => {
                                    props.onDrag && props.onDrag(
                                        getPositions()
                                    )
                                }}
                                onDone={() => {
                                    props.onChange && props.onChange(
                                        getPositions()
                                    )
                                }}
                            />
                        )
                    }
                    return (
                        <Fragment key={index}>
                            <div
                                style={{
                                    [vertical ? 'height' : 'width']: defaultSize + "%"
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