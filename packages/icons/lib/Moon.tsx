/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="icon4305Icon/Fill/moon"><path id="icon4305Mask" fill-rule="evenodd" clip-rule="evenodd" d="M12.2959 22C12.2639 22 12.2329 22 12.1999 21.999C9.40592 21.975 6.79792 20.854 4.85592 18.846C1.17892 15.041 1.06392 8.74401 4.59892 4.80901C5.69992 3.58201 7.04392 2.65901 8.59192 2.06601C8.95692 1.92401 9.37192 2.01201 9.65092 2.28801C9.93092 2.56301 10.0239 2.97601 9.88892 3.34401C8.77092 6.39901 9.53192 9.85501 11.8299 12.148C14.1269 14.441 17.5929 15.202 20.6579 14.086C21.0259 13.95 21.4389 14.046 21.7129 14.324C21.9879 14.604 22.0739 15.019 21.9339 15.384C21.4099 16.747 20.6239 17.957 19.5979 18.98C17.6449 20.93 15.0539 22 12.2959 22Z"/><mask id="icon4305mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="1" width="21" height="21"><path id="icon4305Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M12.2959 22C12.2639 22 12.2329 22 12.1999 21.999C9.40592 21.975 6.79792 20.854 4.85592 18.846C1.17892 15.041 1.06392 8.74401 4.59892 4.80901C5.69992 3.58201 7.04392 2.65901 8.59192 2.06601C8.95692 1.92401 9.37192 2.01201 9.65092 2.28801C9.93092 2.56301 10.0239 2.97601 9.88892 3.34401C8.77092 6.39901 9.53192 9.85501 11.8299 12.148C14.1269 14.441 17.5929 15.202 20.6579 14.086C21.0259 13.95 21.4389 14.046 21.7129 14.324C21.9879 14.604 22.0739 15.019 21.9339 15.384C21.4099 16.747 20.6239 17.957 19.5979 18.98C17.6449 20.93 15.0539 22 12.2959 22Z"/></mask><g mask="url(#icon4305mask0)"><g id="icon4305&#icon4305240;&#icon4305159;&#icon4305142;&#icon4305168; Color"><rect id="icon4305Base" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="icon8038Icon/Outline/moon"><path id="icon8038Mask" fill-rule="evenodd" clip-rule="evenodd" d="M7.44093 4.91804C6.94093 5.27204 6.48193 5.68204 6.06593 6.14604C3.21693 9.31704 3.30993 14.391 6.27293 17.456C7.83893 19.077 9.94293 19.981 12.1969 20C12.2219 20.001 12.2479 20.001 12.2739 20.001C14.4989 20.001 16.5879 19.138 18.1639 17.565C18.4919 17.238 18.7899 16.887 19.0569 16.513C15.9109 16.905 12.6859 15.851 10.3949 13.565C8.10493 11.279 7.04493 8.06104 7.44093 4.91804ZM12.2739 22.001C12.2419 22.001 12.2109 22.001 12.1789 22C9.38493 21.976 6.77593 20.856 4.83493 18.847C1.15793 15.042 1.04293 8.74504 4.57693 4.81004C5.67793 3.58304 7.02193 2.66004 8.57093 2.06704C8.93593 1.92504 9.35093 2.01304 9.62993 2.28904C9.90893 2.56404 10.0019 2.97704 9.86693 3.34504C8.74893 6.40004 9.51093 9.85604 11.8079 12.149C14.1059 14.442 17.5709 15.203 20.6359 14.087C21.0039 13.951 21.4179 14.047 21.6919 14.325C21.9659 14.606 22.0529 15.02 21.9119 15.385C21.3879 16.748 20.6019 17.958 19.5759 18.981C17.6229 20.931 15.0329 22.001 12.2739 22.001Z"/><mask id="icon8038mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="21"><path id="icon8038Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M7.44093 4.91804C6.94093 5.27204 6.48193 5.68204 6.06593 6.14604C3.21693 9.31704 3.30993 14.391 6.27293 17.456C7.83893 19.077 9.94293 19.981 12.1969 20C12.2219 20.001 12.2479 20.001 12.2739 20.001C14.4989 20.001 16.5879 19.138 18.1639 17.565C18.4919 17.238 18.7899 16.887 19.0569 16.513C15.9109 16.905 12.6859 15.851 10.3949 13.565C8.10493 11.279 7.04493 8.06104 7.44093 4.91804ZM12.2739 22.001C12.2419 22.001 12.2109 22.001 12.1789 22C9.38493 21.976 6.77593 20.856 4.83493 18.847C1.15793 15.042 1.04293 8.74504 4.57693 4.81004C5.67793 3.58304 7.02193 2.66004 8.57093 2.06704C8.93593 1.92504 9.35093 2.01304 9.62993 2.28904C9.90893 2.56404 10.0019 2.97704 9.86693 3.34504C8.74893 6.40004 9.51093 9.85604 11.8079 12.149C14.1059 14.442 17.5709 15.203 20.6359 14.087C21.0039 13.951 21.4179 14.047 21.6919 14.325C21.9659 14.606 22.0529 15.02 21.9119 15.385C21.3879 16.748 20.6019 17.958 19.5759 18.981C17.6229 20.931 15.0329 22.001 12.2739 22.001Z"/></mask><g mask="url(#icon8038mask0)"><g id="icon8038&#icon8038240;&#icon8038159;&#icon8038142;&#icon8038168; Color"><rect id="icon8038Base" width="24" height="24"/></g></g></g></g>,
    })
))