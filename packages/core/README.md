# [Flow UI Core](http://flowui.abr.tech)
Consistent React UI Framework declared by your own Design System. 

```
npm i @flow-ui/core
```

## Getting started

```
import React from 'react'
import { Viewport } from '@flow-ui/core/layout/viewport'
import { Block } from '@flow-ui/core/layout/block'
import { H1 } from '@flow-ui/core/H'
import { T1 } from '@flow-ui/core/T'

const Hello props =>
	<Viewport>
	  <Block>
	    <H1>Hello</H1>
	    <T1>Rebass</T1>
	  </Block>
	</Viewport>
```