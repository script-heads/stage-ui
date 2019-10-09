import Menu from '@flow-ui/core/control/Menu';
import Icon from '@flow-ui/core/content/Icon';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from '@flow-ui/showcase/src/UI/components/UICaseDocumentation';

export default (props: CaseProps) => {

    const MenuTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Menu"
                props={{ MenuTypes }}
                children={
                    <Menu
                        {...props.params}
                        {...MenuTypes[0]}
                        defaultValue={0}
                        items={[
                            {
                                value: 'home',
                                content: 'Home'
                            },
                            {
                                value: 'icon',
                                content: <Icon type={(i) => i.outline.cube} />
                            }
                        ]}
                    />
                }
                paths={[
                    `@flow-ui/core/control/Menu`,
                ]}
            />
            <UICaseDocumentation ns="MenuTypes" />
        </Fragment>
    )
}