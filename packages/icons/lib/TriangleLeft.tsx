/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m13.5439 18.0012c-.471 0-.935-.157-1.303-.461l-5.09904-4.214c-.408-.336-.642-.82-.642-1.326s.234-.99.641-1.326l5.10004-4.21295c.608-.504 1.475-.605 2.209-.26.648.306 1.05.913 1.05 1.586v8.42595c0 .673-.402 1.28-1.05 1.586-.289.136-.599.202-.906.202" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m8.67818 12.0023 4.82202 3.983v-7.89299zm4.86602 5.9989c-.471 0-.935-.157-1.303-.461l-5.10002-4.214c-.407-.336-.641-.82-.641-1.326s.234-.99.641-1.326l5.10002-4.21295c.608-.504 1.475-.605 2.209-.26.647.306 1.05.913 1.05 1.586v8.42595c0 .673-.403 1.28-1.05 1.586-.289.136-.599.202-.906.202z" fillRule="evenodd"/>,
    })
))