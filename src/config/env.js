/**
 * Created by liangshuang on 18/5/28.
 */
function env() {
    const env = process.env.REACT_APP_ENV
    if (env === 'development') {
        // 开发
        return {
            ENV:'development',
            ROOT_PATH:'/mobileapps/kara-ticket-booking-mobileweb',
            GATEWAY:'http://10.21.6.26:7001/AIOMS/ajax/query',
            BAOKU:'http://apics.baoku.com/open/api/login/oaLogin',
        }
    }else if (env === 'test') {
        // 测试
        return {
            ENV:'test',
            ROOT_PATH:'/mobileapps/kara-ticket-booking-mobileweb',
            GATEWAY:'https://xin-sandbox.asiainfo.com:16020/api/',
            BAOKU:'http://apics.baoku.com/open/api/login/oaLogin',
        }
    }else{
        // 生产 process.env.REACT_APP_ENV === 'production'
        return {
            ENV:'production',
            ROOT_PATH:'/mobileapps/kara-ticket-booking-mobileweb',
            GATEWAY:'https://ims.asiainfo.com/AIOMS/ajax/query',
            BAOKU:'http://openapi.baoku.com/open/api/login/oaLogin',
        }
    }

}
export default env()