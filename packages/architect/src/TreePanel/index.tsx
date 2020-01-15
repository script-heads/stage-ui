import { ArchitectItem, ArchitectTools } from '@flow-ui/architect/types'
import { Block, Flexbox, Text, Tree, useFlow, Divider, Menu, Icon, Paragraph } from '@flow-ui/core'
import { ScrollView } from '@flow-ui/lab'
import createStyles from './styles'

const ComponentTree = (props: { tools: ArchitectTools }) => {
    const { theme } = useFlow()
    const styles = createStyles(theme)
    const { tools } = props

    const renderTree = (items: ArchitectItem[]) => {
        return items.map(item => {
            let name = item.component
            if (item.name) {
                name = `${item.name}`
            } 
            if (item.text) {
                name += ` (${item.text})`
            } else if (item.props?.label) {
                name += ` (${item.props.label})`
            } else if (item.props?.placeholder) {
                name += ` (${item.props.placeholder})`
            }
            
            const isFocused = tools.focused?.id === item.id
            
            return (
                <Tree
                    defaultOpen
                    key={item.id}
                    label={(
                        <Text 
                            lineHeight={1} 
                            size={2} 
                            weight={500} 
                            children={name}
                            draggable
                            flex={1}
                            css={styles.item(isFocused)}
                            onDragStart={(e) => {
                                e.stopPropagation()
                                tools.captured = item
                            }}
                            onDragOver={(e) => {
                                e.stopPropagation()
                                e.preventDefault()
                                tools.target = item
                            }}
                            onDragLeave={(e) => {
                                e.stopPropagation()
                            }}
                            onDrop={(e) => {
                                e.stopPropagation()
                                tools.move()
                            }}
                            onClick={(e) => {
                                e.stopPropagation()
                                e.preventDefault()
                                if (!isFocused) {
                                    tools.focused = item
                                    tools.update()
                                }
                            }}
                        />
                    )}
                    children={item.children && renderTree(item.children)}
                />
            )
        })
    }
    
    return (
        <Block
            onDragOver={(e) => {
                e.stopPropagation()
                e.preventDefault()
            }}
            onDrop={(e) => {
                e.stopPropagation()
                tools.move()
            }} 
            css={styles.container}
            backgroundColor={c=>c.surface.css()}
            borderColor={c=>c.lightest.css()}>
            <Flexbox justifyContent="space-between" alignItems="center" my=".5rem">
                <Menu
                    px="1rem"
                    size="small"
                    decoration="color"
                    defaultValue="layers"
                    items={[
                        {content: 'Layers',value:'layers'},
                        {content: 'Pages',value:'pages'}
                    ]}
                />
                <Icon
                    mr="1rem"
                    type={i=>i.outline.plus}
                    onClick={() => {
                        tools.componentLibraryShow()
                    }}
                />
            </Flexbox>
            <Divider w="unset"/>
            <ScrollView size="xsmall" css={styles.scrollView}>
                <Block css={styles.scrollContainer}>
                    {
                        tools.getItems().length === 0 && (
                            <Paragraph
                                align="center"
                                pt="2rem"
                                size={2}
                                color={c => c.light.hex()}
                                children="Component tree"
                            />
                        )
                    }
                    {
                        renderTree(tools.getItems())
                    }
                </Block>
            </ScrollView>
        </Block>
    )
}
export default ComponentTree