/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Block, Text, Grid, Button, Drop, Flexbox, Menu, ScrollView, Text, TextField, useTheme } from '@stage-ui/core'
import { Close, Cube, Search } from '@stage-ui/icons'
import { Fragment, useMemo, useRef, useState } from 'react'
import { PagesType, PageType } from '../../utils/core'

export interface SidebarProps {
  pages: PagesType
  currentPage: PageType
  onChange: (pageId: string) => void
  className?: string
}

const TopBar = (props: SidebarProps) => {
  const { pages } = props
  const targetRef = useRef(null)
  const [items, setItems] = useState(null)

  const menuItems = Object.keys(pages).map((label) => {
    return (
      <Button
        size="s"
        color={(c) => c.hard}
        decoration="text"
        key={label}
        label={label}
        onClick={() => {
          setItems(
            pages[label].map((item) => {
              return (
                <Button
                  color="onSurface"
                  decoration="text"
                  css={{
                    maxWidth: '10rem',
                    whiteSpace: 'wrap',
                    textAlign: 'inherit',
                  }}
                  key={item.title}
                  onClick={() => {
                    props.onChange(item.url)
                  }}
                >
                  <Flexbox column alignItems="flex-start" py="m">
                    <Text weight="600">{item.title}</Text>
                    <Text size="xs" color="light">
                      {item.subtitle}
                    </Text>
                  </Flexbox>
                </Button>
              )
            }),
          )
        }}
      />
    )
  })

  // if (menuItems.length === 0) {
  //     return null
  // }
  // return (
  //     <Menu.Submenu
  //         title={(
  //             <Text size="xs" weight="bold" color="light">{section}</Text>
  //         )}
  //         pb="l"
  //         key={index}
  //         defaultOpen={true}
  //         children={menuItems}
  //     />
  // )

  return (
    <Flexbox ref={targetRef}>
      <Drop target={targetRef} visible={!!items} justify="start">
        <Grid templateColumns="repeat(3, 1fr)" decoration="mediumShadow" p="m">
          {items}
        </Grid>
      </Drop>
      {menuItems}
    </Flexbox>
  )
}

export default TopBar
