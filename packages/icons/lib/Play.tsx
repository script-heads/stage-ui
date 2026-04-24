/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M13.333 11.8909C13.3333 8.82737 16.7698 6.96754 19.3975 8.61353L51.5049 28.7288C53.9431 30.2549 53.943 33.7543 51.5049 35.2805L19.3975 55.3879C16.7697 57.0303 13.3331 55.1744 13.333 52.1106V11.8909Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M13.333 11.8909C13.3333 8.82737 16.7698 6.96754 19.3975 8.61353L51.5049 28.7288C53.9431 30.2549 53.943 33.7543 51.5049 35.2805L19.3975 55.3879C16.7697 57.0303 13.3331 55.1744 13.333 52.1106V11.8909Z"/>,
    })
))