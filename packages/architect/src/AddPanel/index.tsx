import { Block, Divider, Flexbox, Menu, TextField, useTheme } from '@flow-ui/core'
import { Grid, Layers, Search } from '@flow-ui/core/icons'
import { useState } from 'react'
import ComponentsView from './ComponentsView'
import IconsView from './IconsView'
import styles from './styles'
import { context } from '../..'

const AddPanel = () => {
    if (!context.componentLibraryOpen) {
        return null
    }
    const theme = useTheme()
    const cs = styles(theme)
    const [search, setSearch] = useState('')
   
    const [menuValue, setMenuValue] = useState(0)
    const [currentComponent, setCurrentComponent] = useState('')

    return (
        <>
            <div
                css={cs.backgroundLayer}
                onClick={() => {
                    context.tools.componentLibraryHide()
                }}
            />
            <div css={cs.container}>
                <Block h="4rem">
                    <Flexbox h="100%" alignItems="center">
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
                            direction="row"
                            pr="1rem"
                            size="s"
                            decoration="color"
                            defaultValue="components"
                            value={menuValue}
                            onChange={(index: number) => {
                                setMenuValue(index)
                            }}
                            data={[<Layers size={'1.5rem'} />, <Grid size={'1.5rem'} />]}
                        />
                    </Flexbox>
                    <Divider color={c => c.lightest} />
                </Block>
                <Flexbox h="26rem" pt="1px">
                    {menuValue === 0 && (
                        <ComponentsView
                            search={search}
                            styles={cs}
                        />
                    )}
                    {menuValue === 1 && (
                        <IconsView
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