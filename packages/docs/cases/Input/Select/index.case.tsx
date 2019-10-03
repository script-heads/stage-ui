
import Select from '@flow-ui/core/input/Select';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock, { fakeValue } from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from '@flow-ui/showcase/src/UI/components/UICaseDocumentation';

const options = [
    { text: "Gregory Oberbrunner MD", value: "greg" },
    { text: "Craig O Conner", value: "craig" },
    { text: "Annette Kshlerin", value: "ann" }
];

export default (props: CaseProps) => {

    const SelectTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Select"
                minHeight="250px"
                subtitle={``}
                scope={{ Select, options }}
                props={{ SelectTypes }}
                interfaces={["Props", "FieldProps"]}
                children={
                    <Fragment>
                        <Select
                            {...SelectTypes[0]}
                            label="Label"
                            placeholder="Placeholder"
                            options={fakeValue("options")}
                        />
                    </Fragment>
                }
                paths={[
                    `@flow-ui/core/input/Select`,
                ]}
            />
            <UICaseDocumentation ns="SelectTypes" />
        </Fragment>
    )
}