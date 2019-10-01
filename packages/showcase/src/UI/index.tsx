import * as React from "react";
import core from '../core';
import { Menu, Panel, Welcome } from './components';
import './styles/main.css';

interface State {
	CurrentCase: React.SFC<{}>
	isMenuOpen: boolean,
	panelItems: {
		id: string
		name: string,
		render: React.SFC<{}>
	}[],
	panelTools: {
		id: string
		render: React.SFC<{}>
	}[],
	Wrapper: typeof React.Component | null,
	wrapperProps: any,
	context: any
}

class UI extends React.Component<{}, State>  {

	state: Readonly<State> = {
		CurrentCase: Welcome,
		isMenuOpen: false,
		panelItems: [],
		panelTools: [],
		Wrapper: null,
		wrapperProps: {},
		context: {}
	}

	constructor(props) {
		super(props);
		this.handleMouseClick = this.handleMouseClick.bind(this);
		this.changeCase = this.changeCase.bind(this);
		this.addPanel = this.addPanel.bind(this);
		this.setWrapper = this.setWrapper.bind(this);
		this.setContext = this.setContext.bind(this);
	}

	UNSAFE_componentWillMount() {
		core.init({
			setWrapper: this.setWrapper,
			addPanel: this.addPanel,
			openMenu: () => {
				this.setState({ isMenuOpen: true });
			},
		});
		document.addEventListener('mousedown', this.handleMouseClick);
		const Case = core.getCaseById(localStorage.getItem('currentCaseID'));
		if (Case) {
			this.setState({
				CurrentCase: Case
			});
		}
	};

	private handleMouseClick = (event: MouseEvent) => {
		var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

		if ((!isMac && event.altKey) || (isMac && event.metaKey)) {
			event.preventDefault();
			this.setState({ isMenuOpen: !this.state.isMenuOpen });
		}
	};

	setContext(nextContext) {
		this.setState({
			context: nextContext
		})
	}

	addPanel(add) {
		if (add.item) {
			add.item = Object.assign(add.item, { id: add.item.id || core.getId('panel') });
		}
		if (add.tool) {
			add.tool = Object.assign(add.tool, { id: add.tool.id || core.getId('panel') });
		}

		this.setState(state => {
			const newState: any = {
				...state,
				panelTools: state.panelTools,
				panelItems: state.panelItems
			};

			if (state.panelTools.findIndex(item => item.id === add.item.id) >= 0) {
				newState.panelTools = newState.panelTools.map(tool => {
					if (tool.id === add.tool.id) {
						return add.tool;
					}
					return tool;
				})
			} else {
				newState.panelTools = add.tool ? [...state.panelTools, add.tool] : state.panelTools;
			}

			if (state.panelItems.findIndex(item => item.id === add.item.id) >= 0) {
				newState.panelItems = newState.panelItems.map(item => {
					if (item.id === add.item.id) {
						return add.item;
					}
					return item;
				})
			} else {
				newState.panelItems = add.item ? [...state.panelItems, add.item] : state.panelItems;
			}
			return newState;
		});
	}

	setWrapper(Wrapper: typeof React.Component) {
		this.setState({
			Wrapper: Wrapper
		})
	}

	changeCase(CurrentCase: any, currentCaseID: string) {
		this.setState({
			CurrentCase: CurrentCase,
			isMenuOpen: false
		});
		localStorage.setItem('currentCaseID', currentCaseID);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleMouseClick);
	}

	render() {

		const { isMenuOpen, CurrentCase, panelItems, panelTools, Wrapper, context } = this.state;
		const Context = core.getReactContext;

		if (isMenuOpen) {
			return (
				<Menu cases={core.cases} onChange={this.changeCase} />
			)
		}

		const Wrap = Wrapper || ((props: any) => props.children)

		return (
			<Context.Provider value={{ ...context, setContext: this.setContext }}>
				<Wrap>
					<CurrentCase />
				</Wrap>
				{core.config.hidePanel !== true && (
					<Panel items={panelItems} tools={panelTools} />
				)}
			</Context.Provider>
		)
	}
}

export default UI;