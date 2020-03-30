import { Button, dialog, Flexbox, Header, Paragraph } from '@flow-ui/core'
import { AlertTriangle } from '@flow-ui/core/icons'
import React from 'react'

export default () => {
    const Content = props => (
        <Flexbox column alignItems="center">
            <AlertTriangle 
                color="warning"
                size="4rem"
            />
            <Header 
                m={0}
                color="warning"
                children="Alert"
            />
            <Paragraph
                m={0}
                color="hard"
                children="Warning happened"
            />
            <Button
                mt="1rem"
                children="Dismiss"
                onClick={props.close}
            />
        </Flexbox>
    )
    
    return (
        <Button
            onClick={() => {
                dialog({
                    hideHeader: true,
                    customContent: (close) => (
                        <Content close={close} />
                    )
                })
            }}
            children="Show custom dialog"
        />
    )
}