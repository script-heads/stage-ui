/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m16 13.3335c-1.4693 0-2.6666 1.1973-2.6666 2.6667v32c0 1.4693 1.1973 2.6666 2.6666 2.6666h32c1.4694 0 2.6667-1.1973 2.6667-2.6666v-32c0-1.4694-1.1973-2.6667-2.6667-2.6667zm32 42.6665h-32c-4.4107 0-8-3.5893-8-8v-32c0-4.4107 3.5893-8 8-8h32c4.4107 0 8 3.5893 8 8v32c0 4.4107-3.5893 8-8 8z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m16 13.3335c-1.4693 0-2.6666 1.1973-2.6666 2.6667v32c0 1.4693 1.1973 2.6666 2.6666 2.6666h32c1.4694 0 2.6667-1.1973 2.6667-2.6666v-32c0-1.4694-1.1973-2.6667-2.6667-2.6667zm32 42.6665h-32c-4.4107 0-8-3.5893-8-8v-32c0-4.4107 3.5893-8 8-8h32c4.4107 0 8 3.5893 8 8v32c0 4.4107-3.5893 8-8 8z" fillRule="evenodd"/>,
    })
))