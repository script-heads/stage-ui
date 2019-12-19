import * as React from 'react'
import { Pages, Page } from 'core'
import { Text, Menu,Block } from '@flow-ui/core'
import MenuTypes from '@flow-ui/core/control/Menu/types'

export interface SidebarProps {
	pages: Pages,
	current: string | null
	onChange: (pageId: string) => void
}

const Sidebar = (props: SidebarProps) => {

	const {pages, current, onChange} = props
	
	const getMenuItems = (section: Page[]): MenuTypes.Item[] => 
		section.map(page => ({
				css: {
					fontWeight: '700',
					paddingLeft:'0.75rem',
					minWidth: '14rem',
				},
				value: page.id,
				content: (
					<Text ellipsis flex={1}>{page.title}</Text>
				)
			}))

	return (
		<Block>
			{Object.keys(pages).map((section, index) => {
				if (pages[section].length) {
					return (
						<Block key={'section-' + index} mb="1.5rem">
							{section != 'Index' && 
								<Text
									size={2}
									ml={'1.5rem'}
									color={c => c.light.css()}
									children={section}
								/>
							}
							<Menu 
								value={current || -1}
								decoration="color"
								direction="column"
								onChange={(value) => {
									const pageId = value.toString()
									onChange(pageId)
								}}
								items={getMenuItems(pages[section])}
							/>
						</Block>
					)
				}
			})}
		</Block>
	)
}

export default Sidebar