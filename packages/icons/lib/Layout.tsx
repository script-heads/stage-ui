/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m56 21.3333v-5.3333c0-4.4107-3.5893-8-8-8h-32c-4.4107 0-8 3.5893-8 8v5.3333zm-48 5.3332v21.3333c0 4.4107 3.5893 8 8 8h13.3333v-29.3333zm26.6666 29.3333v-29.3333h21.3334v21.3333c0 4.4107-3.5894 8-8 8z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m48 50.6665h-13.3334v-24h16v21.3333c0 1.472-1.1973 2.6667-2.6666 2.6667zm-34.6666-2.6667v-21.3333h16v24h-13.3334c-1.4693 0-2.6666-1.1947-2.6666-2.6667zm2.6666-34.6663h32c1.4694 0 2.6667 1.1947 2.6667 2.6667v5.3333h-37.3333v-5.3333c0-1.472 1.1973-2.6667 2.6666-2.6667zm32-5.3335h-32c-4.4107 0-8 3.5893-8 8v7.5147.9706 23.5147c0 4.4107 3.5893 8 8 8h32c4.4107 0 8-3.5893 8-8v-23.5147-.9706-7.5147c0-4.4107-3.5893-8-8-8z" fillRule="evenodd"/>,
    })
))