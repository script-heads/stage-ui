import Checkbox from '@flow-ui/core/input/Checkbox';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '../../../plugins/UICaseBlock';
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";

export default (props: CaseProps) => {

    const CheckboxTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Checkbox"
                scope={{ Checkbox }}
                props={{ CheckboxTypes }}
                children={
                    <Checkbox
                        label="Check me"
                        {...CheckboxTypes[0]}
                    />
                }
                paths={[
                    `@flow-ui/core/input/Checkbox`,
                ]}
            />
            <UICaseDocumentation ns="CheckboxTypes" />
        </Fragment>
    )
}