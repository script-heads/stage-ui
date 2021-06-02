/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Block, Flexbox } from '@stage-ui/core'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, Fragment, useState } from 'react'
import styles from './styles'
import TreeLabel from './TreeLabel'
import TreeLeftChild from './TreeLeftChild'
import TreeRightChild from './TreeRightChild'
import Types from './types'

const Tree: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props: Types.PrivateProps, ref) => {
  let {
    children,
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

  const [isOpen, setOpen] = useState(!!(props.open || props.defaultOpen))

  const { classes, attributes, events } = useSystem('Tree', {
    props,
    styles,
    styleProps: {
      row: ['all'],
    },
    focus: {
      applyDecoration: true,
    },
  })

  const childs: {
    child?: React.ReactNode
    tree?: Types.ExtentedReactElement
  }[] = []

  if (!Array.isArray(children)) {
    children = [children]
  }

  for (const child of children as Types.ExtentedReactElement[]) {
    try {
      if (child.type.render.name === 'Tree') {
        childs.push({ tree: child })
        continue
      }
      throw new Error()
    } catch (error) {
      if (child) {
        childs.push({ child })
      }
    }
  }

  const hasChilds = childs.length > 0

  const openHandle = (event) => {
    if (!props.open && hasChilds) {
      setOpen(!isOpen)
    }
    events.all.onClick && events.all.onClick(event)
  }

  const keyPressHandle = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      openHandle(event)
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
          css={classes.row(variant)}
          {...attributes}
          {...events}
          onKeyPress={keyPressHandle}
          onClick={openHandle}
          alignItems="center"
          children={
            <>
              <TreeLeftChild css={classes.arrow(variant)} options={options} size={size} children={leftChild} />
              <TreeLabel css={classes.label(variant)} options={options} size={size} children={label} />
              <TreeRightChild options={options} size={size} children={rightChild} />
            </>
          }
        />
      )}
      {childs.map((child, index) => (
        <Fragment key={index}>
          {child.tree
            ? React.cloneElement(child.tree as any, {
                size: child.tree.props.size || props.size,
                decoration: child.tree.props.decoration || props.decoration,
                lvl: lvl + 1,
                isParentOpen: !isParentOpen ? false : isOpen,
              })
            : isOpen
            ? child.child
            : null}
        </Fragment>
      ))}
    </Container>
  )
}

export default forwardRef(Tree)
