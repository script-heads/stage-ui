import * as React from "react";
import MenuItem from './MenuItem';

interface PanelItem {
  id: string
  name: string,
  render: React.SFC<{}>
}
interface PanelTool {
  id: string
  render: React.SFC<{}>
}

interface PanelProps {
  items: PanelItem[],
  tools: PanelTool[]
}

class Panel extends React.Component<PanelProps> {

  state = {
    isPanelOnTop: false as boolean,
    activePluginID: null as null | string
  }

  constructor(props) {
    super(props);
    this.changeActivePlugin = this.changeActivePlugin.bind(this);
  }

  UNSAFE_componentWillMount() {
    let onTop = localStorage.getItem('isPanelOnTop');
    this.setState({
      isPanelOnTop: onTop && (/true/i).test(onTop)
    })
  }

  createMenu(items: PanelItem[]) {
    if (!items.length) return null
    return items.map(item => (
      <MenuItem
        key={item.id}
        active={this.state.activePluginID === item.id}
        onChoose={this.changeActivePlugin}
        label={item.name}
        id={item.id}
      />
    ))
  }

  createToolbar(tools: PanelTool[]) {
    if (!tools.length) return null
    return tools.map(Tool => (
      <div
        className='documaker-panel-menu-toolbar-item'
        key={Math.random()}
      >
        <Tool.render />
      </div>
    ))
  }

  getBody(activePluginID) {
    const body = this.props.items.find(item => item.id === activePluginID);
    if (body) return <body.render />;
    return null;
  }

  changeActivePlugin(pluginID) {
    this.setState({
      activePluginID: this.state.activePluginID === pluginID ? null : pluginID
    })
  }

  movePanel() {
    const next = !this.state.isPanelOnTop;
    localStorage.setItem('isPanelOnTop', next.toString());
    this.setState({ isPanelOnTop: next });
  }

  render() {

    const { items, tools } = this.props;
    const { isPanelOnTop, activePluginID } = this.state;

    let className = 'documaker-panel';
    if (this.state.isPanelOnTop) className += ' documaker-panel-up';
    else className += ' documaker-panel-down';


    return (
      <React.Fragment>
        <div className={className}>
          {activePluginID && <div className='documaker-panel-body'>{this.getBody(activePluginID)}</div>}
          <div className='documaker-panel-menu'>
            <div className='documaker-panel-menu-items'>
              {this.createMenu(items)}
            </div>
            <div className='documaker-panel-menu-toolbar'>
              {this.createToolbar(tools)}
              <div
                className='documaker-panel-menu-toolbar-item'
                onClick={() => this.movePanel()}
              >{isPanelOnTop ? '↓' : '↑'}</div>
              {/* {activePluginID
                ? <div
                  className='documaker-panel-menu-toolbar-item'
                  onClick={() => this.setState({ activePluginID: null })}
                >X</div>
                : null} */}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Panel