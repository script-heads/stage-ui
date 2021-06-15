import React, { useEffect, useState } from 'react'
import { Flexbox, Table, notify, Spinner, Select } from '@stage-ui/core'
import axios, { AxiosResponse } from 'axios'
import SelectTypes from '@stage-ui/core/control/Select/types'
import { ResponsePassenger, PassengersData } from './types'

type DataRow = {
  color: string
}

const endPoint = 'https://api.instantwebtools.net/v1'

const PlaygroundTable = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<PassengersData[]>([])
  const [pageSize, setPageSize] = useState<SelectTypes.Option[]>([{ value: 10, text: '10' }])

  const pages = async () => {
    setLoading(true)
    const { data }: AxiosResponse<ResponsePassenger> = await axios({
      method: 'GET',
      url: `${endPoint}/passenger`,
      params: { page: 0, size: pageSize[0].value },
    })

    setData(data.data)
    setLoading(false)
  }

  useEffect(() => {
    pages()
  }, [pageSize])

  return (
    <Flexbox direction="column">
      <Table
        key={loading.toString()}
        onChange={(data) => {
          notify({
            title: 'Row chage event',
            message: JSON.stringify(data),
            timeout: 3000,
          })
        }}
        columns={[
          {
            key: 'name',
            title: 'Name',
            render: (ctx) => <Flexbox>{ctx.row.name}</Flexbox>,
          },
          {
            key: '',
            dnd: (source, target, data) => {
              notify({
                title: 'Row dnd event fired',
                message: `Row ${source} moved to ${target}`,
                timeout: 3000,
              })
            },
          },
        ]}
        data={data}
        pagination={{ pageSize: pageSize[0].value }}
        footer={
          loading ? (
            <Flexbox justifyContent="center" w="100%">
              <Spinner size="xl" mx="auto" />
            </Flexbox>
          ) : undefined
        }
      />
      <Flexbox>
        <Select
          values={pageSize}
          options={[
            { value: 5, text: '5' },
            { value: 10, text: '10' },
            { value: 15, text: '15' },
            { value: 20, text: '20' },
          ]}
          onChange={(item) => setPageSize(item)}
          css={{
            maxWidth: '10rem',
          }}
        />
      </Flexbox>
    </Flexbox>
  )
}

export default PlaygroundTable
