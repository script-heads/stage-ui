import { Menu, Block, Flexbox, TextField, ScrollView } from '@stage-ui/core'
import { Close, Cube, Search } from '@stage-ui/core/icons'
import SystemTypes from '@stage-ui/system/types'
import * as React from 'react'
import { Fragment, useState } from 'react'
import { PagesType, PageType } from '../../utils/core'
import { useMemo } from 'react'

export interface SidebarProps {
    pages: PagesType
    currentPage: PageType
    onChange: (pageId: string) => void
    className?: string
}

const Sidebar = (props: SidebarProps) => {
    const { pages } = props
    const [visibility, setMobileVisible] = useState<boolean>(false)
    const [search, setSearch] = useState('')

    const VisibilityIcon = !visibility
        ? Cube
        : Close

    const MenuItems = useMemo(() =>
        Object.keys(pages).map((section, index) => {
            const menuItems = pages[section].filter(page => {

                if (search) {
                    return !!page.title.toUpperCase().match(search.toUpperCase())
                }
                return true
            }).map(page => (
                <Menu.Item
                    style={{
                        fontWeight: 'bold'
                    }}
                    key={page.url}
                    value={page.url}
                    title={page.title}
                />
            ))
            if (menuItems.length === 0) {
                return null
            }
            return (
                <Menu.Submenu pb="l" key={index} title={section} defaultOpen={true}>
                    {menuItems}
                </Menu.Submenu>
            )
        }), [pages, search]
    )

    return (
        <Fragment>
            <ScrollView mode="hidden" w="15rem" h="100vh" backgroundColor={c => c.surface}
                css={(theme: SystemTypes.Theme) => ({
                    [`@media (max-width: ${theme.breakpoints[2]})`]: [
                        {
                            position: 'absolute',
                            width: '100%',
                            zIndex: 200,
                        },
                        !visibility && {
                            display: 'none'
                        }
                    ]
                })}>
                <Block p="3rem 1rem 0 1rem">
                    <TextField
                        size="s"
                        mb=".5rem"
                        rightChild={<Search />}
                        decoration="none"
                        placeholder="Filter"
                        value={search}
                        onChange={e => {
                            setSearch(e.target.value)
                        }}
                    />
                    <Menu
                        column
                        mx="-0.5rem"
                        decoration="marker"
                        shape="round"
                        defaultValue={props.currentPage.url}
                        onChange={value => {
                            if (typeof value === 'string') {
                                props.onChange(value)
                                setMobileVisible(false)
                            }
                        }}
                        children={MenuItems}
                    />
                </Block>
            </ScrollView>
            <Flexbox
                alignItems={'center'}
                justifyContent={'center'}
                onClick={() => setMobileVisible(v => !v)}
                backgroundColor={c => c.primary}
                css={(theme) => [
                    {
                        position: 'fixed',
                        width: '3.5rem',
                        height: '3.5rem',
                        cursor: 'pointer',
                        borderRadius: '100%',
                        right: '1rem',
                        bottom: '1rem',
                        zIndex: 210,
                        [`@media (min-width: ${theme.breakpoints[2]})`]: {
                            display: 'none'
                        }
                    }
                ]}>
                <VisibilityIcon
                    color={c => c.onPrimary}
                    size={'2rem'}
                />
            </Flexbox>
        </Fragment>
    )
}

export default Sidebar