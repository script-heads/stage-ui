/**
 * author: I.Trikoz
 */
import Button from '@flow-ui/core/action/Button';
import Divider from '@flow-ui/core/content/Divider';
import Flexbox from '@flow-ui/core/layout/Flexbox';
import Modal, { ModalRef } from '@flow-ui/core/layout/Modal';
import React, { Fragment, useState, useRef } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock, { fakeValue } from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";

export default (props: CaseProps) => {

    const ModalTypes = useState<any>({})

    let _ref = useRef<ModalRef>(null);

    return (
        <Fragment>
            <UICaseBlock
                title="Modal"
                subtitle={``}
                scope={{ Modal, Divider, Flexbox, Button, _ref }}
                props={{ ModalTypes }}
                children={
                    <Fragment>
                        <Modal
                            title="Hello"
                            subtitle="I'm modal window, please do not close me 🙄"
                            {...ModalTypes[0]}
                            ref={fakeValue("_ref")}
                        />
                        <Button onClick={() => _ref.current!.open()}>Open up</Button>
                    </Fragment>
                }
                paths={[
                    `@flow-ui/core/layout/Modal`,
                ]}
            />
            <UICaseDocumentation ns="FlexboxTypes" />
        </Fragment>
    )
}