/**
 * Created by liangshuang on 18/5/28.
 */
import 'whatwg-fetch'
import env from '../config/env'
import path from 'lodash/fp/path'
import set from 'lodash/set'
export const httpApi = Symbol('call ajax api')

// 解析
function parseFetch(response) {
    // TODO
    return response.json()
    const type = response.headers.get('content-type')
    if (type.includes('application/json')) {
        return response.json()
    } else if (type.includes('application/octet-stream')) {
        return response.blob()
    } else if (type.includes('text/plain')) {
        return response.text()
    } else if (type.includes('arrayBuffer')) {
        return response.arrayBuffer()
    } else if (type.includes('multipart/form-data')) {
        return response.formData()
    }
    return response
}

const requestApi = (url,options) => {
    const uri = `${env.GATEWAY}${url}`
    const {params,version,prefix,notWithToken,...opt} = options
    const token = sessionStorage.token

    if (!notWithToken && !path(['headers','Authorization'],options)) {
        if (!token) {
            throw new Error('请求授权')
        }
        set(opt,['headers','Authorization'],token)
    }
    if (!path(['headers','Content-Type'],options)) {
        set(opt,['headers','Content-Type'],'application/json')
    }
    if (path(['headers','Content-Type'],opt) === 'application/json' && options.body) {
        opt.body = JSON.stringify(options.body)
    }
    const fetchPromise = async () => {
        try {
            const res = await fetch(uri,opt)
            if (res.status === 401) {
                // 刷新token
            }
            return res.ok ? parseFetch(res) : Promise.reject(res)
        }catch (error) {
            return Promise.reject(error)
        }
    }
    return fetchPromise()

}
export default (catchError) => store => next => action => {
    const httpSymbol = action[httpApi]
    if (typeof httpSymbol === 'undefined') {
        return next(action)
    }
    const { options, types, url } = httpSymbol
    if (typeof url !== 'string') {
        throw new Error('请指定请求路径！')
    }
    if (!Array.isArray(types) || !types.every(x => typeof x === 'string')) {
        throw new Error('请指定的action types数组，且每个元素为string类型')
    }

    const actionWith = obj => ({
        ...action,
        [httpApi]: undefined,
        requestInformation: httpSymbol,
        ...obj,
    })

    const [
        successType,
        requestType = 'HTTP_REQUEST',
        failureType = 'HTTP_FAILURE',
        errorType = 'HTTP_ERROR',
    ] = types

    next(actionWith({ type: requestType }))

    return requestApi(url, options)
        .then((response) => {
            if (response.success === true || response.result === "000000") {
                return next(actionWith({
                    type: successType,
                    response,
                }))
            }
            return next(actionWith({
                response,
                type: failureType,
            }))
        })
        .catch((error) => {
            next(actionWith({
                error,
                type: errorType,
            }))
            if (typeof catchError === 'function') {
                catchError(error)
            }
        })
}