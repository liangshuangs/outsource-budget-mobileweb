/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import './payInfo.scss'

class BaseInfo extends React.Component {
    render() {
        let data = this.props.data ? this.props.data : []
        return (
            <div>
                {
                    data.length > 0 ? <div>
                        <div className="item-container">
                            <div className="item">
                                <label className="title">订单编号：</label>
                                <span className="desc">{data[0].applicationCode}</span>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <label className="title">商务经理:</label>
                                <span className="desc">{data[0].commericalManagerName}</span>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <label className="title">项目代码：</label>
                                <span className="desc">{data[0].projectCode}</span>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <label className="title">项目名称：</label>
                                <span className="desc">{data[0].projectName}</span>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <label className="title">申请部门：</label>
                                <span className="desc">{data[0].sbuName}</span>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <label className="title">技术合作种类：</label>
                                <span className="desc">{data[0].techCoopApplyTypeName}</span>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <label className="title">技术合作商类型：</label>
                                <span className="desc">{data[0].techCoopTypeName}</span>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <label className="title">技术合作商名称：</label>
                                <span className="desc">{data[0].techCoopName}</span>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <label className="title">服务开始时间：</label>
                                <span className="desc">{data[0].serviceBeginDate}</span>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <label className="title">服务结束时间：</label>
                                <span className="desc">{data[0].serviceEndDate}</span>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <label className="title">币种：</label>
                                <span className="desc">币种没有传</span>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <label className="title">签约方：</label>
                                <span className="desc">{data[0].contractingPartyName}</span>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="item">
                                <label className="title">是否BG间调用：</label>
                                <span className="desc">{data[0].bgFlagName}</span>
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