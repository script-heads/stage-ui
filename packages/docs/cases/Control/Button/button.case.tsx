import Button from '@flow-ui/core/control/Button';
import Icon from '@flow-ui/core/content/Icon';
import Flexbox from '@flow-ui/core/layout/Flexbox';
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from '@flow-ui/showcase/src/UI/components/UICaseDocumentation';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";

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
                    `@flow-ui/core/control/Button`,
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
                    `@flow-ui/core/control/Button`,
                ]}
            />
            <UICaseDocumentation ns="ButtonTypes" />
        </Fragment>
    )
}