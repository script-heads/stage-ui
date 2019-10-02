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

	return (
		<Fragment>
			<UICaseBlock
				title="Simple case"
				subtitle={``}
				scope={{ Block, Drop, Popover, Button }}
				props={{ DropTypes }}
				children={
					<Block>
						<Drop
							{...DropTypes[0]}
							target={(
								<Button>Trigger Popup</Button>
							)}
							children={(
								<Popover>Hello world!</Popover>
							)}
						/>
					</Block>
				}
				paths={[
                    `@flow-ui/core/misc/layout/Drop`,
                ]}
			/>
			<UICaseDocumentation ns="DropTypes" />
		</Fragment>
	)
}