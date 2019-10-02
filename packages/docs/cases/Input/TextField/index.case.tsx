import TextField from '@flow-ui/core/input/TextField';
import React, { Fragment, useState, useMemo, useEffect } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '../../../plugins/UICaseBlock';
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";
import Block from '@flow-ui/core/layout/Block';

export const playground = (props: CaseProps) => {

    const [value, setValue] = useState<string>('');
    const [value1, setValue1] = useState<string>('');

    useEffect(() => {
        const id = setInterval(() => {
            setValue(v => v + '9')
            setValue1(v => v + '9')
        }, 5000);
        return () => clearInterval(id);
    }, [])

    console.log(value, value1);

    return (
        <Fragment>
            <Block m='2rem'>
                <TextField
                    label={'Controlled'}
                    size='xlarge'
                    placeholder='Please enter 3 digits'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    mb='2rem'
                />
                <TextField
                    label={'Uncontrolled'}
                    size='xlarge'
                    placeholder='Please enter 3 digits'
                    mb='2rem'
                />
                <TextField
                    label={'Controlled mask'}
                    placeholder='Please enter 3 digits'
                    value={value1}
                    size='xlarge'
                    onChange={e => setValue1(e.target.value)}
                    masked={{
                        mask: "+7(000)000-00-00"
                    }}
                    mb='2rem'
                />
                <TextField
                    label={'Uncontrolled mask with default value'}
                    placeholder='Please enter 3 digits'
                    defaultValue={'0'}
                    size='xlarge'
                    masked={{
                        mask: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    }}
                />
            </Block>
        </Fragment>
    )
}

export default (props: CaseProps) => {

    const TextFieldTypes = useState<any>({})
    const [value, setValue] = useState<string>('');

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
                scope={{ TextField, value, setValue }}
                props={{ TextFieldTypes }}
                interfaces={["Props", "InputProps", "TextAreaProps"]}
                children={
                    <TextField
                        label={'Digits'}
                        placeholder='Please enter 3 digits'
                        value={value}
                        onChange={(e => setValue(e.target.value))}
                        {...TextFieldTypes[0]}
                        // regExMask={/\d\d\d/}
                        mask="+7 (999) 999-99-99"
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