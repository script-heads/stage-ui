/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m48 8h-32c-4.4107 0-8 3.5893-8 8v32c0 4.4107 3.5893 8 8 8h18.6667v-26.6667h10.6666v26.6667h2.6667c4.4107 0 8-3.5893 8-8v-32c0-4.4107-3.5893-8-8-8z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m32 50.6667h10.6667v-26.6667h-10.6667zm-16-37.3332c-1.4693 0-2.6666 1.1973-2.6666 2.6667v32c0 1.4693 1.1973 2.6666 2.6666 2.6666h32c1.4694 0 2.6667-1.1973 2.6667-2.6666v-32c0-1.4694-1.1973-2.6667-2.6667-2.6667zm32 42.6665h-32c-4.4107 0-8-3.5893-8-8v-32c0-4.4107 3.5893-8 8-8h32c4.4107 0 8 3.5893 8 8v32c0 4.4107-3.5893 8-8 8z" fillRule="evenodd"/>,
    })
))