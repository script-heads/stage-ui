/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="GridIcon/Fill/grid">
          <path
            id="GridMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 3H9C10.103 3 11 3.897 11 5V9C11 10.103 10.103 11 9 11H5C3.897 11 3 10.103 3 9V5C3 3.897 3.897 3 5 3ZM15 3H19C20.103 3 21 3.897 21 5V9C21 10.103 20.103 11 19 11H15C13.897 11 13 10.103 13 9V5C13 3.897 13.897 3 15 3ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 13H19C20.103 13 21 13.897 21 15V19C21 20.103 20.103 21 19 21H15C13.897 21 13 20.103 13 19V15C13 13.897 13.897 13 15 13Z"
          />
          <mask
            id="Gridmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path
              id="GridMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 3H9C10.103 3 11 3.897 11 5V9C11 10.103 10.103 11 9 11H5C3.897 11 3 10.103 3 9V5C3 3.897 3.897 3 5 3ZM15 3H19C20.103 3 21 3.897 21 5V9C21 10.103 20.103 11 19 11H15C13.897 11 13 10.103 13 9V5C13 3.897 13.897 3 15 3ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 13H19C20.103 13 21 13.897 21 15V19C21 20.103 20.103 21 19 21H15C13.897 21 13 20.103 13 19V15C13 13.897 13.897 13 15 13Z"
            />
          </mask>
          <g mask="url(#Gridmask0)">
            <g id="Grid&#Grid240;&#Grid159;&#Grid142;&#Grid168; Color">
              <rect id="GridBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Grid-oIcon/Outline/grid">
          <path
            id="Grid-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 19V15H19L19.001 19H15ZM19 13H15C13.897 13 13 13.897 13 15V19C13 20.103 13.897 21 15 21H19C20.103 21 21 20.103 21 19V15C21 13.897 20.103 13 19 13ZM5 19V15H9L9.001 19H5ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 9V5H19L19.001 9H15ZM19 3H15C13.897 3 13 3.897 13 5V9C13 10.103 13.897 11 15 11H19C20.103 11 21 10.103 21 9V5C21 3.897 20.103 3 19 3ZM5 9V5H9L9.001 9H5ZM9 3H5C3.897 3 3 3.897 3 5V9C3 10.103 3.897 11 5 11H9C10.103 11 11 10.103 11 9V5C11 3.897 10.103 3 9 3Z"
          />
          <mask
            id="Grid-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path
              id="Grid-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 19V15H19L19.001 19H15ZM19 13H15C13.897 13 13 13.897 13 15V19C13 20.103 13.897 21 15 21H19C20.103 21 21 20.103 21 19V15C21 13.897 20.103 13 19 13ZM5 19V15H9L9.001 19H5ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 9V5H19L19.001 9H15ZM19 3H15C13.897 3 13 3.897 13 5V9C13 10.103 13.897 11 15 11H19C20.103 11 21 10.103 21 9V5C21 3.897 20.103 3 19 3ZM5 9V5H9L9.001 9H5ZM9 3H5C3.897 3 3 3.897 3 5V9C3 10.103 3.897 11 5 11H9C10.103 11 11 10.103 11 9V5C11 3.897 10.103 3 9 3Z"
            />
          </mask>
          <g mask="url(#Grid-omask0)">
            <g id="Grid-o&#Grid-o240;&#Grid-o159;&#Grid-o142;&#Grid-o168; Color">
              <rect id="Grid-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
