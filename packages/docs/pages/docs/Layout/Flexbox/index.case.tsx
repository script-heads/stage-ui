import code from './default.raw'
import flexItem from './flexItem.raw'
import flexEnd from './flexEnd.raw'
import spaceBetween from './spaceBetween.raw'
import column from './column.raw'

export const title = 'Flexbox'
export const subtitle = 'quickly manage the responsive layout, alignment, and sizing'
export const ns = 'FlexboxTypes'
export const cases = [
    {
        label: 'Basic',
        code
    },
    {
        label: 'Flex item',
        code: flexItem
    },
    {
        label: 'Flex end',
        code: flexEnd
    },
    {
        label: 'Space between',
        code: spaceBetween
    },
    {
        label: 'Column',
        code: column
    }
]
