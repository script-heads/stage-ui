import { useContext } from 'react'
import { StageContext } from '../Provider'

export default () => {
  return useContext(StageContext)
}
