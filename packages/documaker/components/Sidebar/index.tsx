import { Menu, Block, Flexbox, Text, TextField } from '@flow-ui/core'
import { Close, Cube, Search } from '@flow-ui/core/icons'
import WhaleTypes from '@flow-ui/whale/types'
import * as React from 'react'
import { Fragment, useState } from 'react'
import { PagesType, PageType } from '../../core'
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

	const getMenuItems = (section: PageType[]) =>
		section.filter(page => {
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

	const VisibilityIcon = !visibility
		? Cube
		: Close

	return (
		<Fragment>
			<Block
				p="1.5rem"
				css={(theme: WhaleTypes.Theme) => ([{
					boxSizing: 'border-box',
					background: theme.color.surface.rgb().string()
				}, {
					[`@media (max-width: ${window.breakpoints[1]}px)`]: [
						{
							position: 'absolute',
							width: '100%',
							backgroundColor: theme.color.background.rgb().string(),
							zIndex: 200,
						},
						!visibility && {
							display: 'none'
						}
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
					<Block>
						<Text 
							size="xl"
							weight="bold"
							// color={c => c.surface}
							css={{ cursor: 'pointer' }}
							onClick={props.setIndex}
							children={props.title}
						/>
					</Block>
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
					<Text
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
				<Menu 
					mx="-1.5rem"
					decoration="marker"
					value={props.currentPage.url}
					onChange={value => {
						if (typeof value === 'string') {
							props.onChange(value)
						}
					}}
					children={
						Object.keys(pages).map((section, index) => {
							const menuItems = getMenuItems(pages[section])
							if (menuItems.length === 0) {
								return null
							}
							return (
								<Menu.Group pb="l" key={index} title={section}>
									{menuItems}
								</Menu.Group>
							)
						})
					}
				/>
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