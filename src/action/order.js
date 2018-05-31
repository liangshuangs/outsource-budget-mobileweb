/**
 * Created by liangshuang on 18/5/28.
 */
import { httpApi } from '../http/http'

// 获取订单详情
export function getOrderInfo(param) {
    return {
        [httpApi]: {
            url: `/ajax/query/queryManager_getXINorderDetail.action?applicationId=${param}`,
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
            url: `/ajax/query/queryManager_getXINapplyProDetail.action?applicationId=${param}`,
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
            url: `/ajax/query/queryManager_getXINapplyNoProDetail.action?applicationId=${param}`,
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
            url: `/ajax/query/queryManager_getXINurlOpt.action?targetTaskId=${targetTaskId}`,
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
            url: `/ajaxOA/approve_doApprove.action?${params}`,
            options: {
                method: 'GET',
            },
            types: ['GET_APPROVE_SUCCESS'],
        },
    }
}