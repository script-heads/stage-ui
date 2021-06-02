import { useContext } from 'react'
import { StageContext } from '../components/Provider'

export default () => {
    return useContext(StageContext)
}