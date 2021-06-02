import React from 'react'
import { Table, notify } from '@stage-ui/core'

export default () => {

    return (
        <Table
            onChange={(data) => {
                notify({
                    title: 'Row chage event',
                    message: JSON.stringify(data),
                    timeout: 3000,
                })
            }}
            columns={[
                {
                    key: 'color',
                    title: 'Color',
                },
                {
                    key: '',
                    dnd: (source, target, data) => {
                        notify({
                            title: 'Row dnd event fired',
                            message: `Row ${source} moved to ${target}`,
                            timeout: 3000,
                        })
                    },
                },
            ]}
            data={[
                { color: 'Green' },
                { color: 'Yellow' },
                { color: 'Red' },
            ]}
        />
    )
}