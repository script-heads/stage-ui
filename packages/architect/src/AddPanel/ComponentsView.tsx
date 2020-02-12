import { Block, Divider, Header, ScrollView, Text } from '@flow-ui/core'
import { useState } from 'react'
import { context } from '../..'
import { AddPanelStyles } from './styles'

const ComponentsView = (props: { search: string, styles: AddPanelStyles }) => {
    
    const [currentComponent, setCurrentComponent] = useState('')

    return (
        <>
            <ScrollView size="xs" css={{ width: '15rem' }}>
                {Object.keys(context.tools.components).map(component => (
                    component.toUpperCase().match(props.search.toUpperCase()) ? (
                        context.tools.components[component].hidden === false && (
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
                                    context.tools.captured = context.tools.components[component].create()
                                    /**
                                     * Other ways drag and drop will not work
                                     */
                                    setTimeout(context.tools.componentLibraryHide)
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