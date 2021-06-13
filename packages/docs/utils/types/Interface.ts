/* eslint-disable no-console */
import { OChild } from '.'
import { Abstract } from './Abstract'
import { Module } from './Module'
import { Property } from './Property'

/**
 * Class for Interfaces
 */
export class Interface extends Abstract {
  module!: Module

  constructor(child: OChild, _module: Module) {
    super(child)
    if (child.kind !== this.$kinds.INTERFACE) {
      console.error(`Doc: child(${child.id}) with kind ${child.kind} is not an Interface!`)
      return
    }
    this.module = _module
  }

  /**
   * Get property by its name
   */
  findProperty(name: string) {
    return this.types.find((child) => child.name === name) || null
  }

  /**
   * List of all types
   */
  private typeStorage: Property[] = []

  get types() {
    return this.storageReturnHelper(this, 'typeStorage', [this.$kinds.PROP], Property, (item) => {
      if (item.$data.inheritedFrom) {
        return false
      }
      return true
    })
  }

  private extendedTypeStorage: Interface[] = []

  get extendedTypes() {
    if (this.extendedTypeStorage) {
      return this.extendedTypeStorage
    }
    this.extendedTypeStorage = []
    if (this.$data.extendedTypes) {
      for (const type of this.$data.extendedTypes) {
        const found = this.module.root.find(type.id)
        if (found && found.kind === this.$kinds.INTERFACE) {
          this.extendedTypeStorage.push(new Interface(found, this.module))
        }
      }
    }
    return this.extendedTypeStorage
  }
}
