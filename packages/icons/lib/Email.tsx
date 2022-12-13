/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m50.6839 16-17.3467 11.9147c-.8186.4666-1.8213.4666-2.6399 0l-17.3467-11.9147zm0-5.3335h-37.3333c-4.41068 0-8.00001 3.5893-8.00001 8v26.6667c0 4.4106 3.58933 8 8.00001 8h37.3333c4.4107 0 8-3.5894 8-8v-26.6667c0-4.4107-3.5893-8-8-8z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m50.6667 47.9997h-37.3333c-1.4693 0-2.6666-1.1947-2.6666-2.6667v-26l19.7333 14.8c.4747.3573 1.0373.5333 1.6.5333.5626 0 1.1253-.176 1.6-.5333l19.7333-14.8v26c0 1.472-1.1973 2.6667-2.6667 2.6667zm-1.7786-31.9997-16.888 12.6667-16.888-12.6667zm1.7786-5.3335h-37.3333c-4.41069 0-8.00003 3.5893-8.00003 8v26.6667c0 4.4106 3.58934 8 8.00003 8h37.3333c4.4107 0 8-3.5894 8-8v-26.6667c0-4.4107-3.5893-8-8-8z" fillRule="evenodd"/>,
    })
))