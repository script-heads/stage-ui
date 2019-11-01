import React from 'react'

const DesignEditor = (props) => {
    let overlay: HTMLDivElement | null = null
    const mouseOver = (e) => {
        console.log(e.target)
    }
    return (
        <>
            <div onMouseOver={mouseOver}>
                {props.children}
            </div>
            {/* <div 
                style={{
                    position: 'absolute',
                    width:'10rem',
                    height:'10rem',
                    background: 'red'
                }}
                ref={ref => overlay = ref}
            /> */}
        </>
    )
}

export default DesignEditor