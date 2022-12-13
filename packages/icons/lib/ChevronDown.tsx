/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m32 41.3332c-.6826 0-1.3653-.2613-1.8853-.7813l-10.6667-10.6667c-1.0427-1.0427-1.0427-2.728 0-3.7707 1.0427-1.0426 2.728-1.0426 3.7707 0l8.8133 8.8134 8.7814-8.48c1.064-1.0214 2.7466-.992 3.7706.0666 1.024 1.0587.9947 2.7494-.064 3.7707l-10.6666 10.2987c-.52.5013-1.1867.7493-1.8534.7493z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m31.9999 41.3332c-.6826 0-1.3653-.2613-1.8853-.7813l-10.6667-10.6667c-1.0426-1.0427-1.0426-2.728 0-3.7707 1.0427-1.0426 2.728-1.0426 3.7707 0l8.8133 8.8134 8.7814-8.48c1.064-1.0214 2.7466-.992 3.7706.0666 1.024 1.0587.9947 2.7494-.064 3.7707l-10.6666 10.2987c-.52.5013-1.1867.7493-1.8534.7493z" fillRule="evenodd"/>,
    })
))