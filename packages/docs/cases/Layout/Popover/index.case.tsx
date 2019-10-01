import Popover from "@flow-ui/core/layout/Popover";
import React, { useState, Fragment } from "react";
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from "../../../plugins/UICaseBlock";
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";

export default (props: CaseProps) => {

    const PopoverTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Simple case"
                subtitle={``}
                scope={{ Popover }}
                props={{ PopoverTypes }}
                children={
                    <Popover {...PopoverTypes[0]}>
                        <a>Hello world!</a>
                    </Popover>
                }
                paths={[
                    `@flow-ui/core/layout/Popover`,
                ]}
            />
            <UICaseDocumentation ns="PopoverTypes" />
        </Fragment>
    )
}