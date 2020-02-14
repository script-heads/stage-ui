import { Flexbox, Header, Paragraph } from '@flow-ui/core'
import { Close } from '@flow-ui/core/icons'
import React from 'react'
import ModalTypes from './types'

const ModalHeader = (props: ModalTypes.ModalHeaderProps) => {

    if (props.hideHeader) {
        return null
    }

    return (
        <div css={props.styles.header}>
            <Flexbox>
                <Flexbox flex={1} column>
                    <Header css={props.styles.header}>{props.title}</Header>
                    <Paragraph color={c => c.hard} mt={'0.5rem'}>{props.subtitle}</Paragraph>
                </Flexbox>
                <Close
                    css={props.styles.cross}
                    onClick={props.onClosePressed}
                    color={c => c.light}
                    size="2.5rem"
                />
            </Flexbox>
        </div>
    )
}

export default ModalHeader