import { useContext } from 'react'
import { SystemContext } from '../components/Provider'

export default () => {
    return useContext(SystemContext)
}