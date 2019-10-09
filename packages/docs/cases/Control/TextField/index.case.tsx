import TextField from '@flow-ui/core/control/TextField';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";
import Block from '@flow-ui/core/layout/Block';

export const playground = (props: CaseProps) => {

    return (
        <Fragment>
            <Block>
                Hello
            </Block>
        </Fragment>
    )
}

export default (props: CaseProps) => {

    const TextFieldTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="TextField"
                subtitle={``}
                props={{ TextFieldTypes }}
                interfaces={["Props", "InputProps", "TextAreaProps", "FieldProps"]}
                children={
                    <TextField
                        label={'Label'}
                        placeholder='Placeholder'
                        {...TextFieldTypes[0]}
                    // children={{
                    //     // left: <Icon type={i => i.outline.compass}></Icon>,
                    //     // right: <Icon type={i => i.outline.edit}></Icon>,
                    // }}
                    />
                }
                paths={[
                    `@flow-ui/core/control/TextField`,
                ]}
            />
            <UICaseBlock
                title="With mask"
                subtitle={``}
                props={{ TextFieldTypes }}
                interfaces={["Props", "InputProps", "TextAreaProps"]}
                children={
                    <TextField
                        label={'Phone'}
                        placeholder='Please enter your phone'
                        {...TextFieldTypes[0]}
                        masked={{
                            mask: "+7 (000) 000-00-00"
                        }}
                    />
                }
                paths={[
                    `@flow-ui/core/control/TextField`,
                ]}
            />
            <UICaseDocumentation ns="TextFieldTypes" />
        </Fragment>
    )
}