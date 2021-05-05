/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="Icon/Fill/arrow-ios-down"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M12 16C11.772 16 11.545 15.923 11.36 15.768L5.36003 10.768C4.93603 10.415 4.87803 9.78398 5.23203 9.35998C5.58503 8.93598 6.21503 8.87898 6.64003 9.23198L12.011 13.708L17.373 9.39298C17.803 9.04698 18.433 9.11498 18.779 9.54498C19.125 9.97498 19.057 10.604 18.627 10.951L12.627 15.779C12.444 15.926 12.222 16 12 16Z"/><mask id="mask6446" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="9" width="14" height="7"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M12 16C11.772 16 11.545 15.923 11.36 15.768L5.36003 10.768C4.93603 10.415 4.87803 9.78398 5.23203 9.35998C5.58503 8.93598 6.21503 8.87898 6.64003 9.23198L12.011 13.708L17.373 9.39298C17.803 9.04698 18.433 9.11498 18.779 9.54498C19.125 9.97498 19.057 10.604 18.627 10.951L12.627 15.779C12.444 15.926 12.222 16 12 16Z"/></mask><g mask="url(#mask6446)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Icon/Outline/arrow-ios-down"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M12 16C11.772 16 11.545 15.923 11.36 15.768L5.35997 10.768C4.93597 10.415 4.87797 9.78398 5.23197 9.35998C5.58497 8.93598 6.21497 8.87898 6.63997 9.23198L12.011 13.708L17.373 9.39298C17.803 9.04698 18.433 9.11498 18.779 9.54498C19.125 9.97498 19.057 10.604 18.627 10.951L12.627 15.779C12.444 15.926 12.222 16 12 16Z"/><mask id="mask6410" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="9" width="14" height="7"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M12 16C11.772 16 11.545 15.923 11.36 15.768L5.35997 10.768C4.93597 10.415 4.87797 9.78398 5.23197 9.35998C5.58497 8.93598 6.21497 8.87898 6.63997 9.23198L12.011 13.708L17.373 9.39298C17.803 9.04698 18.433 9.11498 18.779 9.54498C19.125 9.97498 19.057 10.604 18.627 10.951L12.627 15.779C12.444 15.926 12.222 16 12 16Z"/></mask><g mask="url(#mask6410)"><g id="&#240;&#159;&#142;&#168; Color"><rect id="Base" width="24" height="24"/></g></g></g></g>,
    })
))