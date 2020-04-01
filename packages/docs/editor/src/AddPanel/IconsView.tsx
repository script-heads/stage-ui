import { ScrollView, Flexbox, Text, Block } from '@flow-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { AddPanelStyles } from './styles'
import * as IconScope from '@flow-ui/core/icons'
import { context } from '../..'

let Delay = (props) => {
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

Delay = React.memo(Delay, (pProps, nProps) => pProps.active === nProps.active)

const ComponentsView = (props: { search: string, styles: AddPanelStyles }) => {

    const [currentComponent, setCurrentComponent] = useState('')

    return (
        <Fragment>
            <ScrollView size="xs" css={{ width: '100%' }}>
                <Block
                    style={{
                        display: 'grid',
                        width: '100%',
                        gridTemplateColumns: 'repeat(auto-fill, 8rem)'
                    }}
                >
                    {Object.keys(IconScope).map((key, index) => {
                        const PreviewIcon = IconScope[key]
                        return (
                            <Delay key={key} index={index} active={currentComponent === key}>
                                <Flexbox
                                    column
                                    draggable
                                    p="1rem"
                                    justifyContent="center"
                                    alignItems="center"
                                    alignContent="center"
                                    css={props.styles.component(currentComponent === key)}
                                    onMouseDown={() => {
                                        setCurrentComponent(key)
                                    }}
                                    onDragStart={e => {
                                        e.stopPropagation()

                                        context.tools.captured = context.tools.components[key].create()
                                        /**
                                         * Other ways drag and drop will not work
                                         */
                                        setTimeout(context.tools.componentLibraryHide)
                                    }}
                                >
                                    <PreviewIcon
                                        size="2rem"
                                        color={c => c.light}
                                    />
                                    <Text
                                        size="xs"
                                        mt=".5rem"
                                        children={key}
                                    />
                                </Flexbox>
                            </Delay>
                        )
                    })}
                </Block>
            </ScrollView>
        </Fragment>
    )
}

export default ComponentsView