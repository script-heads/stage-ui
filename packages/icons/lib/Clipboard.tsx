/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m7.99998 8h8.00002c.552 0 1-.447 1-1v-4c0-.553-.448-1-1-1h-8.00002c-.552 0-1 .447-1 1v4c0 .553.448 1 1 1zm10.00002-.99993v-3c1.654 0 3 1.346 3 3v12.00003c0 1.654-1.346 3-3 3h-12c-1.654 0-3-1.346-3-3v-12.00003c0-1.654 1.346-3 3-3v3c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m19 19.0001c0 .552-.449 1-1 1h-11.99998c-.551 0-1-.448-1-1v-11.00004c0-.552.449-1 1-1v1c0 1.10301.897 2.00004 2 2.00004h7.99998c1.103 0 2-.89703 2-2.00004v-1c.551 0 1 .448 1 1zm-10.99998-15.00003 7.99998.003v.99699 3h-7.99998v-3zm9.99998.99993v-1c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v1c-1.654 0-3 1.346-3 3v11c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-11c0-1.654-1.346-3-3-3z" fillRule="evenodd"/>,
    })
))