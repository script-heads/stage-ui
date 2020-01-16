import { useContext } from 'react'
import { Context } from '../components/Provider'

export default () => {
    const theme = useContext(Context)
    if (Object.keys(theme).length === 0) console.error('Whale error: Theme not provided')
    return (theme)
}