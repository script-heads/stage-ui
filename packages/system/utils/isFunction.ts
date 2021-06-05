export default function isFunction(a: any): a is Function {
  return typeof (a as Function) === 'function'
}
