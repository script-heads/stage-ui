import { Block, Flexbox, Menu, Text, TextField } from '@flow-ui/core'
import MenuTypes from '@flow-ui/core/control/Menu/types'
import { Close, Cube, Search } from '@flow-ui/core/icons'
import WhaleTypes from '@flow-ui/whale/types'
import * as React from 'react'
import { Fragment, useState } from 'react'
import { PagesType, PageType } from '../../core'
import MenuSection from './MenuSection'

export interface SidebarProps {
	pages: PagesType,
	currentPage: PageType
	onChange: (pageId: string) => void
	className?: string
}

const Sidebar = (props: SidebarProps) => {
	const { pages } = props
	const [visibility, setMobileVisible] = useState<boolean>(false)
	const [search, setSearch] = useState('')

	const getMenuItems = (section: PageType[]): MenuTypes.Item[] =>
		section.filter(page => {
			if (search) {
				return !!page.title.toUpperCase().match(search.toUpperCase())
			}
			return true
		}).map(page => ({
			css: {
				fontWeight: '700',
				marginLeft: '1.5rem',
				[`@media (max-width: ${window.breakpoints[0]}px)`]: {
					marginLeft: '1rem',
				}
			},
			value: page.url,
			content: (
				<Text ellipsis flex={1}>{page.title}</Text>
			)
		}))

	const VisibilityIcon = !visibility
		? Cube
		: Close
		
	return (
		<Fragment>
			<Block
				className={props.className}
				css={(theme: WhaleTypes.Theme) => ({
					[`@media (max-width: ${window.breakpoints[1]}px)`]: [
						{
							position: 'absolute',
							width: '100%',
							backgroundColor: theme.color.background.css(),
							zIndex: 200,
						},
						!visibility && {
							display: 'none'
						}
					]
				})}>

				<TextField
					size="s"
					decoration="underline"
					ml="1.5rem"
					mb="1.5rem"
					leftChild={
						<Search />
					}
					placeholder="Search"
					value={search}
					onChange={e => {
						setSearch(e.target.value)
					}}
					clearable
				/>
				{Object.keys(pages).map((section, index) => {
					if (pages[section].length) {
						const menuItems = getMenuItems(pages[section])
						if (menuItems.length === 0) {
							return null
						}
						return (
							<MenuSection 
								{...props}
								menuItems={menuItems}
								search={search}
								section={section}
								setMobileVisible={setMobileVisible}
								key={'section-' + index}
							/>
						)
					}
				})}
			</Block>
			<Flexbox
				alignItems={'center'}
				justifyContent={'center'}
				onClick={() => setMobileVisible(v => !v)}
				backgroundColor={c => c.primary.css()}
				css={[
					{
						position: 'fixed',
						width: '3.5rem',
						height: '3.5rem',
						cursor: 'pointer',
						borderRadius: '100%',
						right: '1rem',
						bottom: '1rem',
						zIndex: 210,
						[`@media (min-width: ${window.breakpoints[1]}px)`]: {
							display: 'none'
						}
					}
				]}>
				<VisibilityIcon
					color={c => c.onPrimary.css()}
					size={'2rem'}
				/>
			</Flexbox>
		</Fragment>
	)
}

export default Sidebar