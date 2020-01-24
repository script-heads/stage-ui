import * as React from 'react'
import { PagesType, PageType } from '../../core'
import { Text, Menu,Block, Icon, Flexbox } from '@flow-ui/core'
import MenuTypes from '@flow-ui/core/control/Menu/types'
import { Fragment, useState } from 'react'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export interface SidebarProps {
	pages: PagesType,
	currentPage: PageType
	onChange: (pageId: string) => void
	className?: string
}

const Sidebar = (props: SidebarProps) => {

	const {pages, currentPage, onChange} = props
	const [visibility, setVisibility] = useState<boolean>(false)
	
	const getMenuItems = (section: PageType[]): MenuTypes.Item[] => 
		section.map(page => ({
				css: {
					fontWeight: '700',
					paddingLeft:'0.75rem',
					[`@media (max-width: ${window.breakpoints[1]}px)`]: {
						paddingLeft:'0.25rem',
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
				css={(theme: ThemeTypes.Index)=> ({
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
				{Object.keys(pages).map((section, index) => {
					if (pages[section].length) {
						return (
							<Block key={'section-' + index} mb="1.5rem">
								{section != 'Index' && 
									<Text
										size={2}
										color={c => c.light.css()}
										children={section}
										css={{
											marginLeft:'1.5rem',
											[`@media (max-width: ${window.breakpoints[0]}px)`]: {
												marginLeft:'1rem',
											}
										}}
									/>
								}
								<Menu 
									value={currentPage.url || -1}
									decoration="color"
									direction="column"
									onChange={(value) => {
										setVisibility(false)
										onChange(value.toString())
									}}
									items={getMenuItems(pages[section])}
								/>
							</Block>
						)
					}
				})}
			</Block>
			<Flexbox
				alignItems={'center'}
				justifyContent={'center'}
				onClick={()=>setVisibility(v=>!v)}
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
					color={c=>c.onPrimary.css()} 
					size={'2rem'}
					type={i => !visibility ? i.outline.cube : i.outline.close}
				/>
			</Flexbox>
		</Fragment>
	)
}

export default Sidebar