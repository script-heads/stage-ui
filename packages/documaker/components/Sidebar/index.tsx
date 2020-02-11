import { Block, Flexbox, Menu, Text, TextField, Header, Paragraph } from '@flow-ui/core'
import MenuTypes from '@flow-ui/core/control/Menu/types'
import { Close, Cube, Search } from '@flow-ui/core/icons'
import WhaleTypes from '@flow-ui/whale/types'
import * as React from 'react'
import { Fragment, useState } from 'react'
import { PagesType, PageType } from '../../core'
import MenuSection from './MenuSection'
import ThemeSwitcher, { ThemeSwitcherProps } from '../ThemeSwitcher'

export interface SidebarProps extends ThemeSwitcherProps {
	title?: string
	setIndex: () => void
	pages: PagesType
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
				fontWeight: '600',
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
				p="1.5rem"
				css={(theme: WhaleTypes.Theme) => ([{
					background: theme.color.surface.rgb().string()
				},{
					[`@media (max-width: ${window.breakpoints[1]}px)`]: [
						{
							position: 'absolute',
							width: '100%',
							backgroundColor: theme.color.background.rgb().string(),
							zIndex: 200,
						},
						// !visibility && {
						// 	display: 'none'
						// }
					]
				}])}>
				<Block
					m="-0.5rem" 
					p="0.5rem" 
					ml="-1.5rem" 
					pl="1.5rem" 
					// css={{ opacity: 0.4 }}
					// backgroundColor={c => c.onSurface}
					>
					<Header 
						size="s"
						weight="bold"
						// color={c => c.surface}
						css={{ cursor: 'pointer' }}
						onClick={props.setIndex}
						children={props.title}
					/>
					<Block
						css={{
							position: 'absolute',
							top: '1rem',
							right: '1rem',
							zIndex: 10
						}}
						children={(
							<ThemeSwitcher
								themes={props.themes}
								currentTheme={props.currentTheme}
								setTheme={props.setTheme}
							/>
						)}
					/>
					<Paragraph
						size="s"
						css={{ opacity: 0.5 }}
						onClick={props.setIndex}
						weight={600}
						// color={c => c.surface}
						children={'Documentation'}
					/>
				</Block>
				<TextField
					size="s"
					my="1.5rem"
					mx="-1.5rem"
					px="1.5rem"
					decoration="underline"
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
				backgroundColor={c => c.primary}
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
					color={c => c.onPrimary}
					size={'2rem'}
				/>
			</Flexbox>
		</Fragment>
	)
}

export default Sidebar