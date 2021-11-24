import { ClassStateDefinition } from '../hooks/useSystem'

type ObjectVariant<States extends string> = Partial<
  Record<States, Stage.CSSInterpolation | Stage.CSSInterpolation[]>
>
type BooleanVariant = Stage.CSSInterpolation | Stage.CSSInterpolation[]

export type Variant<ClassState extends Exclude<ClassStateDefinition, void>> = (
  variants: {
    [State in keyof ClassState]?: ClassState[State] extends boolean
      ? BooleanVariant
      : ObjectVariant<Exclude<ClassState[State], boolean | undefined>>
  },
) => Stage.CSSInterpolation

export default function createVariant<ClassState extends Exclude<ClassStateDefinition, void>>(
  state: ClassState,
) {
  const variant: Variant<ClassState> = (variants) => {
    const styles: Stage.CSSInterpolation = []

    Object.keys(variants).forEach((key: keyof ClassState) => {
      if (Object.prototype.hasOwnProperty.call(variants, key)) {
        if (typeof state[key] === 'boolean' && state[key] === true) {
          styles.push(variants[key] as BooleanVariant)
        }
        if (
          typeof state[key] === 'string' &&
          Object.prototype.hasOwnProperty.call(variants[key], state[key] as keyof typeof variants)
        ) {
          styles.push(
            (variants[key] as ObjectVariant<Exclude<ClassState[typeof key], boolean | undefined>>)[
              state[key] as Exclude<ClassState[typeof key], boolean | undefined>
            ],
          )
        }
      }
    })

    return styles
  }

  return variant
}
