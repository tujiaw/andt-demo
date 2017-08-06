import * as onlineServerAction from '../actions/onlineServerAction'
import store from '../utils/store'

let realtimeStatus = {
    key: '1',
    broker: 'mainbroker',
    uuid: 'bridgetb2',
    address: '3234',
    sendreq_recvres: '3432212/4354',
    recvreq_sendres: '3222254/4222',
    sendpub_recvpub: '2322/435',
    sendqueue_recvqueue: '325/0',
    heartbeat: '2017-08-06 17:34:03',
    name: 'broker1',
    id: '1,2,3,4',
    ip: '127.0.0.1',
    signin_time: '2017-08-06 17:34:03',
    start_time: '2017-08-06 17:34:03'
}

export function login(username, password) {
  setInterval(function() {
    let realtimeStatusList = []
    for (let i = 0; i < 10; i++) {
      let a = {...realtimeStatus}
      a.key = String(i)
      realtimeStatusList.push(a)
    }

    realtimeStatusList = realtimeStatusList.map((item) => {
      item.uuid = String(Math.random()).slice(2, 10)
      return item
    })
    store.dispatch(onlineServerAction.update(realtimeStatusList))
  }, 3000)
}