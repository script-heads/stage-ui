import basic from './basic.raw?raw'
import editCell from './editCell.raw?raw'
import expandCell from './expandCell.raw?raw'
import sorting from './sorting.raw?raw'
import pagination from './pagination.raw?raw'
import bigdata from './bigdata.raw?raw'
import selectable from './selectable.raw?raw'

export const title = 'Table'
export { ReactComponent as glyph } from './Table.svg'
export const ns = 'TableTypes'
export const cases = [
  { label: 'Table', code: basic },
  { label: 'Edit', code: editCell },
  { label: 'Expand', code: expandCell },
  { label: 'Sorting', code: sorting },
  { label: 'Pagination', code: pagination },
  { label: 'Bigdata', code: bigdata },
  { label: 'Selectable', code: selectable },
]
