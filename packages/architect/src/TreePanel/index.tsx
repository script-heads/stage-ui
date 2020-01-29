import { ArchitectItem, ArchitectTools } from '@flow-ui/architect/types'
import { Block, Flexbox, Text, Tree, useTheme, Divider, Menu, Icon, Paragraph } from '@flow-ui/core'
import { ScrollView } from '@flow-ui/lab'
import createStyles, { StyleTypes } from './styles'
import { useState } from 'react'
import WhaleTypes from '@flow-ui/whale/types'
import PagesTab from './layers'
import LayersTab from './layers'

export type TabProps = {
    theme: WhaleTypes.Theme
    tools: ArchitectTools
    styles: StyleTypes
}

type TabValues = 'layers' | 'pages'

const tabs = [
    
]

const ComponentTree = (props: { tools: ArchitectTools }) => {
    const theme = useTheme()
    const styles = createStyles(theme)
    const [tab, setTab] = useState<TabValues>('layers')

    const { tools } = props

    const toolBarActions = {
        onTabChange: (tab: TabValues) => setTab(tab),
    }

    return (
        <Block
            // onDragOver={(e) => {
            //     e.stopPropagation()
            //     e.preventDefault()
            // }}
            // onDrop={(e) => {
            //     e.stopPropagation()
            //     tools.move()
            // }}
            css={styles.container}
            backgroundColor={c => c.surface.css()}
            borderColor={c => c.lightest.css()}>
            <Flexbox justifyContent="space-between" alignItems="center" my=".5rem">
                <Menu
                    px="1rem"
                    size="s"
                    decoration="color"
                    defaultValue="layers"
                    items={[
                        {
                            content: (<><Icon mx={'0.25rem'} type={t => t.outline.layers}/>Layers</>),
                            value: 'layers',
                        },
                        { 
                            content: (<><Icon mx={'0.25rem'} type={t => t.outline.browser}/>Pages</>),
                            value: 'pages',
                        }
                    ]}
                    onChange={toolBarActions.onTabChange}
                />
                <Icon
                    mr="1rem"
                    type={i => i.outline.plus}
                    onClick={() => {
                        tools.componentLibraryShow()
                    }}
                />
            </Flexbox>
            <Divider w="unset" />
            <ScrollView size="xs" css={styles.scrollView}>
                <Block css={styles.scrollContainer}>
                    {tab === 'pages' && (
                        <PagesTab
                            theme={theme}
                            styles={styles}
                            tools={tools}
                        />
                    )}
                    {!tab || tab === 'layers' && (
                        <LayersTab
                            theme={theme}
                            styles={styles}
                            tools={tools}
                        />
                    )}
                </Block>
            </ScrollView>
        </Block>
    )
}
export default ComponentTree