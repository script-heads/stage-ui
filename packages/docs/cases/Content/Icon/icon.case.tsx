/**
 * author: I.Trikoz
 */
import Icon from "@flow-ui/core/content/Icon";
import { C1, C2, H1 } from "@flow-ui/core/content/Typography";
import Flexbox from "@flow-ui/core/layout/Flexbox";
import * as icons from '@flow-ui/core/misc/icons';
import React, { useLayoutEffect, useState, Fragment } from "react";
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from "../../../plugins/UICaseBlock";
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";

export default (props: CaseProps) => {

	const IconTypes = useState<any>({})

	return (
		<Fragment>
			<UICaseBlock
				title="Simple case"
				scope={{ Icon }}
				props={{ IconTypes }}
				children={
					<Icon
						size={"4rem"}
						type={t => t.outline.cube}
						{...IconTypes[0]}
					/>
				}
				paths={[
					`@flow-ui/core/content/Icon`,
				]}
			/>
			<H1 pl={"4rem"}>Icon set</H1>
			<Flexbox pt='1rem'>
				<div
					style={{
						display: "grid",
						padding: "2rem",
						width: '100%',
						gridTemplateColumns: "repeat(auto-fill, 10rem)"
					}}
				>
					{Object.keys(icons.outline).map(key => (
						<Flexbox
							column
							key={key}
							p='1rem'
							justifyContent="center"
							alignItems="center"
							alignContent="center"
						>
							<Icon
								type={t => t.outline[key]}
								shape="oval"
								size="2rem"
								background={c => c.lightest.css()}
							/>
							<C1
								color={c => c.light.css()}
								mt='.5rem'
								children={key}
							/>
						</Flexbox>
					))}
				</div>
			</Flexbox>
			<UICaseDocumentation ns="IconTypes" />
		</Fragment>
	)
}
