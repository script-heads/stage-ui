/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="PlusIcon/Fill/plus"><path id="PlusMask" fill-rule="evenodd" clip-rule="evenodd" d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"/><mask id="Plusmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16"><path id="PlusMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"/></mask><g mask="url(#Plusmask0)"><g id="Plus&#Plus240;&#Plus159;&#Plus142;&#Plus168; Color"><rect id="PlusBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Plus-oIcon/Outline/plus"><path id="Plus-oMask" fill-rule="evenodd" clip-rule="evenodd" d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"/><mask id="Plus-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16"><path id="Plus-oMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"/></mask><g mask="url(#Plus-omask0)"><g id="Plus-o&#Plus-o240;&#Plus-o159;&#Plus-o142;&#Plus-o168; Color"><rect id="Plus-oBase" width="24" height="24"/></g></g></g></g>,
    })
))