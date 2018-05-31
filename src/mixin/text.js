/**
 * Created by liangshuang on 18/5/31.
 */
export function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}