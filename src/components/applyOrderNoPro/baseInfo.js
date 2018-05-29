/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import '../order/payInfo.scss'
import currency from '../../utils/currency'
class BaseInfo extends React.Component {
    render() {
        let data = this.props.data ? this.props.data : []
        console.log(data)
        return (
            <div>
                {
                    data.length > 0 ?
                        <div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">合同申请单编号：</label>
                                    <span className="desc">{data[0].applicationCode}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">项目名称:</label>
                                    <span className="desc">{data[0].projectName}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">成本中心：</label>
                                    <span className="desc">{data[0].costcenterId}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">区域－大区：</label>
                                    <span className="desc">{data[0].largeArea}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">申请公司：</label>
                                    <span className="desc">{data[0].applyCompany}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">申请日期：</label>
                                    <span className="desc">{data[0].applyDate}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">签约性质：</label>
                                    <span className="desc">{data[0].contractualBasis}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">申请人：</label>
                                    <span className="desc">{data[0].createName}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">是否BG间调用：</label>
                                    <span className="desc">{data[0].bgFlagName}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">预计技术合作内容：</label>
                                    <span className="desc">{data[0].technicalCooperationContent}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">技术合作原因：</label>
                                    <span className="desc">{data[0].technicalCooperationReason}</span>
                                </div>
                            </div>
                        </div>
                        : null
                }

            </div>
        )
    }
}
export default BaseInfo