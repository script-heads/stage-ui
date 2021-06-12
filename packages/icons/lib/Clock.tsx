/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="ClockIcon/Fill/clock"><path id="ClockMask" fillRule="evenodd" clipRule="evenodd" d="M16 13H12C11.448 13 11 12.553 11 12V8C11 7.447 11.448 7 12 7C12.552 7 13 7.447 13 8V11H16C16.553 11 17 11.447 17 12C17 12.553 16.553 13 16 13ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/><mask id="Clockmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20"><path id="ClockMask_2" fillRule="evenodd" clipRule="evenodd" d="M16 13H12C11.448 13 11 12.553 11 12V8C11 7.447 11.448 7 12 7C12.552 7 13 7.447 13 8V11H16C16.553 11 17 11.447 17 12C17 12.553 16.553 13 16 13ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/></mask><g mask="url(#Clockmask0)"><g id="Clock&#Clock240;&#Clock159;&#Clock142;&#Clock168; Color"><rect id="ClockBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Clock-oIcon/Outline/clock"><path id="Clock-oMask" fillRule="evenodd" clipRule="evenodd" d="M16 11H13V8C13 7.447 12.552 7 12 7C11.448 7 11 7.447 11 8V12C11 12.553 11.448 13 12 13H16C16.553 13 17 12.553 17 12C17 11.447 16.553 11 16 11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/><mask id="Clock-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20"><path id="Clock-oMask_2" fillRule="evenodd" clipRule="evenodd" d="M16 11H13V8C13 7.447 12.552 7 12 7C11.448 7 11 7.447 11 8V12C11 12.553 11.448 13 12 13H16C16.553 13 17 12.553 17 12C17 11.447 16.553 11 16 11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"/></mask><g mask="url(#Clock-omask0)"><g id="Clock-o&#Clock-o240;&#Clock-o159;&#Clock-o142;&#Clock-o168; Color"><rect id="Clock-oBase" width="24" height="24"/></g></g></g></g>,
    })
))