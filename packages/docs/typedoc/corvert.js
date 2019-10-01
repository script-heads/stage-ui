const fs = require('fs')

let Types = {}
const doc = JSON.parse(fs.readFileSync(__dirname + '/original.json', 'utf-8'));
const find = (id, item = doc) => {
    if (item.id === id) return item;
    if (item.children) {
        for (let child of item.children) {
            let res = find(id, child)
            if (res) return res;
        }
    }
    return null
}

const merger = (item) => {
    if (item.groups) delete item.groups
    if (item.sources) delete item.sources
    if (item.kind) delete item.kind
    if (item.extendedBy) delete item.extendedBy
    if (item.elementType) delete item.elementType

    if (item.inheritedFrom) {
        item.inheritedFrom.reference = find(item.inheritedFrom.id)
    }
    if (item.type && item.type.type === "reference") {
        item.type.reference = find(item.type.id)
    }
    if (Array.isArray(item.extendedTypes)) {
        item.extendedTypes.map(item => {
            if (item.id) item.reference = find(item.id)
        })
    }
    if (item.children) {
        for (let child of item.children) {
            merger(child)
        }
    }
}
merger(doc)

for (const namespace of doc.children) {
    if (namespace.kindString === "Module") {
        for (const props of namespace.children) {
            if (!props || props.kindString !== "Interface") {
                // console.log(props)
                continue;
            }

            props.props = []
            const pushProps = (item) => {
                if (!item.children) {
                    return;
                }

                let name = item.name;
                let comment = "";
                let weight = 99999;
                const children = item.children.filter(item => !item.inheritedFrom)

                if (item.comment) {
                    if (item.comment.tags) {
                        const tagName = item.comment.tags.find(tag => tag.tag === "name")
                        const tagWeight = item.comment.tags.find(tag => tag.tag === "weight")

                        if (tagName && tagName.text) {
                            name = tagName.text.trim()
                        }
                        if (tagWeight && tagWeight.text) {
                            weight = parseInt(tagWeight.text.trim())
                        }
                    }
                    if (item.comment.shortText) {
                        comment = item.comment.shortText
                    }
                }

                children.map(child => {
                    // child.values = ["unknown"]
                    if (child.comment) {
                        if (child.comment.tags) {
                            let deprecated = child.comment.tags.find(tag => tag.tag === "deprecated")
                            if (deprecated) {
                                child.deprecated = deprecated.text || true
                            }
                        }
                        if (child.comment.shortText) {
                            child.comment = child.comment.shortText
                        }
                    }
                    if (child.type.type === "array") {
                        child.type.type = "union"
                        let t = {
                            type: child.type.elementType.type,
                        }
                        if (child.type.elementType.name) {
                            t.name = child.type.elementType.name + "[]";
                        }
                        if (child.type.elementType.value) {
                            t.value = child.type.elementType.value + "[]";
                        }
                        child.type.types = [t]
                    }
                    if (child.type.type === "reference") {
                        if (child.type.reference && child.type.reference.type && child.type.reference.type.type === "union") {
                            child.type.type = child.type.reference.type.type;
                            child.type.types = child.type.reference.type.types;
                        } else {
                            child.values = [child.type.name]
                            child.type = "reference"
                        }
                    }
                    if (child.type.type === "intrinsic") {
                        child.values = [child.type.name]
                        child.type = "intrinsic"
                    }
                    if (child.type.type === "union") {

                        let type = "unknown"
                        child.values = []
                        child.type.types.map(item => {
                            let isArray = item.type === "array";
                            if (isArray) {
                                item.type = item.elementType.type;
                                if (item.elementType.name) {
                                    item.name = item.elementType.name + "[]";
                                }
                                if (item.elementType.value) {
                                    item.value = item.elementType.value + "[]";
                                }
                            }
                            if (item.type === "reference") {
                                type = "reference"
                                child.values.push(item.name)
                            }
                            if (item.type === "stringLiteral") {
                                type = "stringLiteral"
                                if (item.value !== "undefined") {
                                    child.values.push(item.value)
                                }
                            }
                            if (item.type === "intrinsic") {
                                type = "intrinsic"
                                if (item.name !== "undefined") {
                                    child.values.push(item.name)
                                }
                            }
                            if (item.type === "reflection") {
                                type = "reflection"
                                if (item.declaration) {
                                    const signatures = item.declaration.signatures || []
                                    if (signatures.length === 1) {
                                        const s = signatures[0];
                                        let params = (s.parameters || [])
                                            .map(param => `${param.name}: ${param.type.name}`)
                                            .join(", ")
                                        child.values.push(`(${params}) => ${s.type.name}`)
                                    }
                                }
                            }
                        })
                        if (child.values.length === 0) {
                            child.values.push("unknown")
                        }
                        child.type = type
                    }
                    if (child.flags) {
                        child.isOptional = child.flags.isOptional
                        delete child.flags
                    }
                    delete child.kindString
                })
                if (children.length > 0) {
                    props.props.push({ name, comment, weight, children })
                }
            }

            pushProps(props);

            if (props.extendedTypes) {
                //TODO: recursive
                props.extendedTypes.map(extendedType => {
                    const ref = extendedType.reference;
                    if (ref) {
                        if (Array.isArray(ref.extendedTypes)) {
                            ref.extendedTypes.map(item => {
                                const ref = item.reference;
                                if (ref) {
                                    pushProps(ref);
                                }
                            })
                        } else {
                            pushProps(ref);
                        }
                    } else {
                        console.warn("Unexpected extendedType reference")
                    }
                })

            }
            const p = props.props.sort((a, b) => (a.weight < b.weight))
            if (!Types[namespace.name]) {
                Types[namespace.name] = p
            } else {
                Types[namespace.name] = p.concat(Types[namespace.name])
            }
        }
    }

}

fs.writeFileSync(__dirname + "/types.json", JSON.stringify(Types, null, 4))

console.log("Types created successfully!")