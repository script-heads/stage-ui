import { Block, Flexbox, Header, Text } from '@flow-ui/core'
import * as icons from '@flow-ui/core/icons'
import { Minus, Plus } from '@flow-ui/core/icons'
import React, { Fragment, useEffect, useState } from 'react'
import code from './default.raw'
import shapes from './shapes.raw'
import rotate from './rotate.raw'

export const title = 'Icons collection'
export const ns = 'IconTypes'
export const cases = [
    { label: 'Basic', code },
    { label: 'Shapes', code: shapes },
    { label: 'Rotate', code: rotate },
]

const Delay = (props) => {
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setDisplay(true)
        }, 1 * (props.index + 1))
    }, [])

    if (!display) {
        return null
    }

    return props.children
}

export default () => {
    const [open, setOpen] = useState(false)
    const OpenCloseIcon = open
        ? Minus
        : Plus

    return (
        <Fragment>
            <Flexbox alignItems="center" justifyContent="space-between" onClick={() => setOpen(!open)}>
                <Header>Icon set</Header>
                <OpenCloseIcon size="2rem" />
            </Flexbox>
            {open && (
                <Flexbox pt="1rem">
                <Block
                    style={{
                        display: 'grid',
                        width: '100%',
                        gridTemplateColumns: 'repeat(auto-fill, 8rem)'
                    }}
                >
                    {Object.keys(icons).map((key, index) => {
                        const PreviewIcon = icons[key]
                        return (
                            <Delay key={key} index={index}>
                                <Flexbox
                                    column
                                    p="1rem"
                                    justifyContent="center"
                                    alignItems="center"
                                    alignContent="center"
                                >
                                    <PreviewIcon
                                        shape="oval"
                                        size="2rem"
                                        background={c => c.lightest.css()}
                                    />
                                    <Text
                                        color={c => c.light.css()}
                                        mt=".5rem"
                                        children={key}
                                    />
                                </Flexbox>
                            </Delay>
                        )
                    })}
                </Block>
            </Flexbox>
            )}
        </Fragment>
    )
}
