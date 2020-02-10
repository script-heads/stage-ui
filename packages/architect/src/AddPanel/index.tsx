import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, useTheme, Flexbox, Divider, TextField, Text, Menu, Header } from '@flow-ui/core'
import styles from './styles'
import { ScrollView } from '@flow-ui/core'
import { useState, Fragment } from 'react'
import { Search, Grid, Layers, ArrowCircleDown } from '@flow-ui/core/icons'
import ComponentsView from './ComponentsView'
import IconsView from './IconsView'

const AddPanel = (props: { tools: ArchitectTools }) => {
    const theme = useTheme()
    const cs = styles(theme)
    const { tools } = props
    const [search, setSearch] = useState('')
    const menuValues = [
        {
            content: <Layers size={'1.5rem'} />,
            value: 'components'
        },
        {
            content: <Grid size={'1.5rem'} />,
            value: 'icons'
        }
    ]
    const [menuValue, setMenuValue] = useState(menuValues[0].value)
    const [currentComponent, setCurrentComponent] = useState('')

    return (
        <>
            <div
                css={cs.backgroundLayer}
                onClick={() => {
                    props.tools.componentLibraryHide()
                }}
            />
            <div css={cs.container}>
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
                            value={menuValue}
                            onChange={(menuValue: string) => {
                                setMenuValue(menuValue)
                            }}
                            items={menuValues}
                        />
                    </Flexbox>
                    <Divider color={c => c.lightest.hex()} />
                </Block>
                <Flexbox h="26rem" pt="1px">
                    {menuValue === 'components' && (
                        <ComponentsView
                            tools={props.tools}
                            search={search}
                            styles={cs}
                        />
                    )}
                    {menuValue === 'icons' && (
                        <IconsView
                            tools={props.tools}
                            search={search}
                            styles={cs}
                        />
                    )}
                </Flexbox>
            </div>
        </>
    )
}
export default AddPanel