import { Button, DatePicker, Divider, Flexbox, Select, TextField } from '@flow-ui/core'
import { Funnel, Refresh, Search } from '@flow-ui/core/icons'
import React from 'react'

const PlaygroundToolbar = () => {
    return (
        <Flexbox p="1rem" mb="0.5rem" decoration="surface">
            <TextField
                flex={3}
                leftChild={<Search />}
                rightChild={
                    <Button size="xs"><Funnel/> Filter</Button>
                }
                placeholder="Search"
            />
            <Select
                flex={1}
                ml="0.5rem"
                clearable
                searchable
                multiselect
                placeholder="Please select type"
                options={[
                    { text: 'Man', value: 1 },
                    { text: 'Woman', value: 2 },
                    { text: 'Others', value: 3 },
                ]}
                defaultValues={[
                    { text: 'Man', value: 1 },
                ]}
            />
            <DatePicker
                flex={1}
                ml="0.5rem"
            />
            <Divider vertical mx="0.5rem" h="2.5rem" />
            <Button decoration="text"><Refresh/> Reload</Button>
        </Flexbox>
    )
}

export default PlaygroundToolbar