import React, { Fragment, useRef } from 'react';
import { Modal, Button } from '@flow-ui/core';

export default () => {
    
    const modal = useRef()

    return (
        <Fragment>
            <Modal
                title="Hello"
                subtitle="I'm modal window, please do not close me 🙄"
                ref={modal}
            />
            <Button
                onClick={() => modal.current.open()}
                children="Open up"
            />
        </Fragment>
    )
}