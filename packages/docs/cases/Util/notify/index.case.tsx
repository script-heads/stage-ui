import Button from '@flow-ui/core/action/Button';
import Meter from '@flow-ui/core/data/Meter';
import notify from '@flow-ui/core/misc/utils/notify';
import React, { Fragment } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock, { fakeValue } from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from '@flow-ui/showcase/src/UI/components/UICaseDocumentation';
import Flexbox from '@flow-ui/core/layout/Flexbox';
import { H4 } from '@flow-ui/core/content/Typography';
import Block from '@flow-ui/core/layout/Block';

export default (props: CaseProps) => {

    return (
        <Fragment>
            <UICaseBlock
                title="Simple case"
                subtitle={`Function will create notification view in portal`}
                scope={{ Button, notify }}

                children={
                    <Button
                        onClick={fakeValue(`
                        () => {
                            notify({
                                title: "Hello",
                                message: "I'm notification displayed in right corner of your window",
                                timeout: 3000
                            })
                        }
                        `)}
                        children="Show notification"
                    />
                }
                paths={[
                    `@flow-ui/core/misc/utils/notify`,
                ]}
            />
            <UICaseBlock
                title="Custom content case"
                subtitle={`Useful when need custom notification`}
                scope={{ Button, Meter, Block, H4, notify }}

                children={
                    <Button
                        onClick={fakeValue(`
                        () => {
                            notify({
                                customContent: (
                                    <Block p="1rem" w="20rem">
                                        <H4 pb="1rem">In progress</H4>
                                        <Meter animation percent={100} />
                                    </Block>
                                ),
                                timeout: 3000
                            })
                        }
                        `)}
                        children="Show custom notification"
                    />
                }
                paths={[
                    `@flow-ui/core/misc/utils/notify`,
                ]}
            />
            <UICaseDocumentation
                ns="NotificationTypes"
                filter={["NotifyOptions"]}
                // openInterfaces={["NotifyOptions"]}
            />
        </Fragment>
    )
}