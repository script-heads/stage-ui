import { Block, Menu, Text } from '@flow-ui/core'
import MenuTypes from '@flow-ui/core/control/Menu/types'
import * as React from 'react'
import { SidebarProps } from '.'

interface MenuSectionProps extends SidebarProps {
	menuItems: MenuTypes.Item[]
	search: string
	section: string
	setMobileVisible: (state: boolean) => void
}

const MenuSection = (props: MenuSectionProps) => {
	const { currentPage, menuItems, search, section, onChange, setMobileVisible } = props
	return (
		<Block>
			{search === '' && section != 'Index' &&
				<Text
					size="s"
					color={c => c.light}
					children={section}
					// css={{
					// 	[`@media (max-width: ${window.breakpoints[0]}px)`]: {
					// 		marginLeft: '1rem',
					// 	}
					// }}
				/>
			}
			<Menu
				mb="1rem"
				value={currentPage.url || -1}
				decoration="color"
				direction="column"
				onChange={(value) => {
					setMobileVisible(false)
					onChange(value.toString())
				}}
				items={menuItems}
			/>
		</Block>
	)
}

export default React.memo(MenuSection, (prev, next) => {
    if (prev.menuItems.length !== next.menuItems.length) {
        return false
    }
    /**
     * Only rerender if url includes in that section
     */
    for (const item of prev.menuItems) {
        if (!!(prev.currentPage.url + next.currentPage.url).match(item.value as string)) {
            return false
        }
    }
	return true
})