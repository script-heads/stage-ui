import Badge from '@flow-ui/core/layout/Badge';
import Block from '@flow-ui/core/layout/Block';
import React, { useState, Fragment } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '../../../plugins/UICaseBlock';
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";

export default (props: CaseProps) => {

    const BadgeTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Badge"
                subtitle={`Badge wrap thier children and put on it any React Element, string or number. String and number always have round background.`}
                scope={{ Badge, Block }}
                props={{ BadgeTypes }}
                children={
                    <Badge content={'95%'} {...BadgeTypes[0]}>
                        <Block h='10rem' w='10rem' surface="minor" hoverSurface='major' />
                    </Badge>
                }
                paths={[
                    `@flow-ui/core/layout/Badge`,
                ]}
            />
            <UICaseDocumentation ns="BadgeTypes" />
        </Fragment>
    )
}