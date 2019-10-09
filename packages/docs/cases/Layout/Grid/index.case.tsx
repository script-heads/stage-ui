import Block from '@flow-ui/core/layout/Block';
import Grid from '@flow-ui/core/layout/Grid';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";

export default (props: CaseProps) => {

    const GridTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Flexbox"
                subtitle={`Just a flexbox`}
                props={{ GridTypes }}
                children={(
                    <Grid {...GridTypes[0]} templateColumns="50% 50%">
                        <Block p="2rem" m="1rem" surface="minor">Alice</Block>
                        <Block p="2rem" m="1rem" surface="minor">Bob</Block>
                        <Block p="2rem" m="1rem" surface="minor">Baker</Block>
                        <Block p="2rem" m="1rem" surface="minor">Clark</Block>
                        <Block p="2rem" m="1rem" surface="minor">Mason</Block>
                        <Block p="2rem" m="1rem" surface="minor">Smith</Block>
                    </Grid>
                )}
                paths={[
                    `@flow-ui/core/layout/Flexbox`,
                ]}
            />
            <UICaseDocumentation ns="FlexboxTypes" />
        </Fragment>
    )
}