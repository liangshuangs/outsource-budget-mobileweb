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
            GATEWAY:'https://xin-sandbox.asiainfo.com:16020',
        }
    }else if (env === 'test') {
        // 测试
        return {
            ENV:'test',
            ROOT_PATH:'/mobileapps/kara-ticket-booking-mobileweb',
            GATEWAY:'https://xin-sandbox.asiainfo.com:16020',
        }
    }else{
        // 生产 process.env.REACT_APP_ENV === 'production'
        return {
            ENV:'production',
            ROOT_PATH:'/mobileapps/kara-ticket-booking-mobileweb',
            GATEWAY:'https://xin-sandbox.asiainfo.com:16020',
        }
    }

}
export default env()