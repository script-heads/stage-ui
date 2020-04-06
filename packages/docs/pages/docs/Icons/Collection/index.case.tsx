import { Block, Flexbox, Header, Text } from '@stage-ui/core'
import * as AllIcons from '@stage-ui/core/icons'
import { Minus, Plus } from '@stage-ui/core/icons'
import React, { Fragment, useEffect, useState } from 'react'

export const title = 'Collection'
export const subtitle = 'icons improves user experience'

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
    return (
        <Flexbox pt="1rem">
            <Block
                style={{
                    display: 'grid',
                    width: '100%',
                    gridTemplateColumns: 'repeat(auto-fill, 8rem)'
                }}
            >
                {Object.keys(AllIcons).map((key, index) => {
                    const PreviewIcon = AllIcons[key]
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
                                    type="filled"
                                    shape="oval"
                                    size="2rem"
                                    background={c => c.lightest}
                                />
                                <Text
                                    color={c => c.light}
                                    mt=".5rem"
                                    children={key}
                                />
                            </Flexbox>
                        </Delay>
                    )
                })}
            </Block>
        </Flexbox>
    )
}
