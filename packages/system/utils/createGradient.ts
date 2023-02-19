import colorProp from '../props/color'

type GradientOptions = {
  type?: 'linear' | 'radial' | 'conic'
  repeating?: boolean
  colors: Stage.ColorProp[]
  positions?: (number | string)[]
  angle?: number
}

/**
 * This utility creates gradient for CSS use
 */
function createGradient(theme: Stage.Theme, gradientOptions: GradientOptions): string {
  const {
    colors,
    type = 'linear',
    repeating = false,
    angle = 0,
    positions = [],
  } = gradientOptions
  let gradient = `${repeating ? 'repeating-' : ''}${type}-gradient(`
  if (type === 'linear') {
    gradient += `${angle}deg, `
  }
  colors.forEach((color, index) => {
    const rgb = colorProp(color, theme).string()
    if (index > 0) {
      gradient += `, `
    }
    gradient += rgb
    if (positions[index]) {
      gradient += ` ${positions[index]}${typeof positions[index] === 'number' ? '%' : ''}`
    }
  })
  return `${gradient})`
}

export default createGradient
