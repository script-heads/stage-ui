import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import Flexbox from 'shared/components/Flexbox'
import Text from 'shared/components/Text'
import useTheme from 'shared/hooks/useTheme'

interface AwaitProps<T> {
  that: (...args: any) => Promise<T>
  text?: string
  children: (data: T | undefined) => React.ReactNode
  whileLoading?: React.ReactNode
  afterError?: React.ReactNode
}

function Await<T>(props: AwaitProps<T>) {
  const [isDone, setDone] = useState(false)
  const [error, setError] = useState<any>()
  const [data, setData] = useState<T>()
  const theme = useTheme()

  const { children, afterError, whileLoading, that } = props

  useEffect(() => {
    let isCanceled = false
    ;(async () => {
      try {
        const data = await that()
        !isCanceled && setData(data)
      } catch (error) {
        !isCanceled && setError(error)
      } finally {
        !isCanceled && setDone(true)
      }
    })()
    return () => {
      isCanceled = true
    }
  }, [])

  return (
    <>
      {!isDone &&
        (whileLoading || (
          <Flexbox centered flex={1}>
            <ActivityIndicator color={theme.color.success.hex()} />
            {!!props.text && (
              <Text
                mt={16}
                color={theme.color.success.hex()}
                as={(t) => t.text.xs}
              >
                {props.text}
              </Text>
            )}
          </Flexbox>
        ))}
      {isDone &&
        error &&
        (afterError || (
          <Flexbox centered flex={1}>
            <Text color={theme.color.warning.hex()} as={(t) => t.text.m} pb={8}>
              🧑‍💻 Что-то пошло не так
            </Text>
            <Text
              color={theme.color.error.hex()}
              as={(t) => t.text.s}
            >{`${JSON.stringify(error)}`}</Text>
          </Flexbox>
        ))}
      {isDone && !error && children(data)}
    </>
  )
}

export default Await
