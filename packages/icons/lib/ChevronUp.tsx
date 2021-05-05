/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="Icon/Fill/chevron-up"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M16 14.5C15.744 14.5 15.488 14.402 15.293 14.207L11.988 10.902L8.69502 14.082C8.29702 14.466 7.66502 14.456 7.28102 14.057C6.89702 13.66 6.90802 13.026 7.30502 12.643L11.305 8.781C11.698 8.402 12.322 8.407 12.707 8.793L16.707 12.793C17.098 13.184 17.098 13.816 16.707 14.207C16.512 14.402 16.256 14.5 16 14.5Z"/><mask id="mask3734" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="8" width="11" height="7"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M16 14.5C15.744 14.5 15.488 14.402 15.293 14.207L11.988 10.902L8.69502 14.082C8.29702 14.466 7.66502 14.456 7.28102 14.057C6.89702 13.66 6.90802 13.026 7.30502 12.643L11.305 8.781C11.698 8.402 12.322 8.407 12.707 8.793L16.707 12.793C17.098 13.184 17.098 13.816 16.707 14.207C16.512 14.402 16.256 14.5 16 14.5Z"/></mask><g mask="url(#mask3734)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Icon/Outline/chevron-up"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M16 14.5C15.744 14.5 15.488 14.402 15.293 14.207L11.988 10.902L8.695 14.082C8.297 14.466 7.665 14.456 7.281 14.057C6.897 13.66 6.908 13.026 7.305 12.643L11.305 8.781C11.698 8.402 12.322 8.407 12.707 8.793L16.707 12.793C17.098 13.184 17.098 13.816 16.707 14.207C16.512 14.402 16.256 14.5 16 14.5Z"/><mask id="mask4661" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="8" width="11" height="7"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M16 14.5C15.744 14.5 15.488 14.402 15.293 14.207L11.988 10.902L8.695 14.082C8.297 14.466 7.665 14.456 7.281 14.057C6.897 13.66 6.908 13.026 7.305 12.643L11.305 8.781C11.698 8.402 12.322 8.407 12.707 8.793L16.707 12.793C17.098 13.184 17.098 13.816 16.707 14.207C16.512 14.402 16.256 14.5 16 14.5Z"/></mask><g mask="url(#mask4661)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
    })
))