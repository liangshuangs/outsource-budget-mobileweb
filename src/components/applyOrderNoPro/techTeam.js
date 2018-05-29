/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import '../order/payInfo.scss'

class TechTeamInfo extends React.Component {
    render() {
        let data = this.props.data ? this.props.data : []
        return (
            <div>
                {
                    data.length > 0 ?
                        <div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">技术合作服务周期开始日期：</label>
                                    <span className="desc">{data[0].serviceBeginTime}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">技术合作服务周期结束日期:</label>
                                    <span className="desc">{data[0].serviceEndTime}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">技术合作商类型：</label>
                                    <span className="desc">{data[0].teachTypeName}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">是否客户推荐技术合作商：</label>
                                    <span className="desc">{data[0].isRecommendedPartyName}</span>
                                </div>
                            </div>
                            <div className="item-container">
                                <div className="item">
                                    <label className="title">技术合作商名称：</label>
                                    <span className="desc">{data[0].teachname}</span>
                                </div>
                            </div>
                        </div>
                        : null
                }

            </div>
        )
    }
}
export default TechTeamInfo