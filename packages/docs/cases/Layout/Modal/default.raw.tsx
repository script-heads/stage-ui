import React, { Fragment } from 'react';
import { Modal, Button } from '@flow-ui/core';

export default () => {
    return (
        <Fragment>
            <Modal
                title="Hello"
                subtitle="I'm modal window, please do not close me 🙄"
                // ref={fakeValue("_ref")}
            />
            <Button
                // onClick={() => _ref.current!.open()}
                children="Open up"
            />
        </Fragment>
    )
}