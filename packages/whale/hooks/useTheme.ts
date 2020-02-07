import { useContext } from 'react'
import { WhaleContext } from '../components/Provider'

export default () => {
    const theme = useContext(WhaleContext)
    if (Object.keys(theme).length === 0) console.error('Whale error: Theme not provided')
    return (theme)
}