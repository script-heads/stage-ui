/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m17.707 16.293-8.289-8.289 5.583-.004c.552 0 .999-.449.999-1.001s-.448-.999-1-.999h-.001l-7.95.006c-.55.001-.995.445-.999.994l-.05 7.994c-.004.552.441 1.003.994 1.006h.006c.55 0 .996-.444 1-.994l.035-5.557 8.258 8.258c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m17.707 16.293-8.28897-8.289 5.58297-.004c.552 0 .999-.449.999-1.001s-.448-.999-1-.999h-.001l-7.94997.006c-.55.001-.995.445-.999.994l-.05 7.994c-.004.552.441 1.003.994 1.006h.006c.55 0 .996-.444 1-.994l.035-5.557 8.25797 8.258c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414" fillRule="evenodd"/>,
    })
))