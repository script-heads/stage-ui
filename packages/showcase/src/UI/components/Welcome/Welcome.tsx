import * as React from "react";

declare const $_WORKDIR_$: string

let config = require(`${$_WORKDIR_$}/showcase.config`);
if (config && config.default) {
  config = config.default;
}

export default () => {
    var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

    return (
        <div className='showcase-welcome'>
            <h1 className='showcase-logo'>{config.title || 'Showcase'}</h1>
            {isMac && <p>Press <b>⌘ + Mouse click</b> to start.</p>}
            {!isMac && <p>Press <b>Alt + Mouse click</b> to start.</p>}
        </div>
    )
};