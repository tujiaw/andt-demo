import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class FunctionList extends Component {
  onSelect = (item) => {
    if (this.props.onSelectChanged) {
      this.props.onSelectChanged(item.key)
    }
  }

  componentDidMount() {
    if (this.props.onSelectChanged) {
      this.props.onSelectChanged(this.props.defaultKey || "0")
    }
  }

  render() {
    const defaultKey = this.props.defaultKey || "0"
    return (
        <Menu
          defaultSelectedKeys={[defaultKey]}
          mode={'inline'}
          onSelect={this.onSelect}
        >
          {this.props.list.map((item) => {
            return <Menu.Item key={item.key}> <Icon type={item.icon} />{item.text}</Menu.Item>
          })}
        </Menu>
    );
  }
}

export default FunctionList;