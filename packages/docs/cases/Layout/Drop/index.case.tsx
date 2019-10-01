import Button from "@flow-ui/core/action/Button";
import Block from "@flow-ui/core/layout/Block";
import Drop from "@flow-ui/core/layout/Drop";
import Popover from "@flow-ui/core/layout/Popover";
import React, { useLayoutEffect, useRef, useState, Fragment } from "react";
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";
import UICaseBlock, { fakeValue } from "../../../plugins/UICaseBlock";

export default (props: CaseProps) => {

	const DropTypes = useState<any>({})

	let _ref = useRef(null)
	return (
		<Fragment>
			<Block>
				<Button ref={_ref}>Trigger Popup</Button>
				{_ref && <Drop {...DropTypes[0]} target={_ref} align='bottom'>
					<Popover>
						<a>Hello world!</a>
					</Popover>
				</Drop>}
			</Block>
			{/* <UICaseBlock
				title="Simple case"
				subtitle={``}
				scope={{ Block, Drop, Popover, Button, _ref }}
				props={{ DropTypes }}
				children={
					<Block>
						<Button ref={fakeValue("_ref")}>Trigger Popup</Button>
						<Drop {...DropTypes[0]} target={fakeValue("_ref")}>
							<Popover>
								<a>Hello world!</a>
							</Popover>
						</Drop>
					</Block>
				}
			/> */}
			<UICaseDocumentation ns="DropTypes" />
		</Fragment>
	)
}