import type Stage from '../index'

export type SpaceProp = Stage.Sizes | (string & { T?: string }) | number

function spaceProp(
  value: string | number | undefined,
  theme: Stage.Theme,
): string | undefined {
  if (value === undefined) {
    return
  }

  if (typeof value === 'number') {
    return `${value.toString()}px`
  }

  return value
    .split(' ')
    .map(
      (currentValue: string) =>
        theme.spacing[currentValue as Stage.Sizes] || currentValue,
    )
    .join(' ')
}

export default spaceProp
