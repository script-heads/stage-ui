import Block from '@flow-ui/core/layout/Block';
import Menu from '@flow-ui/core/action/Menu';
import { C2 } from '@flow-ui/core/content/Typography';
import * as React from "react";
import useFlow from '@flow-ui/core/misc/hooks/useFlow';

export interface MenuProps {
	cases: any,
	onChange: (currentCase: React.ReactNode, currentCaseID: string) => void
}

export default (props: MenuProps) => {
	const [currentCase, setCurrentCase] = React.useState(localStorage.getItem('currentCaseID') || '')
	const { theme } = useFlow()

	const casesList = (cases: any) => {
		return Object.keys(cases).map(name => {
			if (typeof cases[name] === 'object') {
				if (cases[name].node) {
					return (
						<Block
							flex={1}
							key={name}
							onClick={() => {
								const c = cases[name]
								props.onChange(c.node, c.id)
								setCurrentCase(c.id);
							}}
							children={
								<C2>{name}</C2>
							}
						/>
					)
				}
				
				let counter = 0
				let index = -1

				for (let cname of Object.keys(cases[name])) {
					const child = cases[name][cname];
					if (child.node) {
						counter++;
						if (child.id === currentCase) {
							index = counter
							break;
						}
					}
				}

				return (
					<Block key={name} m="1rem">
						<C2 
							// ml={'0.75rem'}
							weight={500} 
							color={c => c.light.css()}
							children={name}
						/>
						<Menu
							value={index} 
							decoration="color"
							direction="column">
							{casesList(cases[name])}
						</Menu>
					</Block>
				);
			}
			return null
		})
	}

	return (
		<Block css={{
			marginTop:"1rem",
			borderTopRightRadius: theme.radius.default,
			borderBottomRightRadius: theme.radius.default,
			borderRight: `1px solid ${theme.color.lightest.css()}`,
			borderBottom: `1px solid ${theme.color.lightest.css()}`,
			borderTop: `1px solid ${theme.color.lightest.css()}`,
			background: theme.color.surface.css(),
		}}>
			{casesList(props.cases)}
		</Block>
	)
}