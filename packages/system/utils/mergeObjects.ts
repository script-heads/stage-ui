export default function mergeObjects(target: Object = {}, src: Object = {}, modify?: (value) => any) {
    const keys = Object.keys(src)
    const dst = Object.assign({}, target)
	for (let key of keys) {
        if (typeof src[key] === 'object' && !Array.isArray(src[key])) {
			dst[key] = mergeObjects(target[key], src[key], modify)
        } else {
			dst[key] = src[key]
        }
        if (modify) dst[key] = modify(dst[key])
	}
    return dst
}