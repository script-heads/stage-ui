import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, useTheme, Flexbox, Divider, TextField, Text, Menu, Header } from '@flow-ui/core'
import styles from './styles'
import { ScrollView } from '@flow-ui/lab'
import { useState } from 'react'
import { Search, Grid, Layers, ArrowCircleDown } from '@flow-ui/core/icons'

const AddPanel = (props: { tools: ArchitectTools }) => {
    const theme = useTheme()
    const cs = styles(theme)
    const { tools } = props
    const [search, setSearch] = useState('')
    const [currentComponent, setCurrentComponent] = useState('')

    return (
        <>
            <div
                css={cs.backgroundLayer}
                onClick={() => {
                    props.tools.componentLibraryHide()
                }}
            />
            <Block css={cs.container}>
                <Block h="4rem">
                    <Flexbox h="100%">
                        <TextField
                            css={cs.searchBar}
                            decoration="none"
                            placeholder="Search"
                            value={search}
                            onChange={e => {
                                setSearch(e.target.value)
                            }}
                            leftChild={
                                <Search />
                            }
                        />
                        <Menu
                            pr={'1rem'}
                            size="s"
                            decoration="color"
                            defaultValue="components"
                            items={[
                                {
                                    content: <Layers size={'1.5rem'} />,
                                    value: 'components'
                                },
                                {
                                    disabled: true,
                                    content: <Grid size={'1.5rem'} />,
                                    value: 'icons'
                                }
                            ]}
                        />
                    </Flexbox>
                    <Divider color={c => c.lightest.hex()} />
                </Block>
                <Flexbox h="26rem" pt="1px">
                    <ScrollView size="xs" css={{ width: '15rem' }}>
                        
                        {Object.keys(tools.components).map(component => (
                            component.toUpperCase().match(search.toUpperCase()) ? (
                                <Block
                                    draggable
                                    css={cs.component(currentComponent === component)}
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

                            ) : null
                        ))}
                    </ScrollView>
                    <Divider vertical color={c => c.lightest.hex()} />
                    <Block p="2rem">
                        {currentComponent !== '' ? (
                            <>
                                <Header>{currentComponent}</Header>
                                <Text
                                    color={c => c.light.hex()}
                                    children="No description."
                                />
                            </>
                        ) : (
                                <Text
                                    color={c => c.light.hex()}
                                    children="Find component what you want and then Drag and Drop it to workspace"
                                />
                            )}

                    </Block>
                </Flexbox>
            </Block>
        </>
    )
}
export default AddPanel