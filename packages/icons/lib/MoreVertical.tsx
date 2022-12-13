/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m37.3332 21.3333c0 2.944-2.3894 5.3334-5.3334 5.3334s-5.3333-2.3894-5.3333-5.3334 2.3893-5.3333 5.3333-5.3333 5.3334 2.3893 5.3334 5.3333zm-10.6667 21.3332c0-2.944 2.3893-5.3333 5.3333-5.3333s5.3334 2.3893 5.3334 5.3333-2.3894 5.3333-5.3334 5.3333-5.3333-2.3893-5.3333-5.3333z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m37.3334 21.3333c0 2.944-2.3894 5.3334-5.3334 5.3334s-5.3333-2.3894-5.3333-5.3334 2.3893-5.3333 5.3333-5.3333 5.3334 2.3893 5.3334 5.3333zm-10.6667 21.3332c0-2.944 2.3893-5.3333 5.3333-5.3333s5.3334 2.3893 5.3334 5.3333-2.3894 5.3333-5.3334 5.3333-5.3333-2.3893-5.3333-5.3333z" fillRule="evenodd"/>,
    })
))