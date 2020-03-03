import { Block, Flexbox, Text, Link } from '@flow-ui/core'
import ThemeSwitcher, { ThemeSwitcherProps } from '../ThemeSwitcher'
import { Github } from '@flow-ui/core/icons'

export interface MenuProps extends ThemeSwitcherProps {
	title?: string
	git?: string
	setIndex: () => void
}

const Menu = (props: MenuProps) => {

	return (
		<Flexbox 
			px="1.5rem"
			h="3rem" 
			justifyContent="space-around" 
			alignItems="center"
			css={t=>({
				position: 'fixed', 
				zIndex: 1, 
				top: 0, 
				right: 0, 
				left: 0, 
				background: t.color.surface.alpha(.95).rgb().string()
			})}>
			<Block flex={1}>
				<Text
					size="xl"
					weight="bold"
					css={{ cursor: 'pointer' }}
					onClick={props.setIndex}
					children={props.title}
				/>
				<Text 
					size="xs" 
					lineHeight="0"
					textColor={c => c.primary} 
					css={{
						verticalAlign: 'text-top',
						
					}}
					children="β"
				/>
			</Block>
			<Flexbox>
				<ThemeSwitcher
					themes={props.themes}
					currentTheme={props.currentTheme}
					setTheme={props.setTheme}
				/>
				{props.git && <Link target="_blank" href={props.git} ml="1rem">
					<Github size="1.5rem" />
				</Link>}
			</Flexbox>
		</Flexbox>
	)
}

export default Menu