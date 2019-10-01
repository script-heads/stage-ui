import Meter from "@flow-ui/core/data/Meter";
import React, { Fragment, useState } from "react";
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from "../../../plugins/UICaseBlock";
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";

export default (props: CaseProps) => {

    const MeterTypes = useState({});

    return (
        <Fragment>
            <UICaseBlock
                title="Simple case"
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
                title="Animated case"
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