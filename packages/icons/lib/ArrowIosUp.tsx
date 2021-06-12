/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="ArrowIosUpIcon/Fill/arrow-ios-up">
          <path
            id="ArrowIosUpMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.9995 15C17.7735 15 17.5465 14.924 17.3595 14.768L11.9885 10.292L6.62651 14.607C6.19751 14.954 5.56751 14.886 5.22051 14.455C4.87451 14.025 4.94251 13.396 5.37351 13.049L11.3735 8.22098C11.7435 7.92198 12.2745 7.92598 12.6405 8.23198L18.6405 13.232C19.0645 13.585 19.1215 14.216 18.7685 14.64C18.5705 14.877 18.2865 15 17.9995 15Z"
          />
          <mask id="ArrowIosUpmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="7" width="15" height="8">
            <path
              id="ArrowIosUpMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.9995 15C17.7735 15 17.5465 14.924 17.3595 14.768L11.9885 10.292L6.62651 14.607C6.19751 14.954 5.56751 14.886 5.22051 14.455C4.87451 14.025 4.94251 13.396 5.37351 13.049L11.3735 8.22098C11.7435 7.92198 12.2745 7.92598 12.6405 8.23198L18.6405 13.232C19.0645 13.585 19.1215 14.216 18.7685 14.64C18.5705 14.877 18.2865 15 17.9995 15Z"
            />
          </mask>
          <g mask="url(#ArrowIosUpmask0)">
            <g id="ArrowIosUp&#ArrowIosUp240;&#ArrowIosUp159;&#ArrowIosUp142;&#ArrowIosUp168; Color">
              <rect id="ArrowIosUpBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="ArrowIosUp-oIcon/Outline/arrow-ios-up">
          <path
            id="ArrowIosUp-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.9995 15C17.7735 15 17.5465 14.924 17.3595 14.768L11.9885 10.292L6.62651 14.607C6.19751 14.954 5.56751 14.886 5.22051 14.455C4.87451 14.025 4.94251 13.396 5.37351 13.049L11.3735 8.22098C11.7435 7.92198 12.2745 7.92598 12.6405 8.23198L18.6405 13.232C19.0645 13.585 19.1215 14.216 18.7685 14.64C18.5705 14.877 18.2865 15 17.9995 15Z"
          />
          <mask id="ArrowIosUp-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="7" width="15" height="8">
            <path
              id="ArrowIosUp-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.9995 15C17.7735 15 17.5465 14.924 17.3595 14.768L11.9885 10.292L6.62651 14.607C6.19751 14.954 5.56751 14.886 5.22051 14.455C4.87451 14.025 4.94251 13.396 5.37351 13.049L11.3735 8.22098C11.7435 7.92198 12.2745 7.92598 12.6405 8.23198L18.6405 13.232C19.0645 13.585 19.1215 14.216 18.7685 14.64C18.5705 14.877 18.2865 15 17.9995 15Z"
            />
          </mask>
          <g mask="url(#ArrowIosUp-omask0)">
            <g id="ArrowIosUp-o&#ArrowIosUp-o240;&#ArrowIosUp-o159;&#ArrowIosUp-o142;&#ArrowIosUp-o168; Color">
              <rect id="ArrowIosUp-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
