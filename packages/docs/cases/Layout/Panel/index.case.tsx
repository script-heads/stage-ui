import Panel from '@flow-ui/core/layout/Panel';
import React, { Fragment, useLayoutEffect, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";

export default (props: CaseProps) => {

    const PanelTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Panel"
                subtitle={`Could be use as main menu in complex apps`}
                scope={{ Panel }}
                props={{ PanelTypes }}
                children={(
                    <Panel
                        position="absolute"
                        {...PanelTypes[0]}
                    />
                )}
                paths={[
                    `@flow-ui/core/layout/Panel`,
                ]}
            />
            <UICaseDocumentation ns="PanelTypes" />
        </Fragment>
    )
}