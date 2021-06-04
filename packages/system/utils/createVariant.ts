export type Variant<ClassState> = (
  variants: Partial<
    {
      [State in keyof ClassState]: Partial<Record<Extract<ClassState[State], string>, Stage.JSS>>
    }
  >,
) => Stage.JSS

export default function createVariant<ClassState extends Record<string, any>>(state: ClassState) {
  const variant: Variant<ClassState> = (variants) => {
    const styles: Stage.JSS = []

    Object.keys(variants).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(variants, key)) {
        if (typeof state[key] === 'boolean' && state[key] === true) {
          styles.push(variants[key])
        }
        if (typeof state[key] === 'string' && Object.prototype.hasOwnProperty.call(variants[key], state[key])) {
          styles.push(variants[key][state[key]])
        }
      }
    })

    return styles
  }

  return variant
}
