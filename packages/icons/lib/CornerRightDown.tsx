/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m18.7808 14.3755c-.345-.432-.975-.501-1.405-.156l-3.376 2.7v-8.91901c0-1.655-1.345-3-3-3h-5c-.552 0-1 .447-1 1 0 .552.448 1 1 1h5c.552 0 1 .448 1 1v8.91901l-3.375-2.7c-.43-.345-1.06-.276-1.406.156-.345.431-.275 1.061.157 1.405l5 4c.182.146.403.22.624.22s.442-.074.625-.22l5-4c.431-.344.501-.974.156-1.405" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m18.7808 14.3755c-.345-.432-.975-.501-1.405-.156l-3.376 2.7v-8.91901c0-1.655-1.345-3-3-3h-4.99998c-.552 0-1 .447-1 1 0 .552.448 1 1 1h4.99998c.552 0 1 .448 1 1v8.91901l-3.37498-2.7c-.43-.345-1.06-.276-1.406.156-.345.431-.275 1.061.157 1.405l4.99998 4c.182.146.403.22.624.22s.442-.074.625-.22l5-4c.431-.344.501-.974.156-1.405" fillRule="evenodd"/>,
    })
))