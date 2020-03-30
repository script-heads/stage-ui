import { useContext } from 'react'
import { SystemContext } from '../components/Provider'

export default () => {
    const theme = useContext(SystemContext)
    if (Object.keys(theme).length === 0) console.error('System error: Theme not provided')
    return (theme)
}