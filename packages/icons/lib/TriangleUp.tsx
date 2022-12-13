/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m43.2342 42.6664h-22.4693c-1.7947 0-3.4133-1.072-4.2267-2.7973-.92-1.9547-.6533-4.2667.688-5.8934l11.2374-13.5973c1.792-2.1787 5.28-2.1787 7.072 0l11.2346 13.5947c1.344 1.6293 1.6134 3.9413.6907 5.896-.8133 1.7253-2.432 2.7973-4.2267 2.7973z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m21.3698 37.3334h21.0534l-10.4294-12.8587zm21.8641 5.333h-22.4694c-1.792 0-3.4133-1.072-4.2266-2.7973-.92-1.9547-.6534-4.2667.688-5.8934l11.2373-13.5973c1.792-2.1787 5.2827-2.1787 7.072 0l11.2347 13.5947c1.344 1.6293 1.6133 3.9413.6906 5.896-.8133 1.7253-2.432 2.7973-4.2266 2.7973z" fillRule="evenodd"/>,
    })
))