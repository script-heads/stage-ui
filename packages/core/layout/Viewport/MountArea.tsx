import React, { FC, Fragment, useState } from 'react'

import { createID } from '@stage-ui/system'

import ViewportTypes from './types'

export const ViewportShared: ViewportTypes.Shared = {
  addElement: () => '',
  removeElement: () => undefined,
}

const MountArea: FC<ViewportTypes.MountArea> = () => {
  const [elements, setElements] = useState<ViewportTypes.MountAreaElement[]>([])

  ViewportShared.addElement = (
    children: React.ReactElement,
    key: string = createID(),
    placement: ViewportTypes.MountAreaPlacement = 'center',
  ) => {
    setElements((currentElements) => {
      return currentElements.concat({ key, children, placement })
    })
    return key
  }

  ViewportShared.removeElement = (key: string) => {
    setElements((currentElements) => {
      return currentElements.filter((el) => el.key !== key)
    })
  }

  return (
    <div
      css={{
        position: 'fixed',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        top: '0',
        right: '0',
        left: '0',
        bottom: '0',
        pointerEvents: 'none',
        zIndex: 1000,
        '> div': {
          display: 'flex',
          flexDirection: 'column',
          ':nth-of-type(1)': {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          },
          ':nth-of-type(2)': {
            alignItems: 'center',
            justifyContent: 'flex-start',
          },
          ':nth-of-type(3)': {
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
          },
          ':nth-of-type(4)': {
            alignItems: 'flex-start',
            justifyContent: 'center',
          },
          ':nth-of-type(5)': {
            alignItems: 'center',
            justifyContent: 'center',
          },
          ':nth-of-type(6)': {
            alignItems: 'flex-end',
            justifyContent: 'center',
          },
          ':nth-of-type(7)': {
            alignItems: 'flex-start',
            justifyContent: 'end',
          },
          ':nth-of-type(8)': {
            alignItems: 'center',
            justifyContent: 'end',
          },
          ':nth-of-type(9)': {
            alignItems: 'flex-end',
            justifyContent: 'end',
          },
          '>*': {
            pointerEvents: 'all',
          },
        },
      }}
    >
      <div>
        {elements
          .filter((el) => el.placement === 'topLeft')
          .map((el) => (
            <Fragment key={el.key}>{el.children}</Fragment>
          ))}
      </div>
      <div>
        {elements
          .filter((el) => el.placement === 'topCenter')
          .map((el) => (
            <Fragment key={el.key}>{el.children}</Fragment>
          ))}
      </div>
      <div>
        {elements
          .filter((el) => el.placement === 'topRight')
          .map((el) => (
            <Fragment key={el.key}>{el.children}</Fragment>
          ))}
      </div>
      <div>
        {elements
          .filter((el) => el.placement === 'centerLeft')
          .map((el) => (
            <Fragment key={el.key}>{el.children}</Fragment>
          ))}
      </div>
      <div>
        {elements
          .filter((el) => el.placement === 'center')
          .map((el) => (
            <Fragment key={el.key}>{el.children}</Fragment>
          ))}
      </div>
      <div>
        {elements
          .filter((el) => el.placement === 'centerRight')
          .map((el) => (
            <Fragment key={el.key}>{el.children}</Fragment>
          ))}
      </div>
      <div>
        {elements
          .filter((el) => el.placement === 'bottomLeft')
          .map((el) => (
            <Fragment key={el.key}>{el.children}</Fragment>
          ))}
      </div>
      <div>
        {elements
          .filter((el) => el.placement === 'bottomCenter')
          .map((el) => (
            <Fragment key={el.key}>{el.children}</Fragment>
          ))}
      </div>
      <div>
        {elements
          .filter((el) => el.placement === 'bottomRight')
          .map((el) => (
            <Fragment key={el.key}>{el.children}</Fragment>
          ))}
      </div>
    </div>
  )
}

export default MountArea
