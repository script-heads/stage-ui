/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  HTMLProps,
  ReactChild,
  ReactNode,
  Ref,
  useState,
} from 'react'

import { useSystem } from '@stage-ui/system'

import Spinner from '../../content/Spinner'

import createClasses from './styles'
import Types from './types'
import { jsx } from '@emotion/react'
import ButtonTypes from './types'

type PossibleElementType = Extract<React.ElementType, 'button' | 'a'>

type AsProp<E extends PossibleElementType> = {
  as?: E
}
type PropsToOmit<E extends PossibleElementType, P> = keyof (AsProp<E> & P)

type PolymorphicRef<E extends PossibleElementType> = React.ComponentPropsWithRef<E>['ref']

type Props<E extends PossibleElementType> = ButtonTypes.PolymorphicProps &
  AsProp<E> &
  Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, ButtonTypes.PolymorphicProps>>

const PolymorphicButtonComponent = <E extends PossibleElementType = 'button'>(
  props: Props<E>,
  ref: PolymorphicRef<E>,
) => {
  let { leftChild, rightChild, children, as = 'button', style, ...restProps } = props
  const { classes, attributes, events, styleProps } = useSystem(
    'PolymorphicButton',
    props,
    createClasses,
  )

  return jsx(as, {
    ...attributes,
    ...events,
    css: [classes.container, styleProps.all],

    children: (
      <>
        {leftChild && <div css={classes.child({ align: 'left' })}>{leftChild}</div>}
        {children}
        {rightChild && <div css={classes.child({ align: 'right' })}>{rightChild} </div>}
      </>
    ),
    ref,
    ...restProps,
  })
}

export const PolymorphicButton = forwardRef(PolymorphicButtonComponent) as <
  E extends PossibleElementType = 'button',
>(
  props: Props<E> & { ref?: PolymorphicRef<E> },
) => React.ReactElement
