import Radio from '@flow-ui/core/input/Radio';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '../../../plugins/UICaseBlock';
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";

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
                    `@flow-ui/core/input/Radio`,
                ]}
            />
            <UICaseDocumentation ns="RadioTypes" />
        </Fragment>
    )
}