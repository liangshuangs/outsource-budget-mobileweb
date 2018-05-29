/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import '../order/payInfo.scss'
import currency from '../../utils/currency'

class TeamInfo extends React.Component {
    render() {
        let data = this.props.data ? this.props.data : []
        return (
            <div>
                {
                    data.length > 0 ?
                        <div>
                            {
                                data[0].technicalCooperationParent === '2' ?
                                    <div>
                                        <div className="item-container">
                                            <div className="item">
                                                <label className="title">技术合作申请种类：</label>
                                                <span className="desc">技术合作-II(人员类)</span>
                                            </div>
                                        </div>
                                        <div className="item-container">
                                            <div className="item">
                                                <label className="title">技术合作人员数量:</label>
                                                <span className="desc">{data[0].technicalCooperationNum}</span>
                                            </div>
                                        </div>
                                    </div>
                                    :null
                            }
                            {
                                data[0].technicalCooperationParent === '1' ?
                                    <div>
                                        <div className="item-container">
                                            <div className="item">
                                                <label className="title">技术合作申请种类：</label>
                                                <span className="desc">技术合作-I(技术类)</span>
                                            </div>
                                        </div>
                                        <div className="item-container">
                                            <div className="item">
                                                <label className="title">合作类型:</label>
                                                <span className="desc">{data[0].technicalCooperationChild === '1' ? '委托开发' : '技术合作'}</span>
                                            </div>
                                        </div>
                                    </div>
                                    :null
                            }

                            <div className="item-container">
                                <div className="item">
                                    <label className="title">预计技术合作时成本:</label>
                                    <span className="desc">{data[0].outCost ? currency(data[0].outCost) : 0.00}</span>
                                </div>
                            </div>
                        </div>
                        : null
                }

            </div>
        )
    }
}
export default TeamInfo