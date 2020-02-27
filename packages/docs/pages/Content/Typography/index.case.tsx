import header from './header.raw'
import display from './display.raw'
import paragraph from './paragraph.raw'
import link from './link.raw'
import text from './text.raw'

export const title = 'Typography'
export const subtitle = 'Basic text renders as an <h1>,<p>,<a> but with theme support'
export const cases = [
    { label: 'Header', code: header },
    { label: 'Display', code: display },
    { label: 'Text', code: text },
    { label: 'Paragraph', code: paragraph },
    { label: 'Link', code: link },
]
