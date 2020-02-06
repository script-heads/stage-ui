import { useContext } from 'react'
import { WhaleContext } from '../components/Provider'

export default () => {
    const theme = useContext(WhaleContext)
    return (theme)
}