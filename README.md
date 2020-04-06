<div>
  <a href="http://stageui.abr.tech">
    <h2>
		<b>StageUI</b>
	</h2>
  </a>
  <p>Flexible UI Framework declared by your own Design System.</p>
  <a href="https://stageui.abr.tech">
    <img alt="Documentation" src="https://img.shields.io/static/v1?label=&message=Documentation&color=blue">
  </a>
  <a href="https://www.npmjs.com/package/@stage-ui/core">
    <img alt="npm install @stage-ui/core" src="https://img.shields.io/npm/v/@stage-ui/core?logo=npm&label=@stage-ui/core&color=green">
  </a>
  <a href="https://www.npmjs.com/package/@stage-ui/lab">
    <img alt="npm install @stage-ui/lab" src="https://img.shields.io/npm/v/@stage-ui/lab?logo=npm&label=@stage-ui/lab&color=green">
  </a>
  <a href="https://www.npmjs.com/package/@stage-ui/system">
    <img alt="npm install @stage-ui/system" src="https://img.shields.io/npm/v/@stage-ui/system?logo=npm&label=@stage-ui/system&color=green">
  </a>
</div>

## Install

```
yarn add @stage-ui/core
```

## Getting started

```
import React from 'react'
import { Viewport, Header } from '@stage-ui/core'

export default () => {
    return (
        <Viewport>
            <Header>Hello world!</Header>
        </Viewport>
    )
}
```

## Experimental
More components available from [lab](https://github.com/stage-org/StageUI/tree/master/packages/lab) package.

```
npm i @stage-ui/lab
```

***
[MIT License](https://github.com/stage-org/StageUI/blob/master/LICENSE)