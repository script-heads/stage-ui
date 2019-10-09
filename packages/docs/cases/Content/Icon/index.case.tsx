import { Block, C1, Flexbox, H1, Icon } from '@flow-ui/core';
import * as icons from '@flow-ui/core/misc/icons';
import React, { Fragment, useState } from "react";
import code from './default.raw';

export const title = 'Icon'
export const ns = 'IconTypes'
export const cases = [
    { label: 'Default', code }
]

export default () => {
    const [open, setOpen] = useState(false)
    return (
        <Fragment>
            <Flexbox alignItems="center" justifyContent="space-between" onClick={() => setOpen(!open)}>
                <H1>Icon set</H1>
                <Icon
                    size="2rem"
                    type={t => open ? t.outline.minus : t.outline.plus}
                />
            </Flexbox>
            {open && (
                <Flexbox pt='1rem'>
                <Block
                    style={{
                        display: "grid",
                        width: '100%',
                        gridTemplateColumns: "repeat(auto-fill, 8rem)"
                    }}
                >
                    {Object.keys(icons.outline).map(key => (
                        <Flexbox
                            column
                            key={key}
                            p='1rem'
                            justifyContent="center"
                            alignItems="center"
                            alignContent="center"
                        >
                            <Icon
                                type={t => t.outline[key]}
                                shape="oval"
                                size="2rem"
                                background={c => c.lightest.css()}
                            />
                            <C1
                                color={c => c.light.css()}
                                mt='.5rem'
                                children={key}
                            />
                        </Flexbox>
                    ))}
                </Block>
            </Flexbox>
            )}
        </Fragment>
    )
}
