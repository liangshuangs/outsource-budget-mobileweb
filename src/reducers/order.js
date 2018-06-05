/**
 * Created by liangshuang on 18/5/28.
 */
import caseReducer from './caseReducer'

const order = {
    info:{},
    budgetInfo:{}
}
function getUserInfo(state, action) {
    return {...state, info:{...action.response.staffInfo}}
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
function getBudgetServerTime(state, action) {
    return {...state, info:{...action.response}}
}
function getBudgetInfo(state, action) {
    return {...state, budgetInfo:{...action.response}}
}
export default caseReducer(order, {
    GET_ORDER_INFO_SUCCESS: getOrderInfo,
    GET_APPLYPRO_INFO_SUCCESS:getApplayProInfo,
    GET_APPLYNOPRO_INFO_SUCCESS:getApplayNoProInfo,
    GET_URL_SUCCESS:getUrl,
    GET_USER_INFO_SUCCESS: getUserInfo,
    GET_TIME_SUCCESS:getBudgetServerTime,
    GET_BUDGETINFO_SUCCESS:getBudgetInfo
})