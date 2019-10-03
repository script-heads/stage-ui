import Tree from '@flow-ui/core/layout/Tree';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '../../../plugins/UICaseBlock';
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";
import { C1 } from '@flow-ui/core/content/Typography';

export default (props: CaseProps) => {

    const TreeTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Tree"
                scope={{ Tree }}
                props={{ TreeTypes }}
                children={
                    <Tree {...TreeTypes[0]} label="House">
                        <Tree label="First floor">
                            <Tree label="flat 1" />
                            <Tree label="flat 2" />
                        </Tree>
                    </Tree>
                }
                paths={[
                    `@flow-ui/core/layout/Tree`,
                ]}
            />
            <UICaseBlock
                title="With custom label"
                scope={{ Tree, C1 }}
                children={
                    <Tree label={(<C1 color={c => c.primary.css()}>House</C1>)}>
                        <Tree label="First floor">
                            <Tree label="flat 1" />
                            <Tree label="flat 2" />
                        </Tree>
                    </Tree>
                }
                paths={[
                    `@flow-ui/core/layout/Tree`,
                ]}
            />
            <UICaseDocumentation ns="TreeTypes" />
        </Fragment>
    )
}