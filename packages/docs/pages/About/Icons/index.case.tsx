import { Block, Flexbox, Header, Text } from '@flow-ui/core'
import { ScrollView } from '@flow-ui/lab'
import * as icons from '@flow-ui/core/icons'
import { Minus, Plus } from '@flow-ui/core/icons'
import React, { Fragment, useState } from 'react'
import code from './default.raw'

export const title = 'Icons collection'
export const ns = 'IconTypes'
export const cases = [
    { label: 'Basic', code }
]

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
            <ScrollView h={"400px"}>
                {
                    Array(1000).fill('').map((_, i) => (
                        <div key={i}>{i}</div>
                    ))
                }
            </ScrollView>
            {open && (
                <Flexbox pt="1rem">
                <Block
                    style={{
                        display: 'grid',
                        width: '100%',
                        gridTemplateColumns: 'repeat(auto-fill, 8rem)'
                    }}
                >
                    {Object.keys(icons).map(key => {
                        const PreviewIcon = icons[key]
                        return (
                            <Flexbox
                                column
                                key={key}
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
                        )
                    })}
                </Block>
            </Flexbox>
            )}
        </Fragment>
    )
}
