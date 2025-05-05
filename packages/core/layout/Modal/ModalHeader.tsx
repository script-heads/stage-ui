import React, { useEffect, useState } from 'react'

import { Flexbox, Header, Paragraph } from '@stage-ui/core'
import { Close } from '@stage-ui/icons'

import Button from '../../control/Button'

import Types from './types'

const ModalHeader = (props: Types.ModalHeaderProps) => {
  const { title, subtitle, onClosePressed, hideHeader, getStyles } = props

  const [canTabToClose, setCanTabToClose] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => {
      setCanTabToClose(true)
    })

    return () => clearTimeout(t)
  }, [])

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

        <Button
          type="button"
          size="s"
          decoration="text"
          shape="round"
          mb="0.1rem"
          css={styles.classes.cross(styles.state)}
          onClick={onClosePressed}
          color="light"
          tabIndex={canTabToClose ? undefined : -1}
        >
          <Close />
        </Button>
      </Flexbox>
    </div>
  )
}

export default ModalHeader
