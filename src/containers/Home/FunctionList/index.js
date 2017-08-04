import React, { Component } from 'react';
import { Menu, Icon, Switch, Layout } from 'antd';
const { Sider } = Layout

class FunctionList extends Component {
  state = {  }
  render() {
    return (
        <Menu
          defaultSelectedKeys={['1']}
          mode={'inline'}
        >
          <Menu.Item key="1"> <Icon type="mail" />
            监控日志
          </Menu.Item>
          <Menu.Item key="2"> <Icon type="calendar" />
            服务在线
          </Menu.Item>
        </Menu>
    );
  }
}

export default FunctionList;