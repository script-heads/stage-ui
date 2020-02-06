import { Button, dialog, Divider, Header, Block, Paragraph, Flexbox } from '@flow-ui/core'
import * as Icon from '@flow-ui/core/icons'
import React from 'react'

export default () => {
    const Content = props => (
        <Flexbox column alignItems="center">
            <Icon.AlertTriangle 
                color={c => c.warning.css()}
                size="4rem"
            />
            <Header 
                color={c => c.warning.css()}
                children="Alert"
            />
            <Paragraph
                color={c => c.hard.css()}
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