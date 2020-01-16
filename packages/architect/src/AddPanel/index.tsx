import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, useTheme, Flexbox, Divider, TextField, Text, Icon, Menu, Header } from '@flow-ui/core'
import createStyles from './styles'
import { ScrollView } from '@flow-ui/lab'
import { useState } from 'react'

const AddPanel = (props: { tools: ArchitectTools }) => {
    const theme = useTheme()
    const styles = createStyles(theme)
    const { tools } = props
    const [search, setSearch] = useState('')
    const [currentComponent, setCurrentComponent] = useState('')
    
    return (
        <Block css={styles.container}>
            <Block h="4rem">
                <Flexbox h="100%">
                    <TextField
                        css={styles.searchBar}
                        decoration="none"
                        placeholder="Search"
                        value={search}
                        onChange={e => {
                            setSearch(e.target.value)
                        }}
                        leftChild={
                            <Icon
                                size={'2rem'}
                                pr="0.5rem"
                                type={i => i.outline.search}

                            />
                        }
                    />
                    <Menu
                        pr={'1rem'}
                        size="small"
                        decoration="color"
                        defaultValue="components"
                        items={[
                            {
                                content: <Icon size={'1.5rem'}
                                    type={i => i.outline.layout} />,
                                value: 'components'
                            },
                            {
                                disabled: true,
                                content: <Icon size={'1.5rem'} type={i => i.outline.grid} />,
                                value: 'icons'
                            }
                        ]}
                    />
                </Flexbox>
                <Divider color={c => c.lightest.hex()} />
            </Block>
            <Flexbox h="26rem" pt="1px">
                <ScrollView size="xsmall" css={{width: '15rem'}}>
                    {Object.keys(tools.components).map(component => (
                        component.toUpperCase().match(search.toUpperCase()) ? (
                            <Block
                                draggable
                                css={styles.component(currentComponent === component)}
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
                    { currentComponent !== '' ? (
                        <>
                            <Header>{currentComponent}</Header>
                            <Text 
                                color={c => c.light.hex()}
                                children="No description."
                            />
                        </>
                    ): (
                        <Text 
                            color={c => c.light.hex()}
                            children="Find component what you want and then Drag and Drop it to workspace"
                        />
                    )}
                    
                </Block>
            </Flexbox>
        </Block>
    )
}
export default AddPanel