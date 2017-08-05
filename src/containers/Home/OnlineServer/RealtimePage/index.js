import React, { Component } from 'react';
import { Table, Icon } from 'antd';

const columns = [{
    title: 'Broker',
    dataIndex: 'broker',
    key: 'broker',
    width: 100,
    fixed: 'left',
  }, {
    title: '服务uuid',
    dataIndex: 'uuid',
    key: 'uuid',
    width: 100,
    fixed: 'left',
  }, {
    title: '服务地址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '发送请求/接收应答',
    dataIndex: 'sendreq/recvres',
    key: 'sendreq/recvres',
  }, {
    title: '接收请求/发送应答',
    dataIndex: 'recvreq/sendres',
    key: 'recvreq/sendres',
  }, {
    title: '发送发布/接收发布',
    dataIndex: 'sendpub/recvpub',
    key: 'sendpub/recvpub',
  }, {
    title: '发送队列/接收队列',
    dataIndex: 'sendqueue/recvqueue',
    key: 'sendqueue/recvqueue',
  }, {
    title: '心跳时间',
    dataIndex: 'heartbeat',
    key: 'heartbeat',
  }, {
    title: '服务名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '服务ID',
    dataIndex: 'id',
    key: 'id',
  }
];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

class RealtimePage extends Component {
  state = {  }
  render() {
    return (
      <Table style={{maxWidth: '100%'}}
        columns={columns} 
        dataSource={data} 
        pagination={false}
        scroll={{x: 1500}}
        >
      </Table>
    );
  }
}

export default RealtimePage;