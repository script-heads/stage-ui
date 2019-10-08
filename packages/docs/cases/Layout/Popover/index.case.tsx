import Popover from "@flow-ui/core/layout/Popover";
import React, { useState, Fragment } from "react";
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from "@flow-ui/showcase/src/UI/components/UICaseBlock";
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";

export default (props: CaseProps) => {

    const PopoverTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Popover"
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