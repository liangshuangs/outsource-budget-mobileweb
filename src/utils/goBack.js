/**
 * Created by liangshuang on 18/6/7.
 */
export default function goBackApp () {
    try {
        window.kara.closePage()
    } catch (e) {
        let ua = navigator.userAgent
        if (ua.indexOf('Android') !== -1 || ua.indexOf('Linux') !== -1) {
            window.listener.backApp()
        } else {
            window.location.href = 'objc://backAppYearTask'
        }
    }
}