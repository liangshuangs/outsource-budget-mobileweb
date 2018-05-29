/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import './payInfo.scss'

class BaseInfo extends React.Component {
    render() {
        return (
            <div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">订单编号：</label>
                        <span className="desc">AI-OS-201805-047-亚信软件CUC-1BJ171285S</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">商务经理:</label>
                        <span className="desc">孙鹏</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">项目代码：</label>
                        <span className="desc">1BJ171285S</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">项目名称：</label>
                        <span className="desc">2016中国联通互联网综合维护总部系统升级改造工程软件委托开发合同</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">申请部门：</label>
                        <span className="desc">亚信软件CUC</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">技术合作种类：</label>
                        <span className="desc">技术合作－I(人员类)</span>
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
                        <label className="title">技术合作商名称：</label>
                        <span className="desc">南京迈特科技股份有限公司</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">服务开始时间：</label>
                        <span className="desc">2018-01-01</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">服务结束时间：</label>
                        <span className="desc">2018－12-31</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">币种：</label>
                        <span className="desc">人民币</span>
                    </div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">签约方：</label>
                        <span className="desc">杭州亚信软件有限公司</span>
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