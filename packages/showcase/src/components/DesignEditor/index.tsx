import React, { Fragment, useEffect, useState } from 'react'
import * as CoreScope from '@flow-ui/core'
import * as LabScope from '@flow-ui/lab'
import Menu from 'components/Menu'

let tree: unknown = {
    $: 'div'
}
let id = 0
let link = {
    target: null,
    reference: null
}
const Tree = (props: { object: any }) => {

    if (Array.isArray(props.object)) {
        return props.object.map(object =>
            Tree({ object })
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
                    console.log(link)
                }}
                defaultOpen 
                label={props.object.$}
                children={Tree({ object: props.object.children })} 
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
        let id = 0x0
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
        tree = eval(this.props.code)
        addID(tree)
    }

    componentWillReceiveProps(props) {
        id = 0
        tree = eval(props.code)
    }

    render() {
        try {
            return (
                <Fragment>
                    <CoreScope.Flexbox>
                        <CoreScope.Block>
                            <Tree object={tree} />
                        </CoreScope.Block>
                        <CoreScope.Block>
                            <Build object={tree} />
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