/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m8.55571 16c-.306 0-.556-.249-.556-.556v-7.444h7.44499c.306 0 .555.249.555.556v7.444zm12.44399 0h-3v-7.444c0-1.41-1.146-2.556-2.555-2.556h-7.44499v-3c0-.553-.447-1-1-1-.552 0-1 .447-1 1v3h-3c-.552 0-1 .447-1 1s.448 1 1 1h3v7.444c0 1.41 1.147 2.556 2.556 2.556h7.44399v3c0 .553.448 1 1 1 .553 0 1-.447 1-1v-3h3c.553 0 1-.447 1-1s-.447-1-1-1z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m8.55569 16c-.306 0-.556-.249-.556-.556v-7.444h7.44501c.306 0 .555.249.555.556v7.444zm12.44401 0h-3v-7.444c0-1.41-1.146-2.556-2.555-2.556h-7.44501v-3c0-.553-.447-1-1-1-.552 0-1 .447-1 1v3h-3c-.552 0-1 .447-1 1s.448 1 1 1h3v7.444c0 1.41 1.14701 2.556 2.55601 2.556h7.444v3c0 .553.448 1 1 1 .553 0 1-.447 1-1v-3h3c.553 0 1-.447 1-1s-.447-1-1-1z" fillRule="evenodd"/>,
    })
))