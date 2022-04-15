/* eslint-disable @typescript-eslint/ban-types */
export default function isUndefined<V = undefined>(a: any): a is V {
  return typeof (a as undefined) === 'undefined'
}
