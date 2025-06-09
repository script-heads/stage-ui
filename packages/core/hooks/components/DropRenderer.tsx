import React, { useImperativeHandle, useLayoutEffect, useState } from 'react'

import { Block, Text } from '@stage-ui/core'

import { dropDelegate } from '../misc/dropDelegate'
import { dropRef, UseDropOptions } from '../misc/dropRef'

const SCREEN_PADDING = 4

export const DropRenderer = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [payload, setPayload] = useState<{
    id: number
    node: React.ReactNode
    options: UseDropOptions
  }>({ id: 0, node: null, options: {} })

  const [pos, setPos] = useState<[number, number]>([0, 0])

  useImperativeHandle(
    dropRef,
    () => ({
      toggle: (id, e, dropNode, options) => {
        e?.stopPropagation()

        if (payload.id && id !== payload.id) {
          payload.options.onClose?.()
        }

        if (id === payload.id && visible) {
          if (payload.options.clickMode === 'open') {
            return
          }
          dropDelegate.close()
          return
        }

        dropDelegate.close = () => {
          options.onClose?.()
          setVisible(false)
        }

        options.onOpen?.()
        let node: React.ReactNode = null
        if (typeof dropNode === 'function') {
          node = dropNode(() => dropDelegate.close()) as React.ReactNode
        } else {
          node = dropNode
        }
        setPayload({ id, node, options })

        if (e) {
          // is mouse click
          if (e.detail > 0) {
            setPos([e.clientX || 0, e.clientY || 0])

            // is tab mouse click
          } else {
            const t = e.target as HTMLElement
            const rect = t.getBoundingClientRect()

            setPos([rect.x + rect.width - 12, rect.y + rect.height - 12])
          }
        }

        setVisible(true)
      },
      move: (e) => {
        setPos([e?.clientX || 0, e?.clientY || 0])
      },
    }),
    [visible, setVisible, payload],
  )

  useLayoutEffect(() => {
    let [x, y] = pos
    const { innerWidth, innerHeight } = window

    const hide = (e: unknown) => {
      if (document.activeElement?.tagName === 'INPUT') {
        if (
          document.getElementById('drop-renderer')?.contains?.(document.activeElement)
        ) {
          return
        }
      }
      const target =
        (e as CustomEvent<{ self: Node }>)?.detail?.self || (e as React.MouseEvent).target

      if (visible) {
        if (
          target instanceof Node &&
          document.getElementById('drop-renderer')?.contains?.(target)
        ) {
          return
        }
        dropDelegate.close()
      }
    }

    if (visible) {
      setTimeout(() => {
        window.addEventListener('touchstart', hide)
        window.addEventListener('click', hide)
        window.addEventListener('scroll', hide)
        window.addEventListener('resize', hide)
        document.addEventListener('onstagescroll', hide)
      })

      x += payload.options.dropOffsetX || 0
      y += payload.options.dropOffsetY || 0
    } else {
      //
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

    return () => {
      window.removeEventListener('touchstart', hide)
      window.removeEventListener('click', hide)
      window.removeEventListener('scroll', hide)
      window.removeEventListener('resize', hide)
      document.removeEventListener('onstagescroll', hide)
    }
  }, [visible, payload])

  return (
    <Block
      id="drop-renderer"
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
        // transition: 'transform ease-in-out 0.15s, opacity ease-in-out 0.15s',
        transform: visible
          ? 'translateY(0rem) scale(1)'
          : 'translateY(-0.25rem) scale(0.99)',
        zIndex: 9999,
        minWidth: 16,
        minHeight: 16,
      }}
      {...payload.options.containerProps}
    >
      {visible &&
        (typeof payload.node === 'string' ? (
          <Text p="s m" color={(c) => c.onSurface.alpha(0.8).string()} weight={500}>
            {payload.node}
          </Text>
        ) : (
          payload.node
        ))}
    </Block>
  )
}
