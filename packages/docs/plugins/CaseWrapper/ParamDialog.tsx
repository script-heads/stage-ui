import React from 'react';
import { RegisterParam } from '.';
import Param from './Param';
import useForceUpdate from './useForceUpdate';

const ParamDialog = (props: { params: RegisterParam[], currentParams: { [key: string]: string | boolean }, onUpdate: () => void }) => {
    const { params, currentParams, onUpdate } = props;
    const forceUpdate = useForceUpdate()

    return (
        <div style={{
            background: 'rgb(255, 255, 255)',
            marginBottom: 10,
            padding: '10px 15px',
            borderRadius: 5,
            boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)',
        }}>
            {
                params.map((param, index) =>
                    <Param
                        key={index}
                        param={param}
                        currentParams={currentParams}
                        onUpdate={() => {
                            forceUpdate();
                            onUpdate();
                        }}
                    />
                )
            }
            {params.length === 0 && <p style={{ textAlign: 'center', color: '#bbb' }}>No props registered</p>}
        </div>
    )
}

export default ParamDialog;