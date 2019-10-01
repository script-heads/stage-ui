
import React from 'react';
import { RegisterParam } from '.';

const Param = (props: { param: RegisterParam, currentParams: { [key: string]: string | boolean }, onUpdate: () => void }) => {
    const { param, currentParams } = props;
    const { key, values } = param;

    const update = (value) => {
        currentParams[key] = value;
        if (value === 'default') {
            delete currentParams[key]
        }
        location.hash = Object.keys(currentParams).map(key => key + '=' + currentParams[key]).join('&');
        props.onUpdate();
    }
    return (
        <div style={{ display: 'flex', padding: '2px 0px', borderBottom: '1px dashed #eee', alignItems: 'center' }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#000', width: 120, cursor: 'pointer' }} onClick={() => update('default')}>{key}</div>
            <div>
                {
                    Array.isArray(values)
                        ? values.map((value, index) => (
                            <span
                                key={index}
                                style={{
                                    cursor: 'pointer',
                                    paddingLeft: '8px',
                                    fontSize: 12,
                                    color: (value === currentParams[key] || value === 'default' && !currentParams[key]) ? '#000' : '#999',
                                    fontWeight: (value === currentParams[key] || value === 'default' && !currentParams[key]) ? 'bold' : 'normal'
                                }}
                                onClick={() => {
                                    update(value)
                                }}
                                children={value}
                            />
                        ))
                        : values === 'boolean'
                            ? (
                                <input
                                    type='checkbox'
                                    //@ts-ignore
                                    checked={currentParams[key]}
                                    onChange={(event) => update(event.target.checked)}
                                />
                            )
                            : (
                                <input defaultValue={(currentParams[key] || values) as string} onChange={(e) => update(e.target.value)} />
                            )
                }
            </div>
        </div>
    )
}

export default Param;