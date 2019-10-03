# [Flow UI](http://flowui.abr.tech)
Consistent React UI Framework declared by your own Design System. 

```
npm i @flow-ui/core
```

## Getting started

```
import React from 'react'
import { Viewport } from '@flow-ui/core/layout/Viewport'
import { Block } from '@flow-ui/core/layout/Block'
import { H1 } from '@flow-ui/core/content/typography/H'
import { T1 } from '@flow-ui/core/content/typography/T'

const Hello props =>
	<Viewport>
	  <Block>
	    <H1>Hello</H1>
	    <T1>Rebass</T1>
	  </Block>
	</Viewport>
```

## Experimental
More components available from [lab](https://github.com/abr-tech/FlowUI/tree/master/packages/lab) package.

```
npm i @flow-ui/lab
```

***
[MIT License](https://github.com/abr-tech/FlowUI/blob/master/LICENSE)