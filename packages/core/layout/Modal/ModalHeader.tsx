import React from 'react'
import Header from '../../content/Header'
import Paragraph from '../../content/Paragraph'
import { Close } from '../../icons'
import Flexbox from '../Flexbox'
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
                    <Paragraph color={c => c.hard.css()} mt={'0.5rem'}>{props.subtitle}</Paragraph>
                </Flexbox>
                <Close
                    css={props.styles.cross}
                    onClick={props.onClosePressed}
                    color={c => c.light.css()}
                    size="2.5rem"
                />
            </Flexbox>
        </div>
    )
}

export default ModalHeader