import Button from '@flow-ui/core/action/Button';
import Icon from '@flow-ui/core/content/Icon';
import Flexbox from '@flow-ui/core/layout/Flexbox';
import Viewport from '@flow-ui/core/layout/Viewport';
import * as themesCore from '@flow-ui/core/misc/themes';
import * as themesExtra from '../../../lab/misc/themes';
import { IPluginProps, PanelRenderProps } from '@flow-ui/showcase/types';
import React, { useState } from 'react';
import ParamDialog from './ParamDialog';

declare global {
    interface Window {
        setTheme: (theme: string) => void
        currentTheme: string
    }
}

export interface CaseProps {
    registerParams: (paramKeys: ParamKeys) => void
    params: any
}

interface ParamKeys {
    [key: string]: string[] | string
}

export interface RegisterParam {
    key: string, values: string | number | string[]
}

let AddPanel: (props: PanelRenderProps) => void;
let OpenMenu: () => void;

export const themes = { ...themesCore, ...themesExtra }

class Wrapper extends React.Component {

    state = {
        currentTheme: localStorage.getItem('theme') || 'light'
    }

    componentWillUnmount() {
        location.hash = '';
    }

    render() {
        const currentParams = {};
        location.hash.slice(1).split('&').forEach(qp => {
            if (qp && qp.match('=')) {
                const param = qp.split('=');
                currentParams[param[0]] = param[1] === 'true'
                    ? true
                    : param[1] === 'false'
                        ? false
                        : param[1];
            }
        })

        window.setTheme = (currentTheme) => {
            localStorage.setItem('theme', currentTheme)
            this.setState({ currentTheme })
        }
        window.currentTheme = this.state.currentTheme

        return (
            <Viewport theme={themes[this.state.currentTheme]}>
                <Flexbox justifyContent="space-between" p="2rem" pl={"3rem"}>
                    <Button decoration="text" onClick={OpenMenu}>
                        <Icon size="1rem" pr={"0.5rem"} type={t => t.outline.arrowBack} />
                        Back
                    </Button>
                </Flexbox>
                {
                    React.cloneElement(this.props.children as any, {
                        params: currentParams,
                        registerParams: (paramKeys: ParamKeys) => {
                            const params: RegisterParam[] = [];
                            Object.keys(paramKeys).forEach(key => {
                                params.push({
                                    key,
                                    values: paramKeys[key]
                                });
                            })
                            AddPanel({
                                item: {
                                    id: 'Props',
                                    name: 'Props',
                                    render: () => (
                                        <ParamDialog
                                            onUpdate={this.forceUpdate.bind(this)}
                                            currentParams={currentParams}
                                            params={params}
                                        />
                                    )
                                },
                            })
                        }
                    })
                }
            </Viewport>
        )
    }
}

export default (props: IPluginProps) => {
    Wrapper.contextType = props.context;
    AddPanel = props.addPanel;
    OpenMenu = props.openMenu;
    props.wrapper(Wrapper);
};