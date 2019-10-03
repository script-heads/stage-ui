import Block from '@flow-ui/core/layout/Block';
import Flexbox from '@flow-ui/core/layout/Flexbox';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '../../../plugins/UICaseBlock';
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";

export default (props: CaseProps) => {

    const FlexboxTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Flexbox"
                subtitle={`Just a flexbox`}
                scope={{ Flexbox, Block }}
                props={{ FlexboxTypes }}
                children={(
                    <Flexbox {...FlexboxTypes[0]}>
                        <Block p="2rem" m="1rem" surface="minor">Alice</Block>
                        <Block p="2rem" m="1rem" surface="minor">Bob</Block>
                        <Block p="2rem" m="1rem" surface="minor">Baker</Block>
                        <Block p="2rem" m="1rem" surface="minor">Clark</Block>
                        <Block p="2rem" m="1rem" surface="minor">Mason</Block>
                        <Block p="2rem" m="1rem" surface="minor">Smith</Block>
                    </Flexbox>
                )}
                paths={[
                    `@flow-ui/core/layout/Flexbox`,
                ]}
            />
            <UICaseDocumentation ns="FlexboxTypes" />
        </Fragment>
    )
}