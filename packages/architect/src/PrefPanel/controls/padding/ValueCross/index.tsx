import { Block, Button, Grid, Paragraph, useTheme } from '@flow-ui/core'
import { Lock } from '@flow-ui/core/icons'
import { ButtonGroup } from '@flow-ui/lab'
import { useEffect, useState } from 'react'
import { context } from '../../../../..'
import styles from './styles'

const staticValues = [
    0,
    0.125,
    0.25,
    0.5,
    0.75,
    1,
]

type Props = {
    propKeys: string[]
    label: string
}

const ValueControl = (props: { value: number, onChange: (value: number) => void }) => {
    return (
        <ButtonGroup alignSelf="center">
            {
                staticValues.map((value, index) => (
                    <Button
                        key={index}
                        flex={1}
                        size="xs"
                        children={index ? index : '✕'}
                        decoration={(value === props.value && value !== 0)
                            ? 'filled'
                            : 'outline'}
                        onClick={() => {
                            props.onChange(value)
                        }}
                    />
                ))
            }
        </ButtonGroup>
    )
}
const ValueCross = (props: Props) => {
    const { propKeys } = props
    const { focused } = context.tools
    if (!focused) {
        return null
    }

    const [values, setValues] = useState([0,0,0,0])

    useEffect(() => {
        const kt = parseFloat(focused.props[propKeys[0]] || staticValues[0])
        const kl = parseFloat(focused.props[propKeys[1]] || staticValues[0])
        const kr = parseFloat(focused.props[propKeys[2]] || staticValues[0])
        const kb = parseFloat(focused.props[propKeys[3]] || staticValues[0])
        
        setLockX(false)
        setLockX(false)
        setLockX(false)

        setValues([kt,kl,kr,kb])
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
        lockC
    })

    const onChange = (index: number, value: number) => {
        let newValues = values.map((v, i) => (i === index) ? value : v)
        if (lockX) {
            const val = [1, 2].includes(index)
                ? value
                : Math.max(newValues[1], newValues[2])
            newValues[1] = val
            newValues[2] = val
            if (lockC) {
                newValues[0] = val
                newValues[3] = val
            }
        }
        if (lockY) {
            const val = [0, 3].includes(index)
                ? value
                : Math.max(newValues[0], newValues[3])
            newValues[0] = val
            newValues[3] = val
            if (lockC) {
                newValues[1] = val
                newValues[2] = val
            }
        }
        newValues.forEach((value, index) => {
            if (!focused) {
                return
            }
            if (value) {
                focused.props[propKeys[index]] = value + 'rem'
            } else {
                delete focused.props[propKeys[index]]
            }
        })
        setValues(newValues)
        context.tools.update()
    }

    return (
        <Block pb="0.5rem">
            <Paragraph
                pb=".25rem"
                pl=".25rem"
                lineHeight="0.75rem"
                color={c => c.light}
                children={props.label}
            />
            <Grid css={cs.container} templateColumns="5.25rem 5.25rem 5.25rem" templateRows="1fr 4rem 1fr">
                <div />
                <ValueControl 
                    value={values[0]} 
                    onChange={(value) => onChange(0, value)}
                />
                <div />
                <ValueControl 
                    value={values[1]} 
                    onChange={(value) => onChange(1, value)}
                />
                <div css={cs.lock}>
                    <div css={cs.lockX} onClick={() => {
                        setLockX(!lockX)
                        if (lockX) {
                            setLockC(false)
                        }
                    }}>
                        <div />
                    </div>
                    <div css={cs.lockY} onClick={() => {
                        setLockY(!lockY)
                        if (lockY) {
                            setLockC(false)
                        }
                    }}>
                        <div />
                    </div>
                    <div
                        css={cs.lockC}
                        onClick={() => {
                            setLockC(!lockC)
                            setLockX(!lockC)
                            setLockY(!lockC)
                        }}
                        children={(
                            <Lock />
                        )}
                    />
                </div>
                <ValueControl 
                    value={values[2]} 
                    onChange={(value) => onChange(2, value)}
                />
                <div />
                <ValueControl 
                    value={values[3]} 
                    onChange={(value) => onChange(3, value)} 
                />
                <div />
            </Grid>
        </Block>
    )
}
export default ValueCross