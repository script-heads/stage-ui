import React, { useContext } from 'react'

export const StageContext = React.createContext({} as Stage.Theme)

export default (): Stage.Theme => {
  return useContext(StageContext)
}
