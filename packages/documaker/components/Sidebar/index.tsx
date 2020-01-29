import * as React from 'react'
import { PagesType, PageType } from '../../core'
import { Text, TextField, Menu, Block, Icon, Flexbox } from '@flow-ui/core'
import MenuTypes from '@flow-ui/core/control/Menu/types'
import { Fragment, useState } from 'react'
import WhaleTypes from '@flow-ui/whale/types'

export interface SidebarProps {
	pages: PagesType,
	currentPage: PageType
	onChange: (pageId: string) => void
	className?: string
}

const Sidebar = (props: SidebarProps) => {

	const { pages, currentPage, onChange } = props
	const [visibility, setVisibility] = useState<boolean>(false)
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
						<Icon type={t => t.outline.search} />
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
							<Block key={'section-' + index}>
								{search === '' && section != 'Index' &&
									<Text
										color={c => c.light.css()}
										children={section}
										css={{
											marginLeft: '1.5rem',
											[`@media (max-width: ${window.breakpoints[0]}px)`]: {
												marginLeft: '1rem',
											}
										}}
									/>
								}
								<Menu
									mb="1.5rem"
									value={currentPage.url || -1}
									decoration="color"
									direction="column"
									onChange={(value) => {
										setVisibility(false)
										onChange(value.toString())
									}}
									items={menuItems}
								/>
							</Block>
						)
					}
				})}
			</Block>
			<Flexbox
				alignItems={'center'}
				justifyContent={'center'}
				onClick={() => setVisibility(v => !v)}
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
				<Icon
					color={c => c.onPrimary.css()}
					size={'2rem'}
					type={i => !visibility ? i.outline.cube : i.outline.close}
				/>
			</Flexbox>
		</Fragment>
	)
}

export default Sidebar