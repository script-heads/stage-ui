import { Header, Text } from '@flow-ui/core'
import { Fragment } from 'react'

const PageEmpty = () => {
    return (
        <Fragment>
            <Header>Document not found</Header>
            <Text>Docs has no pages</Text>
        </Fragment>
    )
}

export default PageEmpty