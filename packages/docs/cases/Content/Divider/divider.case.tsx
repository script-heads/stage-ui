import React, { useLayoutEffect, useState, Fragment } from 'react'
import { CaseProps } from "../../../plugins/CaseWrapper";
import Divider from '@flow-ui/core/content/Divider'
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from '@flow-ui/showcase/src/UI/components/UICaseDocumentation';

export default (props: CaseProps) => {

    const DividerTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Divider"
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