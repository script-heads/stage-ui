import DatePicker from '@flow-ui/core/control/DatePicker';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";
import Block from '@flow-ui/core/layout/Block';

export const playground = () => {

    return (
        <div>
            <DatePicker
                label={'Pick date'}
            />
        </div>
    )
}

export default (props: CaseProps) => {

    const DatePickerTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="DatePicker"
                subtitle={``}
                scope={{ DatePicker }}
                props={{ DatePickerTypes }}
                minHeight={"5rem"}
                // interfaces={["Props", "InputProps", "TextAreaProps", "FieldProps"]}
                children={
                    <DatePicker
                        label={'Pick date'}
                    />
                }
                paths={[
                    `@flow-ui/core/control/DatePicker`,
                ]}
            />
            <UICaseDocumentation ns="DatePickerTypes" />
        </Fragment>
    )
}