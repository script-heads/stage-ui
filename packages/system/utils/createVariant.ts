export type Variant<ClassStates> = (variants: Partial<{
  [State in keyof ClassStates]: Partial<
      Record<Extract<ClassStates[State], string>, Stage.JSS>
  >
}>) => Stage.JSS

export default (state) => {
  return (variants) => {
    const styles = []

    for (let key in state) {
      if (variants.hasOwnProperty(key)) {
        if (typeof state[key] === 'boolean' && state[key] === true) {
          styles.push(variants[key]) 
        }
        if (typeof state[key] === 'string' && variants[key].hasOwnProperty(state[key])) {
          styles.push(variants[key][state[key]]) 
        }
      }
    }
    
    return styles
  }
} 