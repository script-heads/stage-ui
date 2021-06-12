import { OChild } from '.'
import Abstract from './Abstract'
import Alias from './Alias'
import Interface from './Interface'
import Root from './Root'

/**
 * Class for Modules
 */
export class Module extends Abstract {
  root: Root

  constructor(child: OChild, _root: Root) {
    super(child)
    if (child.kind !== this.$kinds.MODULE) {
      console.error(`Doc: child(${child.id}) with kind ${child.kind} is not a Module!`)
      return
    }
    this.root = _root
  }

  /**
   * Get inreface by its name
   */
  findInterface(name: string) {
    return this.interfaces.find((child) => child.name === name) || null
  }

  /**
   * List of all interfaces
   */
  private interfaceStorage: Interface[] = []

  get interfaces() {
    return this.storageReturnHelper(this, 'interfaceStorage', [this.$kinds.INTERFACE], Interface)
  }

  /**
   * List of all type aliaces
   */
  private aliaseStorage: Alias[] = []

  get aliases() {
    return this.storageReturnHelper(this, 'aliaseStorage', [this.$kinds.TYPE_ALIAS], Alias)
  }

  /**
   * Find reference by its name
   */
  findReferenceByName(childName: string) {
    const child = this.$data.children.find((i) => i.name === childName)
    if (child) {
      switch (child.kind) {
        case this.$kinds.INTERFACE:
          return new Interface(child, this)
        case this.$kinds.TYPE_ALIAS:
          return new Alias(child, this)
      }
    }
    return null
  }
}

export default Module
