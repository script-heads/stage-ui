import Radio from '@flow-ui/core/control/Radio';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";

export default (props: CaseProps) => {

    const RadioTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Radio"
                scope={{ Radio }}
                props={{ RadioTypes }}
                children={
                    <Radio
                        label="Check me"
                        {...RadioTypes[0]}
                    />
                }
                paths={[
                    `@flow-ui/core/control/Radio`,
                ]}
            />
            <UICaseDocumentation ns="RadioTypes" />
        </Fragment>
    )
}