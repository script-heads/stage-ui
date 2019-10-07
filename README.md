<center>
  <a href="http://flowui.abr.tech">
    <h2>
		<b>FlowUI</b>
	</h2>
  </a>
  <a href="https://flowui.abr.tech">
    <img alt="Documentation" src="https://img.shields.io/static/v1?label=&message=Documentation&color=blue">
  </a>
  <a href="https://www.npmjs.com/package/@flow-ui/core">
    <img alt="npm install @flow-ui/core" src="https://img.shields.io/npm/v/@flow-ui/core?logo=npm&label=@flow-ui/core&color=green">
  </a>
  <a href="https://www.npmjs.com/package/@flow-ui/lab">
    <img alt="npm install @flow-ui/lab" src="https://img.shields.io/npm/v/@flow-ui/lab?logo=npm&label=@flow-ui/lab&color=green">
  </a>
</center>

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