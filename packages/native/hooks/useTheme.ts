import { useContext } from 'react'
import ThemeContext from 'shared/utils/themeContext'

export default () => {
  return useContext(ThemeContext)
}
