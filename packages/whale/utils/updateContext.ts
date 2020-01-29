import React from 'react'
import WhaleTypes from '../types'

export let WhaleContext = React.createContext({} as WhaleTypes.Theme)

const updateContext = <Theme>(defaultTheme?) => {
    const Context = React.createContext<Theme>(defaultTheme || {} as Theme)
    WhaleContext = Context as any
    return {Context}
}

export default updateContext