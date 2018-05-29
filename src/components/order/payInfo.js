/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import './payInfo.scss'
import currency from '../../utils/currency'

class PayInfo extends React.Component {
    render() {
        let data = this.props.data
        return (
            <div>
                {
                    data.length > 0 ? <div><div className="item-container">
                        <div className="item">
                            <label className="title">技术合作订单金额：</label>
                            <span className="desc">{data[0].orderAmount ? currency(data[0].orderAmount) : 0.00}</span>
                        </div>
                    </div>
                        <div className="item-container">
                            <div className="remark-container">
                                <label className="title">备注：</label>
                                <textarea className="remark-desc">{data[0].REMARKS}</textarea>
                            </div>
                        </div></div>
                        : null
                }
            </div>
        )
    }
}
export default PayInfo