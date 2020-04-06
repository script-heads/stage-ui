import React from 'react'
import { Select } from '@stage-ui/core'

export default () => {
    return (
        <Select
            keepOpen
            clearable
            searchable
            multiselect
            shape="round"
            label="Fruits"
            placeholder="Please select some fruits"
            options={[
                { text: 'Apples', value: 1 },
                { text: 'Citrus', value: 2 },
                { text: 'Stone fruit', value: 3 },
                { text: 'Tropical', value: 4 },
                { text: 'Berries', value: 5 },
                { text: 'Melons', value: 6 },
            ]}
            defaultValues={[
                { text: 'Apples', value: 1 },
            ]}
        />
    )
}