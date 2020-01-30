import React from 'react'
import Header from '../../content/Header'
import Paragraph from '../../content/Paragraph'
import { Close } from '../../icons'
import Block from '../../layout/Block'
import Flexbox from '../../layout/Flexbox'
import Notification from '../../layout/Notification'
import NotificationType from '../../layout/Notification/types'
import { addElement, removeElement } from '../../layout/Viewport/MountArea'
import createID from './createID'

export default (options: NotificationType.NotifyOptions) => {
    let timer
    let key = createID()
    if (options.timeout) {
        timer = setTimeout(() => removeElement(key), options.timeout)
    }
    addElement(
        (
            <Notification onClick={options.onClick}>
                {options.customContent ? (
                    options.customContent
                ) : (
                        <Flexbox p="1rem" w={'20rem'}>
                            <Block flex={1} css={{ overflow: 'hidden' }}>
                                <Header size="s" ellipsis>{options.title}</Header>
                                <Paragraph>{options.message}</Paragraph>
                            </Block>
                            <Block pl="0.5rem">
                                <Close
                                    size="1.25rem"
                                    alignSelf="flex-end"
                                    color={c => c.light.css()}
                                    onClick={() => {
                                        clearInterval(timer)
                                        removeElement(key)
                                    }}
                                />
                            </Block>
                        </Flexbox>
                    )}
            </Notification>
        ),
        key
    )
}