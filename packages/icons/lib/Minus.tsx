/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="MinusIcon/Fill/minus"><path id="MinusMask" fillRule="evenodd" clipRule="evenodd" d="M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z"/><mask id="Minusmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="11" width="16" height="2"><path id="MinusMask_2" fillRule="evenodd" clipRule="evenodd" d="M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z"/></mask><g mask="url(#Minusmask0)"><g id="Minus&#Minus240;&#Minus159;&#Minus142;&#Minus168; Color"><rect id="MinusBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Minus-oIcon/Outline/minus"><path id="Minus-oMask" fillRule="evenodd" clipRule="evenodd" d="M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z"/><mask id="Minus-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="11" width="16" height="2"><path id="Minus-oMask_2" fillRule="evenodd" clipRule="evenodd" d="M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z"/></mask><g mask="url(#Minus-omask0)"><g id="Minus-o&#Minus-o240;&#Minus-o159;&#Minus-o142;&#Minus-o168; Color"><rect id="Minus-oBase" width="24" height="24"/></g></g></g></g>,
    })
))