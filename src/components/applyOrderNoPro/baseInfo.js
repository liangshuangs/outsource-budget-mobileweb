/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import '../order/payInfo.scss'

class BaseInfo extends React.Component {
    render() {
        return (
            <div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">合同申请单编号：</label>
                        <span className="desc">20170301394154-0001</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">项目名称:</label>
                        <span className="desc">测试项目</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">成本中心：</label>
                        <span className="desc">94154</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">区域－大区：</label>
                        <span className="desc">CIT</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">申请公司：</label>
                        <span className="desc">北京亚信数件</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">申请日期：</label>
                        <span className="desc">2017-03-01</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">签约性质：</label>
                        <span className="desc">新签</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">申请人：</label>
                        <span className="desc">余桂</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">是否BG间调用：</label>
                        <span className="desc">否</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">预计技术合作内容：</label>
                        <span className="desc">测试</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">技术合作原因：</label>
                        <span className="desc">测试</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default BaseInfo