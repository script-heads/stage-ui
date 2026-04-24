/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M30.2886 5.33325V28.5198L10.6667 16.8996L10.6667 47.3525L30.2886 35.7323V35.7861L30.2887 58.6666L56.0001 43.4402L36.6819 32L56.0001 20.5597L30.2886 5.33325Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M30.2886 5.33325V28.5198L10.6667 16.8996L10.6667 47.3525L30.2886 35.7323V35.7861L30.2886 58.6666L56 43.4402L36.6818 32L56 20.5597L30.2886 5.33325ZM36.6035 16.5521V24.566L43.3697 20.5591L36.6035 16.5521ZM16.9817 36.1328L23.7479 32.1259L16.9817 28.1189V36.1328ZM36.6037 39.4336L43.3699 43.4406L36.6037 47.4476V39.4336Z"/>,
    })
))