/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="NpmIcon/Fill/npm"><path id="NpmMask" fill-rule="evenodd" clip-rule="evenodd" d="M18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H13V11H17V21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"/><mask id="Npmmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18"><path id="NpmMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H13V11H17V21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"/></mask><g mask="url(#Npmmask0)"><g id="Npm&#Npm240;&#Npm159;&#Npm142;&#Npm168; Color"><rect id="NpmBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Npm-oIcon/Outline/npm"><path id="Npm-oMask" fill-rule="evenodd" clip-rule="evenodd" d="M12 19H16V9H12V19ZM6 5C5.449 5 5 5.449 5 6V18C5 18.551 5.449 19 6 19H18C18.551 19 19 18.551 19 18V6C19 5.449 18.551 5 18 5H6ZM18 21H6C4.346 21 3 19.654 3 18V6C3 4.346 4.346 3 6 3H18C19.654 3 21 4.346 21 6V18C21 19.654 19.654 21 18 21Z"/><mask id="Npm-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18"><path id="Npm-oMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M12 19H16V9H12V19ZM6 5C5.449 5 5 5.449 5 6V18C5 18.551 5.449 19 6 19H18C18.551 19 19 18.551 19 18V6C19 5.449 18.551 5 18 5H6ZM18 21H6C4.346 21 3 19.654 3 18V6C3 4.346 4.346 3 6 3H18C19.654 3 21 4.346 21 6V18C21 19.654 19.654 21 18 21Z"/></mask><g mask="url(#Npm-omask0)"><g id="Npm-o&#Npm-o240;&#Npm-o159;&#Npm-o142;&#Npm-o168; Color"><rect id="Npm-oBase" width="24" height="24"/></g></g></g></g>,
    })
))