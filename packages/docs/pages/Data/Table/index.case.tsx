import code from './default.raw'
import editCell from './editCell.raw'
import expandCell from './expandCell.raw'
import sorting from './sorting.raw'
import pagination from './pagination.raw'

export const title = 'Table'
export const subtitle = ''
export const ns = 'TableTypes'
export const cases = [
    { label: 'Basic', code },
    { label: 'Edit', code: editCell },
    { label: 'Expand', code: expandCell },
    { label: 'Sorting', code: sorting },
    { label: 'Pagination', code: pagination },
]
