/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m10 5.50007c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v1.49999h-4zm-2.99995 15.49993h9.99995v-14h-1v-1.5c0-1.378-1.122-2.5-2.5-2.5h-3c-1.37795 0-2.49995 1.122-2.49995 2.5v1.5h-1zm11.99995-14.00007v13.99997c1.654 0 3-1.346 3-3v-7.99997c0-1.654-1.346-3-3-3zm-16.99997 3c0-1.654 1.346-3 3-3v13.99997c-1.654 0-3-1.346-3-3z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m20 18c0 .551-.449 1-1 1h-2v-10h2c.551 0 1 .449 1 1zm-16.00003 0v-8c0-.551.449-1 1-1h2v10h-2c-.551 0-1-.449-1-1zm6-12.49993c0-.276.22403-.5.50003-.5h3c.276 0 .5.224.5.5v1.49999h-4.00003zm-.99994 13.49993h5.99997v-10h-5.99997zm9.99997-12h-3v-1.5c0-1.378-1.122-2.5-2.5-2.5h-3c-1.378 0-2.5 1.122-2.5 2.5v1.5h-3c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
    })
))