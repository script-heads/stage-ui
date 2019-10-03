import Block from '@flow-ui/core/layout/Block';
import Menu from '@flow-ui/core/action/Menu';
import { C2 } from '@flow-ui/core/content/Typography';
import * as React from "react";
import useFlow from '@flow-ui/core/misc/hooks/useFlow';

export interface MenuProps {
	cases: any,
	onChange: (currentCaseID: string) => void
}

export default (props: MenuProps) => {
	const [currentCase, setCurrentCase] = React.useState(localStorage.getItem('currentCaseID') || '')
	const { theme } = useFlow()

	const casesList = (cases: any) => {
		return Object.keys(cases).map(name => {

			if (typeof cases[name] === 'object') {

				if (cases[name].node) {
					return {
						css: {
							fontWeight: "700",
							paddingLeft:"0.5rem"
						},
						value: cases[name].id,
						content: name
					}
				}

				return (
					<Block key={name} mt="1rem" mb="1rem">
						<C2
							ml={'1.25rem'}
							weight={500}
							color={c => c.light.css()}
							children={name}
						/>
						<Menu
							value={currentCase}
							decoration="filled-underline"
							direction="column"
							onChange={(value) => {
								setCurrentCase(value.toString());
								props.onChange(value.toString())
							}}
							//@ts-ignore
							items={casesList(cases[name]).filter(c => c != null)}
						/>
					</Block>
				);
			}
			return null
		})
	}

	return (
		<Block>
			{casesList(props.cases)}
		</Block>
	)
}