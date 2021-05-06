import React, { useEffect, useState } from 'react'
import { Block, Button, Flexbox, notify, Stepper } from '@stage-ui/core'
import { ArrowIosLeft, ArrowIosRight } from '@stage-ui/icons'

export default () => {
    const [step, setStep] = useState(0)
    return (
        <Block>
            <Stepper
                current={step}
                onChange={(step, index) => {
                    setStep(index)
                    notify({
                        title: 'onChange',
                        message: `label: ${step.label}, index: ${index}`,
                        timeout: 500,
                    })
                }}
                data={[
                    {
                        label: 'A'
                    },
                    {
                        label: 'B'
                    },
                    {
                        label: 'C'
                    },
                    {
                        label: 'D'
                    }
                ]}
            />
            <Flexbox justifyContent="space-evenly" p="xl">
                <Button disabled={step === 0} onClick={() => setStep(step - 1)}>
                    <ArrowIosLeft size="1.5rem" />
                </Button>
                <Button disabled={step === 4} onClick={() => setStep(step + 1)}>
                    <ArrowIosRight size="1.5rem" />
                </Button>
            </Flexbox>
        </Block>
    )
}