import React from 'react'

import { Flexbox, Header, Paragraph } from '@stage-ui/core'
import { Close } from '@stage-ui/icons'

import Types from './types'

const ModalHeader = (props: Types.ModalHeaderProps) => {
  const { title, subtitle, onClosePressed, hideHeader, getStyles, hideClose } = props

  if (hideHeader) {
    return null
  }

  const styles = getStyles()

  return (
    <div css={styles.classes.header(styles.state)}>
      <Flexbox>
        <Flexbox flex={1} column>
          <Header m={0}>{title}</Header>
          {!!subtitle && (
            <Paragraph m={0} color="hard">
              {subtitle}
            </Paragraph>
          )}
        </Flexbox>
        {!hideClose && (
          <Close
            ml="m"
            css={styles.classes.cross(styles.state)}
            onClick={onClosePressed}
            color="light"
          />
        )}
      </Flexbox>
    </div>
  )
}

export default ModalHeader
