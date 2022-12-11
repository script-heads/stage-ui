/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m9.86328 18.0001c-.276 0-.54-.114-.729-.315l-4.863-5.179c-.379-.402-.358-1.035.044-1.413.403-.378 1.036-.358 1.413.044l4.125 4.391 8.40802-9.20199c.374-.409 1.006-.436 1.414-.064.407.372.435 1.005.063 1.412l-9.137 9.99999c-.187.206-.453.324-.73102.326z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m9.86326 18.0001c-.276 0-.54-.114-.729-.315l-4.863-5.179c-.379-.402-.358-1.035.044-1.413.403-.378 1.036-.358 1.413.044l4.125 4.391 8.40804-9.20199c.374-.409 1.006-.436 1.414-.064.407.372.435 1.005.063 1.412l-9.137 9.99999c-.187.206-.453.324-.73104.326z" fillRule="evenodd"/>,
    })
))