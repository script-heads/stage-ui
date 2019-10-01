import React from 'react';
import { IPluginProps } from '../../types'

export default (props: IPluginProps) => {
    props.addPanel({
        item: {
            id: '1',
            name: 'Example',
            render: () => (
                <div style={{ margin: 20, padding: 20, background: 'red', color: 'white', borderRadius: 6 }}>Custom view</div>
            )
        }
    })
};