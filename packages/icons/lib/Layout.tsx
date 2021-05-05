/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="Icon/Fill/layout"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M21 8V6C21 4.346 19.654 3 18 3H6C4.346 3 3 4.346 3 6V8H21ZM3 10V18C3 19.654 4.346 21 6 21H11V10H3ZM13 21V10H21V18C21 19.654 19.654 21 18 21H13Z"/><mask id="mask865" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M21 8V6C21 4.346 19.654 3 18 3H6C4.346 3 3 4.346 3 6V8H21ZM3 10V18C3 19.654 4.346 21 6 21H11V10H3ZM13 21V10H21V18C21 19.654 19.654 21 18 21H13Z"/></mask><g mask="url(#mask865)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Icon/Outline/layout"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M18 19H13V10H19V18C19 18.552 18.551 19 18 19ZM5 18V10H11V19H6C5.449 19 5 18.552 5 18ZM6 5H18C18.551 5 19 5.448 19 6V8H5V6C5 5.448 5.449 5 6 5ZM18 3H6C4.346 3 3 4.346 3 6V8.818V9.182V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V9.182V8.818V6C21 4.346 19.654 3 18 3Z"/><mask id="mask2664" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M18 19H13V10H19V18C19 18.552 18.551 19 18 19ZM5 18V10H11V19H6C5.449 19 5 18.552 5 18ZM6 5H18C18.551 5 19 5.448 19 6V8H5V6C5 5.448 5.449 5 6 5ZM18 3H6C4.346 3 3 4.346 3 6V8.818V9.182V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V9.182V8.818V6C21 4.346 19.654 3 18 3Z"/></mask><g mask="url(#mask2664)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
    })
))