/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m18.4694 2.94631 2.4144 2.41445 1.7443-1.74701-2.4135-2.41355zm-6.4694 8.88009 2.6671-.2428 5.017-5.02246-2.4153-2.41535-5.0323 5.03228zm7 .1736c0-.552.447-1 1-1s1 .448 1 1v6c0 1.654-1.346 3-3 3h-12c-1.654 0-3-1.346-3-3v-12c0-1.654 1.346-3 3-3h6c.553 0 1 .448 1 1s-.447 1-1 1h-6c-.552 0-1 .449-1 1v12c0 .551.448 1 1 1h12c.552 0 1-.449 1-1z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m18.4694 2.94631 2.4144 2.41445 1.7443-1.74701-2.4135-2.41355zm-6.4694 8.88009 2.6671-.2428 5.017-5.02246-2.4153-2.41535-5.0323 5.03228zm7 .1736c0-.552.447-1 1-1s1 .448 1 1v6c0 1.654-1.346 3-3 3h-12c-1.654 0-3-1.346-3-3v-12c0-1.654 1.346-3 3-3h6c.553 0 1 .448 1 1s-.447 1-1 1h-6c-.552 0-1 .449-1 1v12c0 .551.448 1 1 1h12c.552 0 1-.449 1-1z" fillRule="evenodd"/>,
    })
))