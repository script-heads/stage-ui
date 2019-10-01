import * as React from "react";

export default () => {
    var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

    return (
        <div className='showcase-welcome'>
            <h1 className='showcase-logo'>Showcase</h1>
            {isMac && <p>Press <b>⌘ + Mouse click</b> to start.</p>}
            {!isMac && <p>Press <b>Alt + Mouse click</b> to start.</p>}
        </div>
    )
};