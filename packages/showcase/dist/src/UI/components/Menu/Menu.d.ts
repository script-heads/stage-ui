import * as React from "react";
export interface MenuProps {
    cases: any;
    onChange: (currentCase: React.ReactNode, currentCaseID: string) => void;
}
export default class Menu extends React.Component<MenuProps> {
    casesList(cases: any): (JSX.Element | null)[];
    render(): JSX.Element;
}
