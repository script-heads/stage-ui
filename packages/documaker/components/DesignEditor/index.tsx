import React, { Fragment, useEffect, useState } from 'react'
import * as CoreScope from '@flow-ui/core'
import * as LabScope from '@flow-ui/lab'
import Menu from 'components/Menu'

let id = 100
let link = {
    $id: 1,
    $: 'Surface',
    children: [
        {
            $: 'div'
        }
    ],
    target: null,
    reference: null
}
const Tree = (props: { object: any, needReload: () => void }) => {

    if (Array.isArray(props.object)) {
        return props.object.map(object =>
            Tree({ object, needReload: props.needReload })
        )
    }

    if (typeof props.object === 'object') {
        return (
            <CoreScope.Tree 
                draggable
                onDragStart={(e) => {
                    link.reference = props.object.$id
                }}
                onDragEnter={(e) => {
                    e.preventDefault()
                }}
                onDragLeave={(e) => {
                    link.target = null
                }}
                onDragOver={(e) => {
                    link.target = props.object.$id

                    e.preventDefault()
                }}
                onDrop={(e) => {
                    let ref: any = link

                    const findAndDelete = (tree) => {
                        for (const obj of tree) {
                            if (obj.$id === link.reference) {
                                ref.children = ref.children.filter(t => t.$id !== link.reference)
                                return obj
                            }
                            if (Array.isArray(obj.children)) {
                                const tmpRef = ref
                                ref = obj
                                const tmp = findAndDelete(obj.children)
                                if (tmp) {
                                    return tmp
                                } else {
                                    ref = tmpRef
                                }
                            }
                        }
                    }

                    const target = findAndDelete(ref.children)

                    if (target) {
                        const insert = (tree) => {
                            if (link.target === 1) {
                                link.children.push({
                                    ...target,
                                    $id: ++id
                                })
                                return
                            }
                            for (const obj of tree) {
                                if (obj.$id === link.target) {
                                    if (!obj.children) {
                                        obj.children = []
                                    }
                                    if (Array.isArray(obj.children)) {
                                        obj.children.push({
                                            ...target,
                                            $id: ++id
                                        })
                                    }
                                }
                                if (Array.isArray(obj.children)) {
                                    insert(obj.children)
                                }
                            }
                        }
                        insert(link.children)
                    }
                    props.needReload()
                }}
                defaultOpen 
                label={props.object.$}
                children={Tree({ 
                    object: props.object.children,
                    needReload: props.needReload
                })} 
            />
        )
    }
    
    return null
}

const Build = (props: { object: any, addBefore?: (object) => void, addAfter?: (object) => void }) => {
    if (Array.isArray(props.object)) {
        return (
            <Fragment>
                {
                    props.object.map((obj, key) =>
                        <Build 
                            key={key} 
                            object={obj} 
                            addBefore={object => {
                                props.object = [object].concat(props.object)
                            }}
                            addAfter={object => {
                                props.object = props.object.concat([object])
                            }}
                        />
                    )
                }
            </Fragment>
        )
    }
    if (typeof props.object === 'object') {
        let properties = {}
        let children: any = null
        for (const key of Object.keys(props.object)) {
            if (key !== 'children' && !key.match(`/^$/`)) {
                properties[key] = props.object[key]
            }
            if (key === 'children') {
                if (['object', 'array'].find(type => type === typeof props.object[key])) {
                    children = <Build object={props.object[key]}/>
                } else {
                    children = props.object[key]
                }
            }
        }
        const CC = CoreScope[props.object.$] || LabScope[props.object.$] || null

        let CCRef: any = null

        return (
            <Fragment>
                <CC
                    ref={ref => CCRef = ref}
                    {...properties}
                    children={children}
                    id={`${props.object.$}_${++id}`}
                    // onMouseDown={down}
                    draggable={true}
                    // onContextMenu={(e) => {
                    //     e.stopPropagation()
                    //     e.preventDefault()
                    // }}
                />
            </Fragment>
        )
    }
    return null
}
class DesignEditor extends React.Component<{ code: string }> {

    componentWillMount() {
        const addID = (object) => {
            if (Array.isArray(object)) {
                object.forEach(obj => addID(obj))
                return
            }
            if (typeof object === 'object') {
                object.$id = ++id
                if (object.children) {
                    addID(object.children)
                }
            }
        }
        link.children = eval(this.props.code)
        addID(link.children)
    }

    componentWillReceiveProps(props) {
        id = 0
        link.children = eval(props.code)
    }

    render() {
        try {
            return (
                <Fragment>
                    <CoreScope.Flexbox>
                        <CoreScope.Block>
                            <Tree 
                                object={link} 
                                needReload={() => {
                                    this.forceUpdate()
                                }} 
                            />
                        </CoreScope.Block>
                        <CoreScope.Block>
                            <Build object={link.children} />
                        </CoreScope.Block>
                    </CoreScope.Flexbox>
                    {/* <CoreScope.Popover 
                        align="none"
                        style={{ 
                            zIndex: 0xFFFF,
                            position: 'fixed', 
                            left: menu.x, 
                            top: menu.y 
                        }}
                        children={(
                            <CoreScope.Menu
                                value={0}
                                direction="column"
                                decoration="filled"
                                items={[{
                                    value: 'UP',
                                    content: 'Move up'
                                },
                                {
                                    value: 'DOWN',
                                    content: 'Move down'
                                },
                                {
                                    value: 'DEL',
                                    content: 'Delete',
                                    onClick: () => {
                                        console.log(value)
                                    }
                                }]}
                            />
                        )}
                    /> */}
                </Fragment>
            )
        } catch (error) {
            return (
                <div>Parse error: ${error.message}</div>
            )
        }
    }
}

// const DesignEditor = (props) => {
//     let overlay: HTMLDivElement | null = null
//     const mouseOver = (e) => {
//         console.log(e.target)
//     }
//     return (
//         <>
//             <div onMouseOver={mouseOver}>
//                 {props.children}
//             </div>
//             {/* <div 
//                 style={{
//                     position: 'absolute',
//                     width:'10rem',
//                     height:'10rem',
//                     background: 'red'
//                 }}
//                 ref={ref => overlay = ref}
//             /> */}
//         </>
//     )
// }

export default DesignEditor