import Switch from '@flow-ui/core/control/Switch';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";

export default (props: CaseProps) => {

    const SwitchTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Switch"
                props={{ SwitchTypes }}
                children={
                    <Switch
                        label="Check me"
                        {...SwitchTypes[0]}
                    />
                }
                paths={[
                    `@flow-ui/core/control/Switch`,
                ]}
            />
            <UICaseDocumentation ns="SwitchTypes" />
        </Fragment>
    )
}