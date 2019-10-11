import { Button, Modal } from '@flow-ui/core';
import { ModalRef } from '@flow-ui/core/layout/Modal';
import React, { Fragment, useRef } from 'react';

export default () => {
    const modal = useRef<ModalRef>(null);
    return (
        <Fragment>
            <Modal
                title="Hello"
                subtitle="I'm modal window, please do not close me 🙄"
                ref={modal}
            />
            <Button
                onClick={() => modal.current!.open()}
                children="Open up"
            />
        </Fragment>
    )
}