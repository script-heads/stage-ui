/**
The MIT License (MIT)

Copyright (c) 2018 Akveo.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { Props, createIcon } from '@stage-ui/core/misc/hocs/Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g data-name="Layer 2"><g data-name="google"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M17.5 14a5.51 5.51 0 0 1-4.5 3.93 6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.12 6.12 0 0 1 2.27.44.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29 10.12 10.12 0 0 0 11.57 22 10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5"/></g></g>,
        outline: <g data-name="Layer 2"><g data-name="google"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M12 22h-.43A10.16 10.16 0 0 1 2 12.29a10 10 0 0 1 14.12-9.41 1.48 1.48 0 0 1 .77.86 1.47 1.47 0 0 1-.1 1.16L15.5 7.28a1.44 1.44 0 0 1-1.83.64A4.5 4.5 0 0 0 8.77 9a4.41 4.41 0 0 0-1.16 3.34 4.36 4.36 0 0 0 1.66 3 4.52 4.52 0 0 0 3.45 1 3.89 3.89 0 0 0 2.63-1.57h-2.9A1.45 1.45 0 0 1 11 13.33v-2.68a1.45 1.45 0 0 1 1.45-1.45h8.1A1.46 1.46 0 0 1 22 10.64v1.88A10 10 0 0 1 12 22zm0-18a8 8 0 0 0-8 8.24A8.12 8.12 0 0 0 11.65 20 8 8 0 0 0 20 12.42V11.2h-7v1.58h5.31l-.41 1.3a6 6 0 0 1-4.9 4.25A6.58 6.58 0 0 1 8 17a6.33 6.33 0 0 1-.72-9.3A6.52 6.52 0 0 1 14 5.91l.77-1.43A7.9 7.9 0 0 0 12 4z"/></g></g>,
    })
))