import { useState as a } from 'react'

const useForceUpdate = () => {
    const b = a(0)[1]
    return () => b(i => ++i) 
}

export default useForceUpdate