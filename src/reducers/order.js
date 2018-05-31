/**
 * Created by liangshuang on 18/5/28.
 */
import caseReducer from './caseReducer'

const order = {
    info :''
}
function getOrderInfo(state, action) {
    return {...state, info:{...action.response.staffInfo}}
}
function getApplayProInfo(state, action) {
    console.log(action)
    return {...state, info:{...action.response.staffInfo}}
}
function getApplayNoProInfo(state, action) {
    console.log(action)
    return {...state, info:{...action.response.staffInfo}}
}
function getUrl(state, action) {
    console.log(action)
    return {...state, info:{...action.response.data}}
}
export default caseReducer(order, {
    GET_ORDER_INFO_SUCCESS: getOrderInfo,
    GET_APPLYPRO_INFO_SUCCESS:getApplayProInfo,
    GET_APPLYNOPRO_INFO_SUCCESS:getApplayNoProInfo,
    GET_URL_SUCCESS:getUrl
})