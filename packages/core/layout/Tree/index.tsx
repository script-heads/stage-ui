/* eslint-disable no-underscore-dangle */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import React, { forwardRef, Fragment, useState } from 'react'

import { Block, Flexbox } from '@stage-ui/core'
import { useSystem } from '@stage-ui/system'

import styles from './styles'
import TreeLabel from './TreeLabel'
import TreeLeftChild from './TreeLeftChild'
import TreeRightChild from './TreeRightChild'
import Types from './types'

const Tree = forwardRef(
  (props: Types.PrivateProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      leftChild,
      rightChild,
      label,
      size,
      decoration = 'drop' as Types.Props['decoration'],
      /**
       * private props
       */
      lvl = 0,
      isParentOpen = true,
    } = props

    const children = Array.isArray(props.children) ? props.children : [props.children]

    const [isOpen, setOpen] = useState(!!(props.open || props.defaultOpen))

    const { classes, attributes, events, styleProps } = useSystem('Tree', props, styles)

    const sortedChildrens: {
      treeElement?: Types.TreeElement
      otherElement?: React.ReactNode
    }[] = []

    for (const child of children as Types.TreeElement[]) {
      try {
        if (child.props.__TYPE === 'Tree') {
          sortedChildrens.push({ treeElement: child })
          continue
        }
        throw new Error()
      } catch (error) {
        if (child) {
          sortedChildrens.push({ otherElement: child })
        }
      }
    }

    const hasChilds = sortedChildrens.length > 0

    const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
      if (!props.open && hasChilds) {
        setOpen(!isOpen)
      }
      events.onClick?.(event)
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
        events.onEnter?.(event)
      }
    }

    const variant = { decoration, size, hasChilds }
    const options = { isOpen, isParentOpen, hasChilds, lvl }
    const Container = lvl === 0 ? Block : Fragment
    let containerProps = {}
    if (lvl === 0) {
      containerProps = {
        css: classes.container(variant),
      }
    }
    return (
      <Container {...containerProps}>
        {isParentOpen && (
          <Flexbox
            ref={ref}
            css={[classes.row(variant), styleProps.all]}
            attributes={attributes}
            {...events}
            onKeyPress={handleKeyPress}
            onClick={handleOpen}
            alignItems="center"
          >
            <TreeLeftChild css={classes.arrow(variant)} options={options} size={size}>
              {leftChild}{' '}
            </TreeLeftChild>
            <TreeLabel css={classes.label(variant)} options={options} size={size}>
              {label}
            </TreeLabel>
            <TreeRightChild options={options} size={size}>
              {rightChild}
            </TreeRightChild>
          </Flexbox>
        )}
        {sortedChildrens.map((child, index) => {
          const render = isOpen ? child.otherElement : null
          return (
            <Fragment key={index}>
              {child.treeElement
                ? React.cloneElement(child.treeElement, {
                    size: child.treeElement.props.size || size,
                    decoration: child.treeElement.props.decoration || decoration,
                    lvl: lvl + 1,
                    isParentOpen: !isParentOpen ? false : isOpen,
                  })
                : render}
            </Fragment>
          )
        })}
      </Container>
    )
  },
)

Tree.defaultProps = {
  __TYPE: 'Tree',
}

export default Tree as React.ForwardRefExoticComponent<
  Types.Props & React.RefAttributes<HTMLDivElement>
>
