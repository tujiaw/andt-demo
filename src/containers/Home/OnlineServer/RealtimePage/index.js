import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux'

const MAX_SCROLLX_WIDTH = 1500  // 各列宽度总和不能超过这个值
const columns = [
  { title: 'Broker', dataIndex: 'broker', key: '0', width: 90, fixed: 'left' }, 
  { title: '服务uuid', dataIndex: 'uuid', key: '1', width: 80, fixed: 'left' }, 
  { title: '服务地址', dataIndex: 'address', key: '2', width: 80 },
  { title: '发送请求/接收应答', dataIndex: 'sendreq_recvres', key: '3',  }, 
  { title: '接收请求/发送应答', dataIndex: 'recvreq_sendres', key: '4',  }, 
  { title: '发送发布/接收发布', dataIndex: 'sendpub_recvpub', key: '5',  }, 
  { title: '发送队列/接收队列', dataIndex: 'sendqueue_recvqueue', key: '6', width: 140 }, 
  { title: '心跳时间', dataIndex: 'heartbeat', key: '7', width: 135 }, 
  { title: '服务名', dataIndex: 'name', key: '8', width: 90 },
  { title: '服务ID', dataIndex: 'id', key: '9', width: 100 },
  { title: 'IP', dataIndex: 'ip', key: '19', width: 90 },
  { title: '登录时间', dataIndex: 'signin_time', key: '11', width: 135 },
  { title: '开始时间', dataIndex: 'start_time', key: '12', width: 135 }
];

class RealtimePage extends Component {
  render() {
    const { windowinfo } = this.props
    const tableWidth = windowinfo.width - windowinfo.siderWidth - 20  // 20边距
    const tableHeight = windowinfo.height - 210                       // 210距离window顶部高度  
    return (
        <Table style={{width: tableWidth}}
          columns={columns} 
          dataSource={this.props.data} 
          pagination={false}
          scroll={{x: MAX_SCROLLX_WIDTH, y: tableHeight}}
          >
        </Table>
    );
  }
}

////////////////////////////////////////////////////////////////////
function mapStateToProps(state) {
  return {
    windowinfo: state.windowinfo,
    data: state.onlineServerRealtimeData
  }
}

function mapDispatchToProps(dispatch) {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(RealtimePage)
