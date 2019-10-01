import Range from '@flow-ui/core/input/Range';
import React, { useState, Fragment } from 'react';
import { CaseProps } from '../../../plugins/CaseWrapper';
import UICaseBlock from '../../../plugins/UICaseBlock';
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";

export default (props: CaseProps) => {

    const RangeTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Simple case"
                subtitle={``}
                scope={{ Range }}
                props={{ RangeTypes }}
                children={(
                    <Range
                        min={0}
                        max={100}
                        defaultValue={35}
                        {...RangeTypes[0]}
                    />
                )}
                paths={[
                    `@flow-ui/core/input/Range`,
                ]}
            />
            <UICaseDocumentation ns="RangeTypes" />
        </Fragment>
    )
}