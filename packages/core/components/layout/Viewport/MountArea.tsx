import { css } from '@emotion/react'
import createID from '@stage-ui/system/utils/createID'
import React, { FC, Fragment, useState } from 'react'
import ViewportTypes from './types'

export const ViewportShared: ViewportTypes.Shared = {
  addElement: () => '',
  removeElement: () => undefined,
}

const MountArea: FC<ViewportTypes.MountArea> = () => {
  const styles = css({
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    top: '2rem',
    right: '2rem',

    zIndex: 1000,
    '>*': {
      marginBottom: '1rem',
    },
  })

  const [elements, setElements] = useState<ViewportTypes.MountAreaElement[]>([])

  ViewportShared.addElement = (children: React.ReactElement, key: string = createID()) => {
    setElements(elements.concat({ key, children }))
    return key
  }

  ViewportShared.removeElement = (key: string) => {
    setElements(elements.filter((el) => el.key !== key))
  }

  return (
    <div css={styles}>
      {elements.map((element) => (
        <Fragment key={element.key}>{element.children}</Fragment>
      ))}
    </div>
  )
}

export default MountArea
