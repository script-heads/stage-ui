import Switch from '@flow-ui/core/input/Switch';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '../../../plugins/UICaseBlock';
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";

export default (props: CaseProps) => {

    const SwitchTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Switch"
                scope={{ Switch }}
                props={{ SwitchTypes }}
                children={
                    <Switch
                        label="Check me"
                        {...SwitchTypes[0]}
                    />
                }
                paths={[
                    `@flow-ui/core/input/Switch`,
                ]}
            />
            <UICaseDocumentation ns="SwitchTypes" />
        </Fragment>
    )
}