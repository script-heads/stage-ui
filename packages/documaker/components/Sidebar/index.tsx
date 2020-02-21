import { Menu, Block, Badge, Flexbox, Text, TextField, ScrollView } from '@flow-ui/core'
import { Close, Cube } from '@flow-ui/core/icons'
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
				tabIndex={0}
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
			<ScrollView mode="hidden" w="15rem" h="100vh" backgroundColor={c => c.surface}
				css={(theme: WhaleTypes.Theme) => ({
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
				<Block p="1rem">
					<Flexbox px="0.5rem" justifyContent="space-around">
						<Block flex={1}>
							<Text
								size="xl"
								weight="bold"
								css={{ cursor: 'pointer' }}
								onClick={props.setIndex}
								children={props.title}
							/>
							<Text size="xs" lineHeight="0" css={{
								verticalAlign: 'text-top',
							}} textColor={c => c.primary}>β</Text>
						</Block>
						<ThemeSwitcher
							themes={props.themes}
							currentTheme={props.currentTheme}
							setTheme={props.setTheme}
						/>
					</Flexbox>
					<TextField
						size="s"
						my="1rem 0.5rem"
						decoration="none"
						placeholder="Filter..."
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
						children={
							Object.keys(pages).map((section, index) => {
								const menuItems = getMenuItems(pages[section])
								if (menuItems.length === 0) {
									return null
								}
								return (
									<Menu.Submenu pb="l" key={index} title={section} defaultOpen={true}>
										{menuItems}
									</Menu.Submenu>
								)
							})
						}
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