import { Button, dialog, Flexbox, Header, Paragraph } from '@stage-ui/core'
import { AlertTriangle } from '@stage-ui/core/icons'
import React from 'react'

export default () => {
    const Content = props => (
        <Flexbox column alignItems="center">
            <Header 
                m={0}
                color="primary"
                children="Panel"
            />
            <Paragraph
                m={0}
                color="hard"
                children="Tab outside to close"
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
                    decoration: 'panel',
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