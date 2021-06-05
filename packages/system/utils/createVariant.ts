type ObjectVariant<States> = Partial<Record<keyof States, Stage.JSS>>
type BooleanVariant = Stage.JSS

export type Variant<ClassState> = (
  variants: Partial<
    {
      [State in keyof ClassState]: State extends Object ? ObjectVariant<ClassState[State]> : BooleanVariant
    }
  >,
) => Stage.JSS

export default function createVariant<ClassState extends Record<string, any>>(state: ClassState) {
  const variant: Variant<ClassState> = (variants) => {
    const styles: Stage.JSS = []

    Object.keys(state).forEach((key: keyof ClassState) => {
      if (Object.prototype.hasOwnProperty.call(variants, key)) {
        if (typeof state[key] === 'boolean' && state[key] === true) {
          styles.push(variants[key] as BooleanVariant)
        }
        if (typeof state[key] === 'string' && Object.prototype.hasOwnProperty.call(variants[key], state[key])) {
          styles.push((variants[key] as ObjectVariant<ClassState[typeof key]>)[state[key]])
        }
      }
    })

    return styles
  }

  return variant
}
