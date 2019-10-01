import Menu from '@flow-ui/core/action/Menu';
import Icon from '@flow-ui/core/content/Icon';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '../../../plugins/UICaseBlock';
import UICaseDocumentation from '../../../plugins/UICaseDocumentation';

export default (props: CaseProps) => {

    const MenuTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Simple case"
                scope={{ Menu, Icon }}
                props={{ MenuTypes }}
                children={
                    <Menu
                        {...props.params}
                        {...MenuTypes[0]}
                        defaultValue={0}>
                        <span>Home</span>
                        <Icon type={(i) => i.outline.cube} />
                    </Menu>
                }
                paths={[
                    `@flow-ui/core/action/Menu`,
                ]}
            />
            <UICaseDocumentation ns="MenuTypes" />
        </Fragment>
    )
}