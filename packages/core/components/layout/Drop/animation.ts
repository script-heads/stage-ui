/** @jsx jsx */
import Types from './types'

type AnimationProp = Exclude<Types.Props['animation'], undefined>
type AlignProp = Types.Props['align']

export default class DropAnimation {
  style: CSSStyleDeclaration

  enabled: boolean = true

  align: AlignProp

  type: AnimationProp['type']

  duration: AnimationProp['duration']

  reverse: AnimationProp['reverse']

  isHorizontal: boolean = false

  constructor(props: Types.Props, style: CSSStyleDeclaration) {
    this.style = style
    this.type = props.animation?.type || 'none'
    this.duration = props.animation?.duration || 100
    this.reverse = props.animation?.reverse || false
    this.align = props.align || 'bottom'
    if (this.align == 'right' || this.align == 'left') {
      this.isHorizontal = true
    }
    if (this.type === 'none') {
      this.enabled = false
      this.duration = 0
    }
  }

  animateIn() {
    if (!this.enabled) {
      return
    }

    this.animateOut()

    requestAnimationFrame(() => {
      if (this.type === 'fade') {
        this.style.transition = `opacity ${this.duration}ms`
        this.style.opacity = '1'
      }
      if (this.type === 'slide') {
        this.style.transition = `transform ${this.duration}ms, opacity ${this.duration}ms`
        const translate = this.isHorizontal ? 'translateX' : 'translateY'
        this.style.transform = `${translate}(0)`
        this.style.opacity = '1'
      }
      if (this.type === 'collapse') {
        this.style.transition = `transform ${this.duration}ms, opacity ${this.duration}ms`
        if (this.align === 'top') {
          this.style.transformOrigin = 'bottom'
        }
        if (this.align === 'bottom') {
          this.style.transformOrigin = 'top'
        }
        if (this.align === 'left') {
          this.style.transformOrigin = 'right'
        }
        if (this.align === 'right') {
          this.style.transformOrigin = 'left'
        }
        const scale = this.isHorizontal ? 'scaleX' : 'scaleY'
        this.style.transform = `${scale}(1)`
        this.style.opacity = '1'
      }
    })
  }

  animateOut() {
    if (!this.enabled) {
      return
    }

    if (this.type === 'fade') {
      this.style.opacity = '0'
    }
    if (this.type === 'slide') {
      const translate = this.isHorizontal ? 'translateX' : 'translateY'
      let value = this.align === 'top' || this.align === 'left' ? 1 : -1
      if (this.reverse) {
        value = -value
      }
      ;(this.style.transform = `${translate}(${value}rem)`), (this.style.opacity = '0')
    }
    if (this.type === 'collapse') {
      const scale = this.isHorizontal ? 'scaleX' : 'scaleY'
      const value = this.reverse ? 1.2 : 0.8
      ;(this.style.transform = `${scale}(${value})`), (this.style.opacity = '0')
    }
  }
}
