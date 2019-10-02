import TextField from '@flow-ui/core/input/TextField';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '../../../plugins/UICaseBlock';
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";
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
                title="Simple case"
                subtitle={``}
                scope={{ TextField }}
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
                    `@flow-ui/core/input/TextField`,
                ]}
            />
            <UICaseBlock
                title="Mask input case"
                subtitle={``}
                scope={{ TextField }}
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
                    `@flow-ui/core/input/TextField`,
                ]}
            />
            <UICaseDocumentation ns="TextFieldTypes" />
        </Fragment>
    )
}