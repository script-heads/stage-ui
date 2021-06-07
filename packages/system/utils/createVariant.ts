import { ClassStateDefinition } from '../hooks/useSystem'

type ObjectVariant<States extends string> = Partial<Record<States, Stage.JSS | Stage.JSS[]>>
type BooleanVariant = Stage.JSS | Stage.JSS[]

export type Variant<ClassState extends Exclude<ClassStateDefinition, void>> = (
  variants: {
    [State in keyof ClassState]?: ClassState[State] extends boolean
      ? BooleanVariant
      : ObjectVariant<Exclude<ClassState[State], boolean | undefined>>
  },
) => Stage.JSS

export default function createVariant<ClassState extends Exclude<ClassStateDefinition, void>>(state: ClassState) {
  const variant: Variant<ClassState> = (variants) => {
    const styles: Stage.JSS = []

    Object.keys(state).forEach((key: keyof ClassState) => {
      if (Object.prototype.hasOwnProperty.call(variants, key)) {
        if (typeof state[key] === 'boolean' && state[key] === true) {
          styles.push(variants[key] as BooleanVariant)
        }
        if (typeof state[key] === 'string' && Object.prototype.hasOwnProperty.call(variants[key], state[key])) {
          styles.push(variants[key][state[key] as string])
        }
      }
    })

    return styles
  }

  return variant
}
