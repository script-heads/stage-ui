import { Table, ScrollView } from '@stage-ui/core'
import React from 'react'

export default () => {
  return (
    <ScrollView mode="hidden">
      <Table
        columns={[{ title: 'Row', key: 'row', sort: 'ASC' }]}
        data={'.'
          .repeat(1000)
          .split('.')
          .map((_, index) => ({
            row: index.toString(16),
          }))}
        rowMountType="onlyWhenVisible"
        rowHeight={() => 20}
      />
    </ScrollView>
  )
}
