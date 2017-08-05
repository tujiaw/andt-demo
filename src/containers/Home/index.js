import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Layout, Row, Col, Button, Breadcrumb, Tabs, Input, Icon, Tooltip } from 'antd';
import Style from './style'
import history from '../../utils/history'

import FunctionList from '../../components/FunctionList'
import NavBar from '../../components/NavBar'
import LogMonitor from './LogMonitor'
import OnlineServer from './OnlineServer'

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

const FUNCTION_LIST = [
  { key: '0', icon: 'mail', text: '监控日志', path: '/monitor/log', component: LogMonitor },
  { key: '1', icon: 'calendar', text: '服务在线', path: '/monitor/online', component: OnlineServer },
]

class Home extends Component {
  state = {
    navBar: [],
    sideMenuWidth: 300,
    pageContentWidth: 0
  }

  onLockClick = () => {

  }

  onLogoutClick = () => {
    history.push('/')
  }

  onSelectChanged = (index) => {
    const item = FUNCTION_LIST.find(item => {
      return item.key === index
    })
    if (item) {
      history.push(item.path)
      this.setState({ navBar: [item.text] })
    }
  }

  onResize = () => {
    console.log(window.innerWidth)
    this.setState({ pageContentWidth: window.innerWidth - 200})
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  render() {
    return (
      <div style={Style.root}>
        <Layout>
          <Header>
            <Row type="flex" justify="space-between">
              <Col><span style={Style.title}>后台监控系统</span></Col>
              <Col>
                <Row>
                  <Tooltip placement="topLeft" title="重设密码">
                    <Button ghost={true} shape="circle" icon="lock" onClick={this.onLockClick} />
                  </Tooltip>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Tooltip placement="topLeft" title="退出">
                    <Button ghost={true}  shape="circle" icon="logout" onClick={this.onLogoutClick} />
                  </Tooltip>
                </Row>
              </Col>
            </Row>
          </Header>
          <Layout>
            <Sider style={{width: this.state.sideMenuWidth}}>
              <FunctionList onSelectChanged={this.onSelectChanged} list={FUNCTION_LIST}/>
            </Sider>
            <Content style={{width: this.state.pageContentWidth}}>
              <Row>
                <NavBar list={this.state.navBar}/>
              </Row>
              <Row>
                {FUNCTION_LIST.map((item, index) => {
                  return <Route key={index} path={item.path} component={item.component} />
                })}
              </Row>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Home;