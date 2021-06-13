import basic from './basic.raw'
import editCell from './editCell.raw'
import expandCell from './expandCell.raw'
import sorting from './sorting.raw'
import pagination from './pagination.raw'
import bigdata from './bigdata.raw'
import dnd from './dnd.raw'

export const title = 'Table'
export const glyph = require(`./Table.svg`)
export const ns = 'TableTypes'
export const cases = [
  { label: 'Basic', code: basic },
  { label: 'Edit', code: editCell },
  { label: 'Expand', code: expandCell },
  { label: 'Sorting', code: sorting },
  { label: 'Pagination', code: pagination },
  { label: 'Bigdata', code: bigdata },
  { label: 'Drag&Drop', code: dnd },
]
