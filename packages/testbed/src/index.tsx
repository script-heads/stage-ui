import { light } from './theme'
import {
  Button,
  DatePicker,
  Drop,
  Modal,
  modal,
  PolymorphicButton,
  ReactFocusTrap,
  TextField,
  Viewport,
} from '@stage-ui/core'
import ReactDOM from 'react-dom'
import { useState, useEffect, useRef, HTMLProps } from 'react'
import LinkTypes from '@stage-ui/core/content/Link/types'
import ButtonTypes from '@stage-ui/core/control/Button/types'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)
  const debouncedOpen = useDebounce(open, 1000)
  const targetRef = useRef(null)

  const linkProps: ButtonTypes.PolymorphicProps<'a'> = {}
  return (
    <div>
      <button onClick={() => setOpen(true)}> focus </button>

      <div ref={targetRef}>123</div>

      <PolymorphicButton
        disabled
        as="a"
        href={''}
        leftChild={
          <img
            src="https://ismart-files.storage.yandexcloud.net/image_1_6c2cab5b4a.svg"
            alt="yandex"
          />
        }
        style={(t) => ({
          cursor: 'pointer',
          textDecoration: 'none !important',
          width: '100%',
          fontSize: '1.125rem',
          color: `${t.color.gray[900].string()} !important`,
          '&:hover': {
            backgroundColor: t.color.gray[100].string(),
          },
        })}
        borderColor="border"
        decoration="outline"
        size="xl"
        {...linkProps}
      >
        Продолжить с Яндекс ID
      </PolymorphicButton>
    </div>
  )
}

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

ReactDOM.render(
  <Viewport theme={light}>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
