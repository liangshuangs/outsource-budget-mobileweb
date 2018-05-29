/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import '../order/payInfo.scss'

class TechTeamInfo extends React.Component {
    render() {
        return (
            <div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">技术合作服务周期开始日期：</label>
                        <span className="desc">2017-03-01</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">技术合作服务周期结束日期:</label>
                        <span className="desc">2017-03-01</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">技术合作商类型：</label>
                        <span className="desc">核心技术合作商</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">是否客户推荐技术合作商：</label>
                        <span className="desc">否</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">技术合作商名称：</label>
                        <span className="desc">北京亚信数件</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default TechTeamInfo