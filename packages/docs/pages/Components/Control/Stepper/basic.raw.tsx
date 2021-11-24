import React, { useState } from 'react'
import { Block, Button, Flexbox, notify, Stepper } from '@stage-ui/core'
import { ArrowIosLeft, ArrowIosRight } from '@stage-ui/icons'

export default () => {
  const [current, setCurrent] = useState(0)
  return (
    <Block>
      <Stepper
        current={current}
        onChange={(step, index) => {
          setCurrent(index)
          notify({
            title: 'onChange',
            message: `label: ${step.label}, index: ${index}`,
            timeout: 500,
          })
        }}
        data={[
          {
            label: 'A',
          },
          {
            label: 'B',
          },
          {
            label: 'C',
          },
          {
            label: 'D',
          },
        ]}
      />
      <Flexbox justifyContent="space-evenly" p="xl">
        <Button disabled={current === 0} onClick={() => setCurrent(current - 1)}>
          <ArrowIosLeft size="1.5rem" />
        </Button>
        <Button disabled={current === 4} onClick={() => setCurrent(current + 1)}>
          <ArrowIosRight size="1.5rem" />
        </Button>
      </Flexbox>
    </Block>
  )
}
