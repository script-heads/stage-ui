import { useContext } from 'react'

import ThemeContext from 'utils/themeContext'

export default () => {
  return useContext(ThemeContext)
}
