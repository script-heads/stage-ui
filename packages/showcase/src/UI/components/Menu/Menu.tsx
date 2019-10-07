import Block from '@flow-ui/core/layout/Block';
import Menu from '@flow-ui/core/control/Menu';
import { C2, C1 } from '@flow-ui/core/content/Typography';
import * as React from "react";
import useFlow from '@flow-ui/core/misc/hooks/useFlow';
import Flexbox from '@flow-ui/core/layout/Flexbox';

export interface MenuProps {
	cases: any,
	current: string | null
	onChange: (currentCaseID: string) => void
}

export default (props: MenuProps) => {
	const [currentCase, setCurrentCase] = React.useState(localStorage.getItem('currentCaseID') || '')
	const casesList = (cases: any) => {
		return Object.keys(cases).map(name => {

			if (typeof cases[name] === 'object') {

				if (cases[name].node) {
					return {
						css: {
							fontWeight: "700",
							paddingLeft:"0.5rem",
							minWidth: "14rem",
							borderTopLeftRadius: "10rem",
							borderBottomLeftRadius: "10rem",
						},
						value: cases[name].id,
						content: (
							<Flexbox flex={1}>
								<C1 ellipsis flex={1}>{name}</C1>
								{cases[name].tag && <Block>{cases[name].tag}</Block>}
							</Flexbox>
						)
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
							value={props.current || -1}
							decoration="filled-underline"
							direction="column"
							onChange={(value) => {
								const caseId = value.toString()
								setCurrentCase(caseId)
								props.onChange(caseId)
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