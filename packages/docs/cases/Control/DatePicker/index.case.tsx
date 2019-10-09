import DatePicker from '@flow-ui/core/control/DatePicker';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";

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
                props={{ DatePickerTypes }}
                interfaces={["Props", "FieldProps"]}
                minHeight={"5rem"}
                children={
                    <DatePicker
                        {...DatePickerTypes[0]}
                        label={'Pick date'}
                    />
                }
                paths={[
                    `@flow-ui/core/control/DatePicker`,
                ]}
            />
            <UICaseDocumentation ns="DatePickerTypes" filter={["Props", "FieldProps"]} />
        </Fragment>
    )
}