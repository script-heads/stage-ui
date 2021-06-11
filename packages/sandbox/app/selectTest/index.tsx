import { Select } from '@stage-ui/core'
import SelectTypes from '@stage-ui/core/control/Select/types'
import React, { useState } from 'react'

const options = [
  { value: 1, text: 'one' },
  { value: 2, text: 'two' },
  { value: 3, text: 'three' },
]

const selectTest = () => {

  const [option, setOption] = useState<SelectTypes.Option[]>([])

  const handleOnChange = (item: SelectTypes.Option[]) => {
    console.log('change', item)
    setOption(item)
  }

  const handleOnSearch = (item: any) => {
    console.log('search', item)
  }

  return (
    <>
      <Select
        w="30rem"
        mt="xl"
        ml="xl"
        options={options}
        values={option}
        onSearch={handleOnSearch}
        onChange={handleOnChange}
        clearable
        searchable
      />
      <Select
        w="30rem"
        mt="30rem"
        // mt="xl"
        ml="xl"
        multiselect
        options={options}
        values={option}
        onSearch={handleOnSearch}
        onChange={handleOnChange}
        clearable
        searchable
      />
    </>
  )
}

export default selectTest