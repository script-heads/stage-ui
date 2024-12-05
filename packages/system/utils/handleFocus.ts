import React from 'react'

import isBrowser from './isBrowser'

let IS_MOUSE_DOWN = false
let PREV_ACTIVE_ELEMENT: Element | null = null

if (isBrowser) {
  window.addEventListener('mousedown', () => {
    IS_MOUSE_DOWN = true
  })
  window.addEventListener('mouseup', () => {
    IS_MOUSE_DOWN = false
  })
  window.addEventListener('focus', () => {
    PREV_ACTIVE_ELEMENT = document.activeElement
  })
}

export type FocusOptions = 'always' | 'tabOnly' | 'never'

function handleFocus<Element extends HTMLElement>(
  props: Partial<
    Record<'onFocus' | 'onBlur', (event: React.FocusEvent<Element>) => void>
  >,
  focus: FocusOptions,
): Record<'onFocus' | 'onBlur', (event: React.FocusEvent<Element>) => void> {
  return {
    // Override default focus styles
    onFocus: (event: React.FocusEvent<Element>): void => {
      props.onFocus?.(event)

      if (
        PREV_ACTIVE_ELEMENT !== event.currentTarget &&
        (event.currentTarget.tabIndex === 0 || event.currentTarget.tabIndex > -1) &&
        ((focus === 'tabOnly' && !IS_MOUSE_DOWN) || focus === 'always')
      ) {
        event.currentTarget.id = event.currentTarget.id
          ? `${event.currentTarget.id} focused`
          : 'focused'
      }
      PREV_ACTIVE_ELEMENT = event.currentTarget
    },

    // Override default focus styles
    onBlur: (event: React.FocusEvent<Element>): void => {
      props.onBlur?.(event)
      PREV_ACTIVE_ELEMENT = null

      const ids = event.currentTarget.id
        .split(' ')
        .filter((id) => id !== 'focused')
        .join(' ')

      if (!ids) {
        event.currentTarget.removeAttribute('id')
        return
      }
      event.currentTarget.id = ids
    },
  }
}

export default handleFocus
