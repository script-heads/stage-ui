/* eslint-disable no-console */
import React from 'react'

import { DatePicker, Flexbox, Viewport } from '@stage-ui/core'

import ReactDOM from 'react-dom'

import dayjs from 'dayjs'

import { light } from './theme'

const App: React.FC = () => {
  // const ref = useRef(null)
  // const drop1 = useDropMenu(
  //   [
  //     {
  //       text: 'Test',
  //       icon: 'AlertCircle',
  //       onClick: (e) => {
  //         e.stopPropagation()
  //       },
  //     },
  //     {
  //       text: 'Selected',
  //       selected: true,
  //       icon: 'Activity',
  //     },
  //     {
  //       text: 'Test 2',
  //       icon: 'AlertTriangle',
  //     },
  //   ],
  //   {
  //     dropOffsetY: 10,
  //     onOpen: () => console.log('Drop 1 open'),
  //     onClose: () => console.log('Drop 1 close'),
  //   },
  // )

  // const drop2 = useDropMenu(
  //   [
  //     {
  //       text: 'Test 2',
  //     },
  //   ],
  //   {
  //     dropOffsetY: 10,
  //     clickMode: 'open',
  //     onOpen: () => console.log('Drop 2 open'),
  //     onClose: () => console.log('Drop 2 close'),
  //   },
  // )

  // const drop3 = useDropOver('Drop 3', {
  //   onOpen: () => console.log('Drop 4 open'),
  //   onClose: () => console.log('Drop 4 close'),
  // })
  // const drop4 = useDropOver('Drop 4', {
  //   onOpen: () => console.log('Drop 4 open'),
  //   onClose: () => console.log('Drop 4 close'),
  // })

  // const size = useBreakpoints(['xl', 'l', 'm', 's', 'xs'])

  return (
    <Flexbox p="xl">
      <DatePicker
        shortcuts={[
          {
            value: dayjs().toDate(),
            label: 'Today',
            onClick: () => console.log('Today'),
            disabled: true,
          },
          {
            value: dayjs().toDate(),
            label: 'Today',
            onClick: () => console.log('Today'),
            disabled: false,
          },
          {
            value: dayjs().add(10, 'days').toDate(),
            label: '10 days after',
          },
        ]}
        range
      />
      {/* <Button label="Drop1" onClick={drop1} />
      <Button label="Drop2" onClick={drop2} />
      <Button label="Drop3" {...drop3} />
      <Button label="Drop4" {...drop4} />
      <Pageswitch length={8} pageSize={4} />
      <TextField label="test" /> */}
    </Flexbox>
  )
}

ReactDOM.render(
  <Viewport theme={light}>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
