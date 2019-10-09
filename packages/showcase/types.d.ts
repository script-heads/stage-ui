import { ReactNode } from "react";
import React from 'react';

export interface IConfig {
    title?: string
    giturl?: string
    hidePanel?: boolean
    hideMenu?: boolean
    plugins?: ((props: IPluginProps) => void)[]
}

export interface IPluginProps {
    cases: any
    config: any
    selfContainer: HTMLElement
    render: (Body: React.SFC<{}>) => void
    addPanel: (content: PanelRenderProps) => void
    openMenu: () => void
    wrapper: (Wrapper: typeof React.Component) => void,
    context: any
}

export interface PanelRenderProps {
    item?: PanelRenderItem,
    tool?: ToolRenderItem,
}

export interface PanelRenderItem {
    id?: string | number,
    name: string,
    render: React.SFC<{}>
}

export interface ToolRenderItem {
    id?: string | number,
    render: React.SFC<{}>
}