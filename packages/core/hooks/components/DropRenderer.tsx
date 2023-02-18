import React, { useEffect, useImperativeHandle, useLayoutEffect, useState } from 'react'

import { Flexbox, Text } from '@stage-ui/core'

import { dropDelegate } from '../misc/dropDelegate'
import { dropRef, UseDropOptions } from '../misc/dropRef'

const SCREEN_PADDING = 4

export const DropRenderer = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [payload, setPayload] = useState<{
    node: React.ReactNode
    options: UseDropOptions
  }>({ node: null, options: {} })

  const [pos, setPos] = useState<[number, number]>([0, 0])

  dropDelegate.close = () => {
    if (visible) {
      setVisible(false)
      dropDelegate.visible = false
    }
  }

  useEffect(() => {
    const hide = (e: unknown) => {
      const target =
        (e as CustomEvent<{ self: Node }>)?.detail?.self || (e as React.MouseEvent).target

      if (dropDelegate.visible) {
        if (document.getElementById('drop-renderer')?.contains(target)) {
          return
        }
        dropDelegate.visible = false
        dropDelegate.close()
      }
    }
    if (visible) {
      setTimeout(() => {
        window.addEventListener('click', hide)
        window.addEventListener('scroll', hide)
        window.addEventListener('resize', hide)
        document.addEventListener('onstagescroll', hide)
      })
    }

    return () => {
      window.removeEventListener('click', hide)
      window.removeEventListener('scroll', hide)
      window.removeEventListener('resize', hide)
      document.removeEventListener('onstagescroll', hide)
    }
  }, [visible])

  useImperativeHandle(dropRef, () => ({
    open: (e, dropNode, options) => {
      let node: React.ReactNode = null
      if (typeof dropNode === 'function') {
        node = dropNode(() => dropDelegate.close()) as React.ReactNode
      } else {
        node = dropNode
      }
      setPayload({ node, options })
      setPos([e?.clientX || 0, e?.clientY || 0])
      setVisible(true)
      dropDelegate.visible = true
    },
    move: (e) => {
      setPos([e?.clientX || 0, e?.clientY || 0])
    },
  }))

  useLayoutEffect(() => {
    let [x, y] = pos
    const { innerWidth, innerHeight } = window

    if (visible) {
      x += payload.options.dropOffsetX || 0
      y += payload.options.dropOffsetY || 0
    }

    const width = document.getElementById('drop-renderer')?.offsetWidth || 0
    const height = document.getElementById('drop-renderer')?.offsetHeight || 0
    const padding = payload.options.screenPadding || SCREEN_PADDING
    if (padding + x + width > innerWidth) {
      x = innerWidth - width - padding
    }
    if (padding + y + height > innerHeight) {
      y = innerHeight - height - padding
    }
    setPos([x, y])
  }, [visible])

  return (
    <Flexbox
      id="drop-renderer"
      column
      shadow="s"
      borderRadius="m"
      backgroundColor={(c) => c.background.alpha(0.6).string()}
      css={{
        position: 'fixed',
        backdropFilter: 'blur(10px)',
        left: `${pos[0]}px`,
        top: `${pos[1]}px`,
        opacity: visible ? 1 : 0,
        pointerEvents:
          payload.options.pointerEvents !== false && visible ? 'all' : 'none',
        transition: 'transform ease-in-out 0.15s, opacity ease-in-out 0.15s',
        transform: visible
          ? 'translateY(0rem) scale(1)'
          : 'translateY(-0.25rem) scale(0.99)',
        zIndex: 9999,
      }}
      {...payload.options.containerProps}
    >
      {typeof payload.node === 'string' ? (
        <Text p="s m" color={(c) => c.onSurface.alpha(0.8).string()} weight={500}>
          {payload.node}
        </Text>
      ) : (
        payload.node
      )}
    </Flexbox>
  )
}
