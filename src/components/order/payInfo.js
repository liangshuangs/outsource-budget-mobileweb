/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import './payInfo.scss'

class PayInfo extends React.Component {
    render() {
        return (
            <div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">技术合作订单金额：</label>
                        <span className="desc">$899454.00</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="remark-container">
                        <label className="title">备注：</label>
                        <textarea className="remark-desc">$899454.00</textarea>
                    </div>
                </div>
            </div>
        )
    }
}
export default PayInfo