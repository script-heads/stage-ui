/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="Icon/Fill/book"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M7 19C6.449 19 6 18.551 6 18C6 17.449 6.449 17 7 17H18V19H7ZM19 3H7C5.346 3 4 4.346 4 6V18C4 19.654 5.346 21 7 21H18H19C19.552 21 20 20.552 20 20V19V17V4C20 3.448 19.552 3 19 3Z"/><mask id="mask9162" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="18"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M7 19C6.449 19 6 18.551 6 18C6 17.449 6.449 17 7 17H18V19H7ZM19 3H7C5.346 3 4 4.346 4 6V18C4 19.654 5.346 21 7 21H18H19C19.552 21 20 20.552 20 20V19V17V4C20 3.448 19.552 3 19 3Z"/></mask><g mask="url(#mask9162)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Icon/Outline/book"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M7 19C6.449 19 6 18.551 6 18C6 17.449 6.449 17 7 17H18V19H7ZM7 5H18V15H7C6.647 15 6.314 15.072 6 15.184V6C6 5.449 6.449 5 7 5ZM19 3H7C5.346 3 4 4.346 4 6V18C4 19.654 5.346 21 7 21H18H19C19.552 21 20 20.552 20 20V19V17V4C20 3.448 19.552 3 19 3Z"/><mask id="mask6654" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="3" width="16" height="18"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M7 19C6.449 19 6 18.551 6 18C6 17.449 6.449 17 7 17H18V19H7ZM7 5H18V15H7C6.647 15 6.314 15.072 6 15.184V6C6 5.449 6.449 5 7 5ZM19 3H7C5.346 3 4 4.346 4 6V18C4 19.654 5.346 21 7 21H18H19C19.552 21 20 20.552 20 20V19V17V4C20 3.448 19.552 3 19 3Z"/></mask><g mask="url(#mask6654)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
    })
))