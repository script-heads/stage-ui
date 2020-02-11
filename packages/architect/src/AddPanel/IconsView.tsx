import { ArchitectTools } from '@flow-ui/architect/types'
import { ScrollView, Flexbox, Text, Block } from '@flow-ui/core'
import React, { useEffect, useState } from 'react'
import { AddPanelStyles } from './styles'
import * as icons from '@flow-ui/core/icons'
import components, { Init } from '../../components'

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

const ComponentsView = (props: { tools: ArchitectTools, search: string, styles: AddPanelStyles }) => {

    const { tools } = props
    const [currentComponent, setCurrentComponent] = useState('')

    return (
        <>
            <ScrollView size="xs" css={{ width: '100%' }}>
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

                                        tools.captured = tools.components[key].create()
                                        /**
                                         * Other ways drag and drop will not work
                                         */
                                        setTimeout(tools.componentLibraryHide)
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
        </>
    )
}

export default ComponentsView