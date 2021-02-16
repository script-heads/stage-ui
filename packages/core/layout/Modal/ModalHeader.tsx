/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Flexbox, Header, Paragraph } from '@stage-ui/core'
import { Close } from '@stage-ui/core/icons'
import ModalTypes from './types'

const ModalHeader = (props: ModalTypes.ModalHeaderProps) => {

    if (props.hideHeader) {
        return null
    }
    
    const styles = props.getStyles()

    return (
        <div css={styles.cs.header(styles.state)}>
            <Flexbox>
                <Flexbox flex={1} column>
                    <Header 
                        m={0}
                        children={props.title}    
                    />
                    <Paragraph 
                        m={0}
                        color={c => c.hard} 
                        children={props.subtitle}
                    />
                </Flexbox>
                <Close
                    css={styles.cs.cross(styles.state)}
                    onClick={props.onClosePressed}
                    color={c => c.light}
                />
            </Flexbox>
        </div>
    )
}

export default ModalHeader