import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux'

const columns = [
  { title: 'Broker', dataIndex: 'broker', key: 'broker', width: 100, fixed: 'left' }, 
  { title: '服务uuid', dataIndex: 'uuid', key: 'uuid', width: 100, fixed: 'left' }, 
  { title: '服务地址', dataIndex: 'address', key: 'address' },
  { title: '发送请求/接收应答', dataIndex: 'sendreq_recvres', key: 'sendreq_recvres' }, 
  { title: '接收请求/发送应答', dataIndex: 'recvreq_sendres', key: 'recvreq_sendres' }, 
  { title: '发送发布/接收发布', dataIndex: 'sendpub_recvpub', key: 'sendpub_recvpub' }, 
  { title: '发送队列/接收队列', dataIndex: 'sendqueue_recvqueue', key: 'sendqueue_recvqueue' }, 
  { title: '心跳时间', dataIndex: 'heartbeat', key: 'heartbeat' }, 
  { title: '服务名', dataIndex: 'name', key: 'name' }, 
  { title: '服务ID', dataIndex: 'id', key: 'id' }
];

class RealtimePage extends Component {
  state = {  }
  render() {
    return (
      <Table style={{maxWidth: '100%'}}
        columns={columns} 
        dataSource={this.props.data} 
        pagination={false}
        scroll={{x: 1200}}
        >
      </Table>
    );
  }
}

////////////////////////////////////////////////////////////////////
function mapStateToProps(state) {
  return {
    data: state.onlineServerRealtimeData
  }
}

function mapDispatchToProps(dispatch) {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(RealtimePage)
