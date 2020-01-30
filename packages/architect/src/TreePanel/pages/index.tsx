import { Paragraph } from '@flow-ui/core'
import { Fragment } from 'react'
import { TabProps } from '..'

const PagesTab = (props: TabProps) => {
    const { theme, styles, tools } = props

    return (
        <Fragment>
            {
                tools.getItems().length === 0 && (
                    <Paragraph
                        align="center"
                        pt="2rem"
                        color={c => c.light.hex()}
                        children="Pages"
                    />
                )
            }
        </Fragment>
    )
}

export default PagesTab