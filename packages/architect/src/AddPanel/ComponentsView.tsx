import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, Divider, Header, ScrollView, Text, useTheme } from '@flow-ui/core'
import { useState } from 'react'
import styles, { AddPanelStyles } from './styles'

const ComponentsView = (props: { tools: ArchitectTools, search: string, styles: AddPanelStyles }) => {
    
    const { tools } = props
    const [currentComponent, setCurrentComponent] = useState('')

    return (
        <>
            <ScrollView size="xs" css={{ width: '15rem' }}>
                {Object.keys(tools.components).map(component => (
                    component.toUpperCase().match(props.search.toUpperCase()) ? (
                        tools.components[component].hidden === false && (
                            <div
                                draggable
                                css={props.styles.component(currentComponent === component)}
                                key={component}
                                children={component}
                                onMouseDown={() => {
                                    setCurrentComponent(component)
                                }}
                                onDragStart={e => {
                                    e.stopPropagation()
                                    tools.captured = tools.components[component].create()
                                    /**
                                     * Other ways drag and drop will not work
                                     */
                                    setTimeout(tools.componentLibraryHide)
                                }}
                            />
                        )
                    ) : null
                ))}
            </ScrollView>
            <Divider vertical color={c => c.lightest} />
            <Block p="2rem">
                {currentComponent !== '' ? (
                    <>
                        <Header>{currentComponent}</Header>
                        <Text
                            color={c => c.light}
                            children="No description."
                        />
                    </>
                ) : (
                        <Text
                            color={c => c.light}
                            children="Find component what you want and then Drag and Drop it to workspace"
                        />
                    )}

            </Block>
        </>
    )
}
export default ComponentsView