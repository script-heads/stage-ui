import React from 'react'
import { Toast, Button } from '@stage-ui/core'
import { Info } from '@stage-ui/icons'

export default () => {
    return (
        <Toast 
            label="Some very important information about something"
            leftChild={<Info type="filled"/>} 
            rightChild={
                <Button 
                    decoration="outline" 
                    color="surface" 
                    size="s"
                    label="OK" 
                />
            }    
        />
    )
}