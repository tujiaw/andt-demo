import React, { Component } from 'react';
import { Tabs, Input, Icon } from 'antd';
import RealtimePage from './RealtimePage'
import HistoryPage from './HistoryPage'
const { TabPane } = Tabs;

const TAB_LIST = [
  { tab: '服务实时数据', key: '0', component: <RealtimePage/> },
  { tab: '服务历史数据', key: '1', component: <HistoryPage/> },
]

const operations = (
  <div>
    <Input placeholder="输入UUID搜索" prefix={<Icon type="search" />}/>
  </div>
)

class OnlineServer extends Component {
  state = { 
    activeKey: '0'
  }

  onChange = (key) => {
    this.setState({ activeKey: key })
    const item = TAB_LIST.find((item) => {
      return item.key === key
    })
    if (item && this.props.onTabChanged) {
      this.props.onTabChanged(item)
    }
  }

  render() {
    return (
      <Tabs tabBarExtraContent={operations} 
        activeKey={this.state.activeKey} 
        onChange={this.onChange}
        style={{background: '#fff', margin: 10, borderRadius: 5}}
      >
        {TAB_LIST.map((item) => {
          return <TabPane tab={item.tab} key={item.key}>{item.component}</TabPane>  
        })}
      </Tabs>
    );
  }
}

export default OnlineServer;