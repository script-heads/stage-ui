import Radio from '@flow-ui/core/control/Radio';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock, { fakeValue } from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";
import Flexbox from '@flow-ui/core/layout/Flexbox';

export default (props: CaseProps) => {

    const RadioTypes = useState<any>({})
    const [value, setValue] = useState(1)
    return (
        <Fragment>
            <UICaseBlock
                title="Radio"
                subtitle="Recommended to use with useState for control state of Radio"
                scope={{ Radio, Flexbox, setValue, value}}
                props={{ RadioTypes }}
                children={
                    <Flexbox column>
                        <Radio
                            checked={value === 1}
                            label="Winter"
                            m={"0.5rem"}
                            {...RadioTypes[0]}
                            onChange={fakeValue('() => setValue(1)')}
                        />
                        <Radio
                            checked={value === 2}
                            label="Summer"
                            m={"0.5rem"}
                            {...RadioTypes[0]}
                            onChange={fakeValue('() => setValue(2)')}
                        />
                        <Radio
                            checked={value === 3}
                            label="Spring"
                            m={"0.5rem"}
                            {...RadioTypes[0]}
                            onChange={fakeValue('() => setValue(3)')}
                        />
                    </Flexbox>
                }
                paths={[
                    `@flow-ui/core/control/Radio`,
                ]}
            />
            <UICaseDocumentation ns="RadioTypes" />
        </Fragment>
    )
}