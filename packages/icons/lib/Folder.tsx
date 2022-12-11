/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m19.5 20.5h-14.99998c-1.378 0-2.5-1.091-2.5-2.432v-12.136c0-1.341 1.122-2.432 2.5-2.432h4.601c.299 0 .584.135.774.367l2.59898 3.179h7.026c1.378 0 2.5 1.091 2.5 2.432v8.59c0 1.341-1.122 2.432-2.5 2.432" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m4.00002 13.7556v4.313c0 .238.224.432.5.432h14.99998c.276 0 .5-.194.5-.432v-8.59005c0-.239-.224-.432-.5-.432h-7.5c-.3 0-.584-.135-.774-.368l-2.59998-3.178h-4.126c-.276 0-.5.193-.5.431zm15.49998 6.7449h-15c-1.378 0-2.5-1.091-2.5-2.432v-12.13701c0-1.341 1.122-2.431 2.5-2.431h4.601c.299 0 .584.134.774.367l2.599 3.179h7.026c1.378 0 2.5 1.09 2.5 2.432v8.59001c0 1.341-1.122 2.432-2.5 2.432z" fillRule="evenodd"/>,
    })
))