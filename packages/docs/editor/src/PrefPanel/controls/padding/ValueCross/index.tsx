import { Block, Button, Flexbox, Grid, Paragraph, useTheme } from '@stage-ui/core'
import { Lock } from '@stage-ui/icons'
import { useEffect, useState } from 'react'
import { context } from '../../../../..'
import styles from './styles'

const staticValues = ['-', 'xs', 's', 'm', 'l', 'xl']
const findMap = {
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xl: 5,
}

type Props = {
  propKeys: string[]
  label: string
}

const ValueControl = (props: { value: string; onChange: (value: string) => void }) => {
  return (
    <Flexbox alignSelf="center">
      {staticValues.map((value, index) => (
        <Button
          key={index}
          flex={1}
          size="xs"
          children={value}
          decoration={value === props.value && value !== '-' ? 'filled' : 'outline'}
          onClick={() => {
            props.onChange(value)
          }}
        />
      ))}
    </Flexbox>
  )
}
const ValueCross = (props: Props) => {
  const { propKeys } = props
  const { focused } = context.tools
  if (!focused) {
    return null
  }

  const [values, setValues] = useState(['-', '-', '-', '-'])

  useEffect(() => {
    const kt = focused.props[propKeys[0]] || staticValues[0]
    const kl = focused.props[propKeys[1]] || staticValues[0]
    const kr = focused.props[propKeys[2]] || staticValues[0]
    const kb = focused.props[propKeys[3]] || staticValues[0]

    setLockX(false)
    setLockX(false)
    setLockX(false)

    setValues([kt, kl, kr, kb])
    if (kr && kr === kl) {
      setLockX(true)
    }
    if (kt && kt === kb) {
      setLockY(true)
    }
    if (kr && kr === kl && kt === kb && kt === kr) {
      setLockC(true)
    }
  }, [context.tools.focused?.id])

  const [lockX, setLockX] = useState(false)
  const [lockY, setLockY] = useState(false)
  const [lockC, setLockC] = useState(false)

  const theme = useTheme()

  const cs = styles(theme, {
    lockX,
    lockY,
    lockC,
  })

  const onChange = (index: number, value: string) => {
    const newValues = values
    newValues[index] = value

    if (lockX) {
      newValues[1] = value
      newValues[2] = value
      if (lockC) {
        newValues[0] = value
        newValues[3] = value
      }
    }

    if (lockY) {
      newValues[0] = value
      newValues[3] = value
      if (lockC) {
        newValues[1] = value
        newValues[2] = value
      }
    }

    newValues.forEach((value, index) => {
      if (!focused) {
        return
      }
      if (value !== '-') {
        focused.props[propKeys[index]] = value
      } else {
        delete focused.props[propKeys[index]]
      }
    })
    setValues(values)
    context.tools.update()
  }

  return (
    <Block pb="0.5rem">
      <Paragraph
        pb=".25rem"
        pl=".25rem"
        lineHeight="0.75rem"
        color={(c) => c.light}
        children={props.label}
      />
      <Grid
        css={cs.container}
        templateColumns="5.25rem 5.25rem 5.25rem"
        templateRows="1fr 4rem 1fr"
      >
        <div />
        <ValueControl value={values[0]} onChange={(value) => onChange(0, value)} />
        <div />
        <ValueControl value={values[1]} onChange={(value) => onChange(1, value)} />
        <div css={cs.lock}>
          <div
            css={cs.lockX}
            onClick={() => {
              setLockX(!lockX)
              if (lockX) {
                setLockC(false)
              }
            }}
          >
            <div />
          </div>
          <div
            css={cs.lockY}
            onClick={() => {
              setLockY(!lockY)
              if (lockY) {
                setLockC(false)
              }
            }}
          >
            <div />
          </div>
          <div
            css={cs.lockC}
            onClick={() => {
              setLockC(!lockC)
              setLockX(!lockC)
              setLockY(!lockC)
            }}
            children={<Lock />}
          />
        </div>
        <ValueControl value={values[2]} onChange={(value) => onChange(2, value)} />
        <div />
        <ValueControl value={values[3]} onChange={(value) => onChange(3, value)} />
        <div />
      </Grid>
    </Block>
  )
}
export default ValueCross
