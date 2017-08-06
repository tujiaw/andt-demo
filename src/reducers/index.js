import { combineReducers } from 'redux'
import  onlineServerRealtimeData from './onlineServerRealtimeData'
import windowinfo from './windowinfo'

const reducers = combineReducers({
  onlineServerRealtimeData,
  windowinfo
})

export default reducers