import React, { Component } from 'react';
import FunctionList from './FunctionList'
import RealtimePage from './RealtimePage'
import HistoryPage from './HistoryPage'
import { Layout, Row, Col, Button, Breadcrumb, Tabs, Input, Icon } from 'antd';
import Style from './style'
import history from '../../utils/history'
const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

const operations = (
  <div>
    <Input placeholder="输入UUID搜索" prefix={<Icon type="search" />}/>
  </div>
)

class Home extends Component {
  state = {  }

  onLockClick = () => {

  }

  onLogoutClick = () => {
    history.push('/')
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
                  <Button ghost={true} shape="circle" icon="lock" onClick={this.onLockClick} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button ghost={true}  shape="circle" icon="logout" onClick={this.onLogoutClick} />
                </Row>
              </Col>
            </Row>
          </Header>
          <Layout>
            <Sider breakpoint="lg" collapsedWidth="0" >
              <FunctionList />
            </Sider>
            <Content>
              <Row>
                <Breadcrumb style={{margin: 10}}>
                  <Breadcrumb.Item>服务在线</Breadcrumb.Item>
                  <Breadcrumb.Item>实时数据</Breadcrumb.Item>
                </Breadcrumb>
              </Row>
              <Row>
                <Tabs tabBarExtraContent={operations} style={{background: '#fff', margin: 10, borderRadius: 5}}>
                  <TabPane tab="服务实时数据" key="1"><RealtimePage /></TabPane>
                  <TabPane tab="服务历史数据" key="2"><HistoryPage /></TabPane>
                </Tabs>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Home;