import { Button, Flexbox } from '@flow-ui/core'
import React, { forwardRef, RefObject } from 'react'
import Types from './types'

const ButtonGroup = (props: any, ref: RefObject<HTMLDivElement>) => {
    const { children } = props
    const childs = Array.isArray(children) ? children : [children]
    return (
        <Flexbox {...props} ref={ref}>
            {childs.map((child, index) => {
                const style: React.CSSProperties = {}
                if (index !== childs.length -1) {
                    style.borderTopRightRadius = 0
                    style.borderBottomRightRadius = 0
                    style.borderRightWidth = 0
                }
                if (index !== 0) {
                    style.borderTopLeftRadius = 0
                    style.borderBottomLeftRadius = 0
                    style.borderLeftWidth = 0
                }
                return (
                    <Button
                        key={index}
                        {...props}
                        {...child.props}
                        style={{
                            ...style
                        }}
                    />
                )
            })}
        </Flexbox>
    )
}

export default forwardRef(ButtonGroup)