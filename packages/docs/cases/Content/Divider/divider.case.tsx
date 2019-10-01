import React, { useLayoutEffect, useState, Fragment } from 'react'
import { CaseProps } from "../../../plugins/CaseWrapper";
import Divider from '@flow-ui/core/content/Divider'
import UICaseBlock from '../../../plugins/UICaseBlock';
import UICaseDocumentation from '../../../plugins/UICaseDocumentation';

export default (props: CaseProps) => {

    const DividerTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Simple case"
                scope={{ Divider }}
                props={{ DividerTypes }}
                children={(
                    <Divider
                        {...DividerTypes[0]}
                    />
                )}
                paths={[
                    `@flow-ui/core/content/Divider`,
                ]}
            />
            <UICaseDocumentation ns="DividerTypes" />
        </Fragment>
    )
}