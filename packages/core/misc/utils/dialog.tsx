import { Block, Button, Flexbox, Modal } from '@stage-ui/core'
import ModalTypes from '@stage-ui/core/layout/Modal/types'
import { addElement, removeElement } from '@stage-ui/core/layout/Viewport/MountArea'
import ViewportTypes from '@stage-ui/core/layout/Viewport/types'
import createID from '@stage-ui/system/utils/createID'
import React from 'react'

export default (options: ViewportTypes.DialogOptions) => {
    let key = createID()
    let modal: ModalTypes.Ref
    const close = () => {
        modal.close()
    }

    addElement(
        (
            <Modal
                ref={(ref: ModalTypes.Ref) => modal = ref}
                title={options.title}
                subtitle={options.subtitle}
                hideHeader={options.hideHeader}
                styles={options.styles}
                size={options.size}
                decoration={options.decoration}
                didClose={() => {
                    removeElement(key)
                }}
                children={(
                    options.customContent ? options.customContent(close) : (
                        <Flexbox column>
                            <Block>
                                {options.message}
                            </Block>
                            <Flexbox flex={1} justifyContent="flex-end" pt={'1rem'}>
                                <Button
                                    children={options.buttonText || 'OK'}
                                    onClick={() => {
                                        modal.close()
                                    }}
                                />
                            </Flexbox>
                        </Flexbox>
                    )
                )}
            />
        ),
        key
    )
    setTimeout(() => modal.open())
}