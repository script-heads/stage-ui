import * as React from "react";

interface State {
    CurrentCase: React.SFC<{}>;
    isMenuOpen: boolean;
    panelItems: {
        id: string;
        name: string;
        render: React.SFC<{}>;
    }[];
    panelTools: React.SFC<{}>[];
    Wrapper: typeof React.Component | null;
    wrapperProps: any;
    context: any;
}
declare class UI extends React.Component<{}, State> {
    state: Readonly<State>;
    constructor(props: any);
    UNSAFE_componentWillMount(): void;
    private handleMouseClick;
    setContext(nextContext: any): void;
    addPanel(add: any): void;
    openMenu(): void;
    setWrapper(Wrapper: typeof React.Component): void;
    changeCase(CurrentCase: any, currentCaseID: string): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default UI;
