import Viewport from "@flow-ui/core/layout/Viewport";
import React, { useRef, useState, Fragment } from "react";
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from "../../../plugins/UICaseBlock";
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";

export default (props: CaseProps) => {

    const ViewportTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Viewport"
                subtitle={`It's theme provider, you should wrap entry application`}
                scope={{ Viewport }}
                props={{ ViewportTypes }}
                children={
                    <Viewport />
                }
                paths={[
                    `@flow-ui/core/layout/Viewport`,
                ]}
            />
            <UICaseDocumentation ns="ViewportTypes" />
        </Fragment>
    )
}