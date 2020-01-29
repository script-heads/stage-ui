import { useContext } from 'react'
import { Context } from '@flow-ui/core/layout/Viewport'

export default () => {
    const theme = useContext(Context)
    return (theme)
}