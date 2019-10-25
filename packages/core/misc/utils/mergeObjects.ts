export default function mergeObjects(target: Object = {}, source: Object = {}, modify?: (value) => any) {

    let destination = Object.assign({}, target)
	for (let key of Object.keys(source)) {
        if (source[key] && Array.isArray(source[key]) === false && typeof source[key] === 'object') {
			destination[key] = mergeObjects(target[key], source[key], modify)
        } else {
			destination[key] = source[key]
        }
        if (modify) destination[key] = modify(destination[key])
	}
    return destination
}