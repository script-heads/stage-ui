import React, { useLayoutEffect, useState, Fragment } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '../../../plugins/UICaseBlock';
import Button from '@flow-ui/core/action/Button';
import Icon from '@flow-ui/core/content/Icon';
import { C2 } from '@flow-ui/core/content/Typography';
import Block from '@flow-ui/core/layout/Block';
import Flexbox from '@flow-ui/core/layout/Flexbox';
import UICaseDocumentation from '../../../plugins/UICaseDocumentation';

export default (props: CaseProps) => {

    const ButtonTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Button"
                scope={{ Button }}
                props={{ ButtonTypes }}
                filter={["type", "formNoValidate"]}
                customProps={[
                    {
                        name: "color",
                        values: ["#ff0000"]
                    }
                ]}
                children={
                    <Button
                        color={c => c.primary.css()}
                        {...ButtonTypes[0]}
                        children="Simple button"
                    />
                }
                paths={[
                    `@flow-ui/core/action/Button`,
                ]}
            />
            <UICaseBlock
                title="With icon"
                scope={{ Flexbox, Button, Icon }}
                children={
                    <Flexbox>
                        <Button
                            color={c => c.primary.css()}
                        >
                            <Icon size={"1rem"} pr={"0.5rem"} type={t => t.outline.compass} />
                            Compas
                        </Button>
                        <Button
                            ml={"0.5rem"}
                            color={c => c.primary.css()}
                        >
                            Next
                            <Icon size={"1rem"} pl={"0.5rem"} type={t => t.outline.arrowRight} />
                        </Button>
                    </Flexbox>
                }
                paths={[
                    `@flow-ui/core/action/Button`,
                ]}
            />
            <UICaseDocumentation ns="ButtonTypes" />
        </Fragment>
    )
}