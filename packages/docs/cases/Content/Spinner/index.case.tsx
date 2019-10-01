import Icon from '@flow-ui/core/content/Icon';
import Spinner from '@flow-ui/core/content/Spinner';
import React, { Fragment, useLayoutEffect, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '../../../plugins/UICaseBlock';
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";

export default (props: CaseProps) => {

    const SpinnerTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Simple case"
                scope={{ Spinner }}
                props={{ SpinnerTypes }}
                children={(
                    <Spinner mr='2rem' {...SpinnerTypes[0]} />
                )}
                paths={[
                    `@flow-ui/core/content/Spinner`,
                ]}
            />
            <UICaseBlock
                title="Icon spin case"
                scope={{ Spinner, Icon }}
                children={(
                    <Spinner mr='2rem' >
                        <Icon type={i => i.outline.settings} />
                    </Spinner>
                )}
                paths={[
                    `@flow-ui/core/content/Spinner`,
                ]}
            />
            <UICaseDocumentation ns="SpinnerTypes" />
        </Fragment>
    )
}