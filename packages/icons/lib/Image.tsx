/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="ImageIcon/Fill/image">
          <path
            id="ImageMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 17.834C19 18.478 18.552 19 18 19H6L13.566 12.183C13.812 11.938 14.258 11.939 14.499 12.182L19 16.66V17.834ZM8 7C8.828 7 9.5 7.672 9.5 8.5C9.5 9.328 8.828 10 8 10C7.172 10 6.5 9.328 6.5 8.5C6.5 7.672 7.172 7 8 7ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
          />
          <mask id="Imagemask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
            <path
              id="ImageMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 17.834C19 18.478 18.552 19 18 19H6L13.566 12.183C13.812 11.938 14.258 11.939 14.499 12.182L19 16.66V17.834ZM8 7C8.828 7 9.5 7.672 9.5 8.5C9.5 9.328 8.828 10 8 10C7.172 10 6.5 9.328 6.5 8.5C6.5 7.672 7.172 7 8 7ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
            />
          </mask>
          <g mask="url(#Imagemask0)">
            <g id="Image&#Image240;&#Image159;&#Image142;&#Image168; Color">
              <rect id="ImageBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Image-oIcon/Outline/image">
          <g id="Image-o&#Image-o240;&#Image-o159;&#Image-o142;&#Image-o168; Color">
            <path
              id="Image-oMask"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 10C8.828 10 9.5 9.328 9.5 8.5C9.5 7.672 8.828 7 8 7C7.172 7 6.5 7.672 6.5 8.5C6.5 9.328 7.172 10 8 10ZM18 19H6.561L13.566 13.155C13.812 12.946 14.258 12.947 14.499 13.154L19 16.994V18C19 18.552 18.552 19 18 19ZM6 5H18C18.552 5 19 5.448 19 6V14.364L15.797 11.632C14.807 10.79 13.258 10.79 12.277 11.626L5 17.698V6C5 5.448 5.448 5 6 5ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
            />
            <mask id="Image-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
              <path
                id="Image-oMask_2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 10C8.828 10 9.5 9.328 9.5 8.5C9.5 7.672 8.828 7 8 7C7.172 7 6.5 7.672 6.5 8.5C6.5 9.328 7.172 10 8 10ZM18 19H6.561L13.566 13.155C13.812 12.946 14.258 12.947 14.499 13.154L19 16.994V18C19 18.552 18.552 19 18 19ZM6 5H18C18.552 5 19 5.448 19 6V14.364L15.797 11.632C14.807 10.79 13.258 10.79 12.277 11.626L5 17.698V6C5 5.448 5.448 5 6 5ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
              />
            </mask>
            <g mask="url(#Image-omask0)">
              <g id="Image-o&#Image-o240;&#Image-o159;&#Image-o142;&#Image-o168; Color_2">
                <rect id="Image-oBase" width="24" height="24" />
              </g>
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
