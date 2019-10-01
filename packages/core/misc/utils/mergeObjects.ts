export default function mergeObjects(target: Object, source?: Object, modify?: (value) => any) {

    if (!source) return target;

    var destination = {};
    Object.assign(destination, target)

    for (let key of Object.keys(source)) {
        if (source[key] instanceof Object) {
            Object.assign(
                source[key],
                mergeObjects(target[key], source[key], modify)
            );
        }

        if (modify) source[key] = modify(source[key]);
    }

    Object.assign(destination, source);
    return destination;
}