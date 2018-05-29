import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import order from './order'
export default combineReducers({
    order,
  routing: routerReducer, // 整合路由
})
