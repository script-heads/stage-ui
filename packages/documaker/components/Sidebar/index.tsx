import { Text } from '@flow-ui/core'
import Menu from '@flow-ui/core/control/Menu'
import Block from '@flow-ui/core/layout/Block'
import * as React from 'react'
import MenuTypes from '@flow-ui/core/control/Menu/types'
import { IConfig } from 'core'

export interface SidebarProps {
	cases: any,
	current: string | null
	onChange: (currentCaseID: string) => void
	config: IConfig
}

const Sidebar = (props: SidebarProps) => {
	const casesList = (cases: any) => {
		return Object.keys(cases).map(name => {

			if (typeof cases[name] === 'object') {

				if (cases[name].title) {
					return {
						css: {
							fontWeight: '700',
							paddingLeft:'0.75rem',
							minWidth: '14rem',
						},
						value: cases[name].id,
						content: (
							<Text ellipsis flex={1}>{name}</Text>
						)
					}
				}

				return (
					<Block key={name} mb="1.5rem">
						<Text
							size={2}
							ml={'1.5rem'}
							color={c => c.light.css()}
							children={name}
						/>
						<Menu 
							value={props.current || -1}
							decoration="color"
							direction="column"
							onChange={(value) => {
								const caseId = value.toString()
								props.onChange(caseId)
							}}
							items={casesList(cases[name]).filter(c => c != null) as MenuTypes.Item[]}
						/>
					</Block>
				)
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

export default Sidebar