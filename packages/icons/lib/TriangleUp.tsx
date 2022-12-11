/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m16.2129 16h-8.426c-.673 0-1.28-.402-1.585-1.049-.345-.733-.245-1.6.258-2.21l4.214-5.09895c.672-.817 1.98-.817 2.652 0l4.213 5.09795c.504.611.605 1.478.259 2.211-.305.647-.912 1.049-1.585 1.049" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m8.0137 14.0002h7.895l-3.911-4.82202zm8.199 1.9998h-8.42598c-.672 0-1.28-.402-1.585-1.049-.345-.733-.245-1.6.258-2.21l4.21398-5.09895c.672-.817 1.981-.817 2.652 0l4.213 5.09795c.504.611.605 1.478.259 2.211-.305.647-.912 1.049-1.585 1.049z" fillRule="evenodd"/>,
    })
))