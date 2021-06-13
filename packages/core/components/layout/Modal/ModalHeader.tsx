import { Flexbox, Header, Paragraph } from '@stage-ui/core'
import { Close } from '@stage-ui/icons'
import ModalTypes from './types'

const ModalHeader = (props: ModalTypes.ModalHeaderProps) => {
  if (props.hideHeader) {
    return null
  }

  const styles = props.getStyles()

  return (
    <div css={styles.classes.header(styles.state)}>
      <Flexbox>
        <Flexbox flex={1} column>
          <Header m={0} children={props.title} />
          <Paragraph m={0} color="hard" children={props.subtitle} />
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
