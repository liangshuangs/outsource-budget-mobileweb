/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import '../order/payInfo.scss'
import currency from '../../utils/currency'

class BaseInfo extends React.Component {
    render() {
        let data = this.props.data ? this.props.data : []
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
                                    <label className="title">申请部门:</label>
                                    <span className="desc">{data[0].applyBu}</span>
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
                                    <label className="title">是否提前立项：</label>
                                    <span className="desc">{data[0].isProjectAdvance}</span>
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
                                    <label className="title">分包预算币种：</label>
                                    <span className="desc">{data[0].currency}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">分包预算：</label>
                                    <span className="desc">{data[0].subcontractBudget ? currency(data[0].subcontractBudget) : 0.00}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">销售合同是否允许技术合作：</label>
                                    <span className="desc">{data[0].isTechnicalCooperation}</span>
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
                        </div>
                        : null
                }

            </div>
        )
    }
}
export default BaseInfo