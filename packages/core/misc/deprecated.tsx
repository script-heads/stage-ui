import React, { forwardRef } from 'react'
import Header from '../content/Header'
import Display from '../content/Display'
import Paragraph from '../content/Paragraph'
import Text from '../content/Text'
import Anchor from '../content/Anchor'
import Types from './hocs/Typography/types'

/**
 * ANCHOR
 */
export const A = forwardRef(function A(props: Types.AnchorProps, ref) {
    return <Anchor ref={ref} {...props} />
})

/**
 * CAPTIONS
 */
export const C1 = forwardRef(function C1(props: Types.Props, ref) {
    return <Text ref={ref} {...props}/>
})

export const C2 = forwardRef(function C2(props: Types.Props, ref) {
    return <Text size={2} ref={ref} {...props}/>
})

export const C3 = forwardRef(function C3(props: Types.Props, ref) {
    return <Text size={3} ref={ref} {...props}/>
})

export const C4 = forwardRef(function C4(props: Types.Props, ref) {
    return <Text size={4} ref={ref} {...props}/>
})

/**
 * DISPLAYS
 */
export const D1 = forwardRef(function D1(props: Types.Props, ref) {
    return <Display ref={ref} {...props}/>
})

export const D2 = forwardRef(function D2(props: Types.Props, ref) {
    return <Display size={2} ref={ref} {...props}/>
})

export const D3 = forwardRef(function D3(props: Types.Props, ref) {
    return <Display size={3} ref={ref} {...props}/>
})

export const D4 = forwardRef(function D4(props: Types.Props, ref) {
    return <Display size={4} ref={ref} {...props}/>
})

/**
 * HEADERS
 */
export const H1 = forwardRef(function H1(props: Types.Props, ref) {
    return <Header ref={ref} {...props}/>
})

export const H2 = forwardRef(function H2(props: Types.Props, ref) {
    return <Header size={2} ref={ref} {...props}/>
})

export const H3 = forwardRef(function H3(props: Types.Props, ref) {
    return <Header size={3} ref={ref} {...props}/>
})

export const H4 = forwardRef(function H4(props: Types.Props, ref) {
    return <Header size={4} ref={ref} {...props}/>
})


/**
 * TEXTS
 */
export const T1 = forwardRef(function T1(props: Types.Props, ref) {
    return <Paragraph ref={ref} {...props}/>
})

export const T2 = forwardRef(function T2(props: Types.Props, ref) {
    return <Paragraph size={2} ref={ref} {...props}/>
})

export const T3 = forwardRef(function T2(props: Types.Props, ref) {
    return <Paragraph size={3} ref={ref} {...props}/>
})

export const T4 = forwardRef(function T4(props: Types.Props, ref) {
    return <Paragraph size={4} ref={ref} {...props}/>
})