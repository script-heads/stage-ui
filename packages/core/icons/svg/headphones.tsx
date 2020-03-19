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

import { Props, createIcon } from '@flow-ui/core/misc/hocs/Icon'
import React from 'react'

export default (props: Props) => (
    createIcon(props, {
        filled: <g data-name="Layer 2"><g data-name="headphones"><rect width="24" height="24" opacity="0"/><path d="M12 2A10.2 10.2 0 0 0 2 12.37V17a4 4 0 1 0 4-4 3.91 3.91 0 0 0-2 .56v-1.19A8.2 8.2 0 0 1 12 4a8.2 8.2 0 0 1 8 8.37v1.19a3.91 3.91 0 0 0-2-.56 4 4 0 1 0 4 4v-4.63A10.2 10.2 0 0 0 12 2z"/></g></g>,
        outline: <g data-name="Layer 2"><g data-name="headphones"><rect width="24" height="24" opacity="0"/><path d="M12 2A10.2 10.2 0 0 0 2 12.37V17a4 4 0 1 0 4-4 3.91 3.91 0 0 0-2 .56v-1.19A8.2 8.2 0 0 1 12 4a8.2 8.2 0 0 1 8 8.37v1.19a3.91 3.91 0 0 0-2-.56 4 4 0 1 0 4 4v-4.63A10.2 10.2 0 0 0 12 2zM6 15a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm12 4a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/></g></g>,
    })
)