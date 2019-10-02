import * as React from "react";

interface PanelItem {
    id: string;
    name: string;
    render: React.SFC<{}>;
}
interface PanelProps {
    items: PanelItem[];
    tools: React.SFC<{}>[];
}
declare class Panel extends React.Component<PanelProps> {
    state: {
        isPanelOnTop: boolean;
        activePluginID: string | null;
    };
    constructor(props: any);
    UNSAFE_componentWillMount(): void;
    createMenu(items: PanelItem[]): JSX.Element[] | null;
    createToolbar(tools: React.SFC<{}>[]): JSX.Element[] | null;
    getBody(activePluginID: any): JSX.Element | null;
    changeActivePlugin(pluginID: any): void;
    movePanel(): void;
    render(): JSX.Element;
}
export default Panel;
