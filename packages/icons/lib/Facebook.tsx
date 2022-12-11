/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m17 3.5c0-.276-.225-.5-.5-.5h-2.5c-2.762 0-5 2.015-5 4.5v2.7h-2.5c-.276 0-.5.224-.5.5v2.6c0 .276.224.5.5.5h2.5v6.7c0 .276.224.5.5.5h3c.275 0 .5-.224.5-.5v-6.7h2.619c.225 0 .422-.15.483-.366l.721-2.6c.089-.318-.151-.634-.481-.634h-3.342v-2.7c0-.497.447-.9 1-.9h2.5c.275 0 .5-.224.5-.5z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m10 20.0001h2v-6.2c0-.553.447-1 1-1h2.24l.445-1.6h-2.685c-.553 0-1-.447-1-1v-2.70004c0-1.048.897-1.9 2-1.9h2v-1.59999h-2c-2.206 0-4 1.56999-4 3.49999v2.70004c0 .553-.44698 1-.99998 1h-2v1.6h2c.553 0 .99998.447.99998 1zm3 1.9999h-4c-.553 0-1-.447-1-1v-6.2h-2c-.553 0-1-.447-1-1v-3.6c0-.553.447-1 1-1h2v-1.7c0-3.032 2.691-5.5 6-5.5h3c.553 0 1 .447 1 1v3.6c0 .552-.447 1-1 1h-3v1.6h3c.312 0 .607.147.796.395.189.249.251.572.168.873l-1 3.599c-.12.433-.515.733-.964.733h-2v6.2c0 .553-.447 1-1 1z" fillRule="evenodd"/>,
    })
))