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
                        <label className="title">申请部门:</label>
                        <span className="desc">亚信软件CMC</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">申请日期：</label>
                        <span className="desc">2018－01-08</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">是否提前立项：</label>
                        <span className="desc">是</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">区域－大区：</label>
                        <span className="desc">CMC-华东区</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">项目代码：</label>
                        <span className="desc">1BJ1711357</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">项目名称：</label>
                        <span className="desc">浙江移动物联网业务支撑及经分取数优化服务订单</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">分包预算币种：</label>
                        <span className="desc">人民币</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">分包预算：</label>
                        <span className="desc">250000.00</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">销售合同是否允许技术合作：</label>
                        <span className="desc">否</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">预计技术合作内容：</label>
                        <span className="desc">负责浙江移动物联网业务支撑及经分取数优化服务订单项目的需求调研，需求，需求测试及上线工作</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">预计技术合作内容：</label>
                        <span className="desc">负责浙江移动物联网业务支撑及经分取数优化服务订单项目的需求调研，需求，需求测试及上线工作</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">签约性质：</label>
                        <span className="desc">续签</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">申请人：</label>
                        <span className="desc">孙晓丹</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">是否BG间调用：</label>
                        <span className="desc">否</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default BaseInfo