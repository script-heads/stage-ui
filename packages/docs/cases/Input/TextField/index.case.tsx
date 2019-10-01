import TextField from '@flow-ui/core/input/TextField';
import React, { Fragment, useState, useMemo, useEffect } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '../../../plugins/UICaseBlock';
import UICaseDocumentation from "../../../plugins/UICaseDocumentation";

export default (props: CaseProps) => {

    const TextFieldTypes = useState<any>({})

    const [value, setValue] = useState<string>('');
    const [value1, setValue1] = useState<string>('');
    const [value2, setValue2] = useState<string>('');

    useEffect(() => {
        const id = setInterval(() => {
            // setValue(value + '0')
            // setValue1(value1 + '1')
            // setValue2(v => v + '2')
        }, 2000);
        return () => clearInterval(id);
    }, [])

    // console.log(value, value1, value2);

    return (
        <Fragment>
            {/* <TextField
                label={'Digits'}
                size='xlarge'
                placeholder='Please enter 3 digits'
                value={value}
                onChange={(e => setValue(e.target.value))}
            />
            <TextField
                label={'Digits'}
                placeholder='Please enter 3 digits'
                value={value1}
                size='xlarge'
                onChange={(e => setValue1(e.target.value))}
                mask={/^\d{0,3}$/}
            // mask="+7 (999) 999-99-99"
            /> */}
            <TextField
                label={'Digits'}
                placeholder='Please enter 3 digits'
                value={''}
                size='xlarge'
                // onChange={(e => setValue2(e.target.value))}
                // regExMask={/\d\d\d/}
                masked={{
                    mask: "+7(000)000-00-00"
                }}
            />
            {/* <UICaseBlock
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
            <UICaseDocumentation ns="TextFieldTypes" /> */}
        </Fragment>
    )
}