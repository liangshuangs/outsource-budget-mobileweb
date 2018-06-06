/**
 * Created by liangshuang on 18/5/28.
 */
import { httpApi } from '../http/http'
export function getUserInfo () {
    return {
        [httpApi]:{
            url: '/api/v1.0.0/sdm/getCurrentStaff',
            options:{
                method: 'GET',
            },
            types: ['GET_USER_INFO_SUCCESS', 'GET_USER_INFO_REQUEST', 'GET_USER_INFO_FAILURE', 'NETWORK_FAILURE']

        }
    }
}
// 获取订单详情
export function getOrderInfo(param) {
    return {
        [httpApi]: {
            url: `/api/v1.0.0/AIOMS/ajax/query/queryManager_getXINorderDetail.action?applicationId=${param}`,
            options: {
                method: 'GET',
            },
            types: ['GET_ORDER_INFO_SUCCESS'],
        },
    }
}
// 获取申请单项目类详情
export function getApplayProInfo(param) {
    return {
        [httpApi]: {
            url: `/api/v1.0.0/AIOMS/ajax/query/queryManager_getXINapplyProDetail.action?applicationId=${param}`,
            options: {
                method: 'GET',
            },
            types: ['GET_APPLYPRO_INFO_SUCCESS'],
        },
    }
}
// 获取申请单非项目类详情
export function getApplayNoProInfo(param) {
    return {
            [httpApi]: {
            url: `/api/v1.0.0/AIOMS/ajax/query/queryManager_getXINapplyNoProDetail.action?applicationId=${param}`,
            options: {
                method: 'GET',
            },
            types: ['GET_APPLYNOPRO_INFO_SUCCESS'],
        },
    }
}
// 获取同意驳回url
export function getUrl(targetTaskId) {
    return {
        [httpApi]: {
            url: `/api/v1.0.0/AIOMS/ajax/query/queryManager_getXINurlOpt.action?targetTaskId=${targetTaskId}`,
            options: {
                method: 'GET',
            },
            types: ['GET_URL_SUCCESS'],
        },
    }
}
// 同意／驳回接口
export function approve(params) {
    return {
        [httpApi]: {
            url: `/api/v1.0.0/AIOMS/ajaxOA/approve_doApprove.action?${params}`,
            options: {
                method: 'GET',
            },
            types: ['GET_APPROVE_SUCCESS'],
        },
    }
}
// 获取服务器时间
export function getBudgetServerTime() {
    return {
        [httpApi]: {
            url: `/BudgetNew/budget/mobileHttp_getBudgetServerTime`,
            options: {
                method: 'GET',
            },
            types: ['GET_TIME_SUCCESS'],
        },
    }
}
// 获取预算详情
export function getBudgetInfo(params) {
    return {
        [httpApi]: {
            url: `/BudgetNew/budget/mobileHttp_queryAuditInfo?${params}`,
            options: {
                method: 'GET',
            },
            types: ['GET_BUDGETINFO_SUCCESS'],
        },
    }
}