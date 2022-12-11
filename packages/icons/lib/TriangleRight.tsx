/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m10.956 18.0028c-.307 0-.617-.066-.906-.202-.648-.306-1.05-.913-1.05-1.586v-8.42602c0-.673.402-1.28 1.05-1.586.732-.345 1.6-.244 2.209.259l5.099 4.21402c.409.336.642.82.642 1.326s-.233.99-.642 1.326l-5.099 4.213c-.368.305-.832.462-1.303.462" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m10.5 8.01449v7.89401l4.821-3.911zm-.044 9.98621c-.307 0-.617-.066-.906-.202-.648-.305-1.05-.913-1.05-1.586v-8.42604c0-.672.402-1.28 1.05-1.585.732-.345 1.6-.245 2.209.258l5.099 4.21404c.409.336.642.82.642 1.326s-.233.991-.642 1.327l-5.099 4.212c-.368.305-.832.462-1.303.462z" fillRule="evenodd"/>,
    })
))