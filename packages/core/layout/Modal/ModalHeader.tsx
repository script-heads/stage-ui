import React from 'react'
import { Flexbox, Header, Paragraph } from '@stage-ui/core'
import { Close } from '@stage-ui/icons'
import Types from './types'

const ModalHeader = (props: Types.ModalHeaderProps) => {
  if (props.hideHeader) {
    return null
  }

  const styles = props.getStyles()

  return (
    <div css={styles.classes.header(styles.state)}>
      <Flexbox>
        <Flexbox flex={1} column>
          <Header m={0}>{props.title}</Header>
          <Paragraph m={0} color="hard">
            {props.subtitle}
          </Paragraph>
        </Flexbox>
        <Close
          ml="m"
          css={styles.classes.cross(styles.state)}
          onClick={props.onClosePressed}
          color="light"
        />
      </Flexbox>
    </div>
  )
}

export default ModalHeader
