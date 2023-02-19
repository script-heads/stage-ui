import { createID } from '@stage-ui/system'

export type PageType = {
  id: string
  url: string
  title: string
  glyph?: React.FC<React.SVGProps<SVGElement>>
  subtitle: string
  ns?: string
  cases?: {
    label: string
    code: string
  }[]
  lab?: boolean
  test?: React.FC
  sticky?: boolean
  default?: React.FC
  isExperimental?: boolean
}

export type PagesType = Record<string, PageType[]>

export type Order = {
  Layout: string[]
  Content: string[]
  Control: string[]
  Data: string[]
  Utilities: string[]
}

const order: Order = {
  Layout: [],
  Content: [],
  Control: [],
  Data: [],
  Utilities: [],
}

class Core {
  static instance: Core

  static getInstance() {
    if (!this.instance) {
      this.instance = new Core()
    }
    return this.instance
  }

  protected rawContent: Record<string, PageType>

  protected content: PagesType = {}

  constructor() {
    this.rawContent = import.meta.globEager('../pages/Components/*/*/index.tsx')
  }

  get pages(): PagesType {
    return this.content
  }

  public init() {
    this.content = this.makePages()
  }

  private makePages() {
    const pagesByPaths: PagesType = {}
    Object.keys(this.rawContent).forEach((path: string) => {
      const section = path.split('/').slice(-3)[0]
      const page = this.makePage(path)
      pagesByPaths[section] = pagesByPaths[section] || []
      pagesByPaths[section].push(page)
    })

    if (!order) return pagesByPaths

    const pagesByOrder: PagesType = {}

    Object.keys(order).forEach((section) => {
      pagesByOrder[section] = []
      const sectionOrder = order[section as keyof typeof order]

      sectionOrder.forEach((pageTitle) => {
        const findedPage = this.searchPage(pagesByPaths, 'title', pageTitle)
        if (findedPage) {
          pagesByOrder[section].push(findedPage)
        }
      })

      if (pagesByPaths[section]) {
        const otherPages = pagesByPaths[section].filter(
          (page) => !sectionOrder.includes(page.title),
        )
        pagesByOrder[section] = pagesByOrder[section].concat(otherPages)
      }
    })

    Object.keys(pagesByPaths).forEach((section) => {
      if (!pagesByOrder[section]) {
        pagesByOrder[section] = pagesByPaths[section]
      }
    })

    return pagesByOrder
  }

  private makePage(path: string) {
    const page = this.rawContent[path]
    const dirs = path.split('/').slice(1)
    const dirsCount = dirs.length
    const name = page.title || dirs[dirsCount] || 'Untitled'

    return {
      ...page,
      id: this.getId('PAGE', name),
      title: name,
      url: `/components/${name.toLowerCase().replace(' ', '-')}`,
    }
  }

  private getId(prefix: string, id?: string) {
    let uniqueId = ''
    if (id) {
      id.split('').forEach((char) => {
        uniqueId += char.charCodeAt(0).toString(16)
      })
    }
    if (!uniqueId) {
      uniqueId = createID()
    }
    return `${prefix}-${uniqueId}`
  }

  private searchPage(
    pages: PagesType,
    key: keyof PageType,
    value: unknown,
  ): PageType | null {
    let result: PageType | null = null
    Object.values(pages).every((sectionPages) => {
      result = sectionPages.find((page) => page[key] === value) || null
      if (result) return false
      return true
    })
    return result
  }

  public getPageById(id: string) {
    return this.searchPage(this.pages, 'id', id)
  }

  public getPageByUrl(url: string) {
    return this.searchPage(this.pages, 'url', url)
  }
}

export default Core.getInstance()
