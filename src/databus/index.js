import * as onlineServerAction from '../actions/onlineServerAction'
import store from '../utils/store'

export function login(username, password) {
  let initData = [{
    key: '1',
    broker: 'Broker1',
    uuid: '12345',
    address: 'New York No. 1 Lake Park',
    sendreq_recvres: '343/4354',
    recvreq_sendres: '3254/4',
    sendpub_recvpub: '23/435',
    sendqueue_recvqueue: '325/0',
    heartbeat: '2017/08/06',
    name: 'broker1',
    id: '324'
  }, {
    key: '2',
    broker: 'Broker1',
    uuid: '12345',
    address: 'New York No. 1 Lake Park',
    sendreq_recvres: '343/4354',
    recvreq_sendres: '3254/4',
    sendpub_recvpub: '23/435',
    sendqueue_recvqueue: '325/0',
    heartbeat: '2017/08/06',
    name: 'broker1',
    id: '324'
  }, {
    key: '3',
    broker: 'Broker1',
    uuid: '12345',
    address: 'New York No. 1 Lake Park',
    sendreq_recvres: '343/4354',
    recvreq_sendres: '3254/4',
    sendpub_recvpub: '23/435',
    sendqueue_recvqueue: '325/0',
    heartbeat: '2017/08/06',
    name: 'broker1',
    id: '324'
  }];

  setInterval(function() {
    initData.map((item) => {
      item.uuid = String(Math.random()).slice(2, 10)
      return item
    })
    store.dispatch(onlineServerAction.update(initData))
  }, 3000)
}