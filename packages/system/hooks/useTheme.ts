import React, { useContext } from 'react'

import type Stage from '../index'

export const StageContext = React.createContext({} as Stage.Theme)

export default (): Stage.Theme => {
  return useContext(StageContext)
}
