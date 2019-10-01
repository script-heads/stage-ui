import React from "react";
import ReactDOM from 'react-dom';

export default (Body: React.SFC<{}>, container: HTMLElement) => {
    ReactDOM.render(<Body />, container)
}