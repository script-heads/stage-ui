import code from './default.raw'
import editCell from './editCell.raw'
import expandCell from './expandCell.raw'
import sorting from './sorting.raw'
import pagination from './pagination.raw'
import bigdata from './bigdata.raw'
import dnd from './dnd.raw'

export const title = 'Table'
export const subtitle = 'displays complex data as table'
export const ns = 'TableTypes'
export const cases = [
    { label: 'Basic', code },
    { label: 'Edit', code: editCell },
    { label: 'Expand', code: expandCell },
    { label: 'Sorting', code: sorting },
    { label: 'Pagination', code: pagination },
    { label: 'Bigdata', code: bigdata },
    { label: 'Drag&Drop', code: dnd },
]
