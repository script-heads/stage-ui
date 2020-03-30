import { Menu } from '@flow-ui/core'
import { Cube } from '@flow-ui/core/icons'
import React from 'react'

const PlaygroundMenu = () => {
    return (
        <Menu
            my="1rem"
            w="fit-content"
            defaultValue={0}
        // items={[
        //     { 
        //         value: 0, 
        //         content: 'Users' 
        //     },
        //     { 
        //         value: 1, 
        //         content: 'Places' 
        //     },
        //     { 
        //         value: 3, 
        //         content: 'Settings' 
        //     },
        //     {
        //         value: 4, 
        //         content: <Cube />
        //     }
        // ]}
        />
    )
}

export default PlaygroundMenu