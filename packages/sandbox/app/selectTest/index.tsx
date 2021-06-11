import React, { useState, useEffect } from 'react'
import { Flexbox, Table, notify, Spinner, Select} from '@stage-ui/core'
import SelectTypes from '@stage-ui/core/control/Select/types'

const options = [
  { value: 1, text: 'one' },
  { value: 2, text: 'two' },
  { value: 3, text: 'three' },
]

const SelectTest= () => {

  const [option, setOption] = useState<SelectTypes.Option[]>([])

  const handleOnChange = (item: SelectTypes.Option[]) => {
    if (!Array.isArray(item)) {
      return
    }

    console.log(item)
    console.log('object')
    setOption(item)
  }


  return <Select w="30rem" mt="xl" ml="xl" options={options} values={option} onChange={handleOnChange} clearable searchable/>
}

export default SelectTest