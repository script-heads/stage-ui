import Meter from "@flow-ui/core/data/Meter";
import React, { Fragment, useState } from "react";
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from "@flow-ui/showcase/src/UI/components/UICaseBlock";
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";

export default (props: CaseProps) => {

    const MeterTypes = useState({});

    return (
        <Fragment>
            <UICaseBlock
                title="Meter"
                subtitle={``}
                scope={{ Meter }}
                props={{ MeterTypes }}
                children={
                    <Meter
                        percent={35}
                        {...MeterTypes[0]}
                    />
                }
                paths={[
                    `@flow-ui/core/data/Meter`,
                ]}
            />
            <UICaseBlock
                title="With animation"
                subtitle={``}
                scope={{ Meter }}
                children={
                    <Meter
                        percent={100}
                        color={c => c.secondary.css()}
                        animation
                    />
                }
                paths={[
                    `@flow-ui/core/data/Meter`,
                ]}
            />
            <UICaseDocumentation ns="MeterTypes" />
        </Fragment>
    )
}