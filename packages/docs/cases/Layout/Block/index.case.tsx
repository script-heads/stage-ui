import Block from '@flow-ui/core/layout/Block';
import Flexbox from '@flow-ui/core/layout/Flexbox';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";

export default (props: CaseProps) => {

    const BlockTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Block"
                subtitle={`Block — minimal layout component. For example this case wrap in block.`}
                scope={{ Block }}
                props={{ BlockTypes }}
                children={
                    <Block p={"1rem"} {...BlockTypes[0]}>Hello world</Block>
                }
                paths={[
                    `@flow-ui/core/misc/layout/Block`,
                ]}
            />
            <UICaseBlock
                title="With surface"
                subtitle={`Also block can be surface.`}
                scope={{ Block }}
                children={
                    <Block
                        surface='major'
                        p='2rem'
                    />
                }
                paths={[
                    `@flow-ui/core/misc/layout/Block`,
                ]}
            />
            <UICaseBlock
                title="With hover"
                subtitle={`If we need more accent on hover element`}
                scope={{ Block, Flexbox }}
                children={
                    <Flexbox>
                        <Block
                            p='2rem'
                            mr={"1rem"}
                            surface="minor"
                            hoverSurface="major"
                        />
                        <Block
                            p='2rem'
                            mr={"1rem"}
                            surface="minor"
                            hoverSurface="major"
                        />
                        <Block
                            p='2rem'
                            mr={"1rem"}
                            surface="minor"
                            hoverSurface="major"
                        />
                    </Flexbox>
                }
                paths={[
                    `@flow-ui/core/misc/layout/Block`,
                ]}
            />
            <UICaseDocumentation ns="BlockTypes" />
        </Fragment>
    )
}