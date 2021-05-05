/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="Icon/Fill/minus"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z"/><mask id="mask5430" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="11" width="16" height="2"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z"/></mask><g mask="url(#mask5430)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Icon/Outline/minus"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z"/><mask id="mask9662" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="11" width="16" height="2"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z"/></mask><g mask="url(#mask9662)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
    })
))