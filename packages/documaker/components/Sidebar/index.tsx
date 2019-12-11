import * as React from 'react'
import { Config, Pages, Page } from 'core'
import { Text, Menu,Block } from '@flow-ui/core'
import MenuTypes from '@flow-ui/core/control/Menu/types'

export interface SidebarProps {
	pages: Pages,
	current: string | null
	onChange: (pageId: string) => void
	config: Config
}

const Sidebar = (props: SidebarProps) => {

	const pagesMenu = []
	const separatePagesMenu = []
	
	const getMenuItems = (page: Page): MenuTypes.Item[] => 
		Object.keys(page)
			.filter(name => name != 'id')
			.map(name => ({
				css: {
					fontWeight: '700',
					paddingLeft:'0.75rem',
					minWidth: '14rem',
				},
				value: page[name].id,
				content: (
					<Text ellipsis flex={1}>{name}</Text>
				)
			}))

	Object.keys(props.pages).map(section => {
		const link = props.config.separateSections.includes(section)
			? separatePagesMenu
			: pagesMenu

		link.push(
			<Block key={section} mb="1.5rem">
				<Text
					size={2}
					ml={'1.5rem'}
					color={c => c.light.css()}
					children={section}
				/>
				<Menu 
					value={props.current || -1}
					decoration="color"
					direction="column"
					onChange={(value) => {
						const pageId = value.toString()
						props.onChange(pageId)
					}}
					items={getMenuItems(props.pages[section])}
				/>
			</Block>
		)
	})

	return (
		<Block>
			{pagesMenu}
			{separatePagesMenu}
		</Block>
	)
}

export default Sidebar