import React, { useRef } from 'react';
import { Block, Button } from '@flow-ui/core';
import { ScrollView } from '@flow-ui/core';
import ScrollViewTypes from '@flow-ui/core/layout/ScrollView/types';

export default () => {
    const ref = useRef<ScrollViewTypes.Ref>(null)
    
    return (
        <ScrollView ref={ref}>
            {
                "Text ".repeat(200)
            }
            <Button
                onClick={() => {
                    ref.current!.scrollTop()
                }}
                children="Scroll top"
            />
        </ScrollView>
    )
}