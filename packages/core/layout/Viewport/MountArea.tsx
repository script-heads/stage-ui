import createID from '@stage-ui/system/utils/createID'
import React, { FC, Fragment, useState } from 'react'
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
    setElements(elements.concat({ key, children, placement }))
    return key
  }

  ViewportShared.removeElement = (key: string) => {
    setElements(elements.filter((el) => el.key !== key))
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
          ':nth-child(1)': {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          },
          ':nth-child(2)': {
            alignItems: 'center',
            justifyContent: 'flex-start',
          },
          ':nth-child(3)': {
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
          },
          ':nth-child(4)': {
            alignItems: 'flex-start',
            justifyContent: 'center',
          },
          ':nth-child(5)': {
            alignItems: 'center',
            justifyContent: 'center',
          },
          ':nth-child(6)': {
            alignItems: 'flex-end',
            justifyContent: 'center',
          },
          ':nth-child(7)': {
            alignItems: 'flex-start',
            justifyContent: 'end',
          },
          ':nth-child(8)': {
            alignItems: 'center',
            justifyContent: 'end',
          },
          ':nth-child(9)': {
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
