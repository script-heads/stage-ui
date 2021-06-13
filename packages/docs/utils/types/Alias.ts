/* eslint-disable no-console */
import { OChild } from '.'
import { Abstract } from './Abstract'
import { Module } from './Module'

/**
 * Class for TypeAliases
 */
export class Alias extends Abstract {
  module!: Module

  constructor(child: OChild, _module: Module) {
    super(child)
    if (child.kind !== this.$kinds.TYPE_ALIAS) {
      console.error(`Doc: child(${child.id}) with kind ${child.kind} is not an Alias!`)
      return
    }
    this.module = _module
  }
}
