/**
 * Shared zIndex for Drops & Modals
 */
export default class SharedZIndex {
  private static index = 200

  static get increment() {
    return ++this.index
  }
}
