/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M12 17C11.494 17 11.01 16.767 10.674 16.358L6.46103 11.26C5.95703 10.649 5.85603 9.782 6.20203 9.049C6.50703 8.402 7.11403 8 7.78703 8H16.213C16.886 8 17.493 8.402 17.798 9.049C18.144 9.782 18.043 10.649 17.54 11.259L13.326 16.358C12.99 16.767 12.506 17 12 17Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M8.09184 10L12.0018 14.822L15.9868 10H8.09184ZM11.9998 17C11.4938 17 11.0098 16.767 10.6738 16.358L6.46084 11.26C5.95684 10.649 5.85684 9.782 6.20184 9.049C6.50684 8.402 7.11384 8 7.78684 8H16.2128C16.8858 8 17.4928 8.402 17.7978 9.049C18.1438 9.782 18.0428 10.649 17.5398 11.259L13.3258 16.358C12.9898 16.767 12.5058 17 11.9998 17Z"/>,
    })
))