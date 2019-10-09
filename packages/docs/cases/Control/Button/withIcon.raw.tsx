import React from 'react';
import { Button, Flexbox, Icon } from '@flow-ui/core';

export default () => {
    return (
        <Flexbox>
            <Button color={c => c.primary.css()}>
                <Icon
                    size={"1rem"}
                    pr={"0.5rem"}
                    type={t => t.outline.compass}
                />
                Compas
            </Button>
            <Button ml={"0.5rem"} color={c => c.primary.css()}>
                Next
                <Icon
                    size={"1rem"}
                    pl={"0.5rem"}
                    type={t => t.outline.arrowRight}
                />
            </Button>
        </Flexbox>
    )
}