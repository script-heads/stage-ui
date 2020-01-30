import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, Divider, Flexbox, Menu, useTheme } from '@flow-ui/core'
import { Browser, Layers, Plus } from '@flow-ui/core/icons'
import { ScrollView } from '@flow-ui/lab'
import WhaleTypes from '@flow-ui/whale/types'
import { useState } from 'react'
import { default as LayersTab, default as PagesTab } from './layers'
import createStyles, { StyleTypes } from './styles'

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
                            content: (<><Layers mx={'0.25rem'} />Layers</>),
                            value: 'layers',
                        },
                        { 
                            content: (<><Browser mx={'0.25rem'} />Pages</>),
                            value: 'pages',
                        }
                    ]}
                    onChange={toolBarActions.onTabChange}
                />
                <Plus
                    mr="1rem"
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