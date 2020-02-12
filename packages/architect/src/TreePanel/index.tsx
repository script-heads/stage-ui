import { Block, Divider, Flexbox, Menu, ScrollView, useTheme } from '@flow-ui/core'
import { Browser, Layers, Plus } from '@flow-ui/core/icons'
import WhaleTypes from '@flow-ui/whale/types'
import { useState } from 'react'
import { context } from '../..'
import { default as LayersTab, default as PagesTab } from './layers'
import createStyles, { StyleTypes } from './styles'

export type TabProps = {
    theme: WhaleTypes.Theme
    styles: StyleTypes
}

type TabValues = 'layers' | 'pages'

const tabs = [
    
]

const ComponentTree = () => {
    const theme = useTheme()
    const styles = createStyles(theme)
    const [tab, setTab] = useState<TabValues>('layers')

    const toolBarActions = {
        onTabChange: (tab: TabValues) => setTab(tab),
    }

    return (
        <Block
            css={styles.container}
            backgroundColor={c => c.surface}
            borderColor={c => c.lightest}>
            <Flexbox justifyContent="space-between" alignItems="center" my=".5rem">
                <Menu
                    size="s"
                    ml="0.5rem"
                    decoration="color"
                    defaultValue="layers"
                    items={[
                        {
                            content: (<><Layers mr={'0.25rem'} />Layers</>),
                            value: 'layers',
                        },
                        {
                            content: (<><Browser mr={'0.25rem'} />Pages</>),
                            value: 'pages',
                        }
                    ]}
                    onChange={toolBarActions.onTabChange}
                />
                <Plus
                    mr="1rem"
                    onClick={() => {
                        context.tools.componentLibraryShow()
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
                        />
                    )}
                    {!tab || tab === 'layers' && (
                        <LayersTab
                            theme={theme}
                            styles={styles}
                        />
                    )}
                </Block>
            </ScrollView>
        </Block>
    )
}
export default ComponentTree