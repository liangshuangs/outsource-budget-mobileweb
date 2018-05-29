/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import '../order/payInfo.scss'

class BaseInfo extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="item-title">
                        <span>基本信息</span>
                        <span className="icon down">
                            <i className="iconfont icon-return"></i>
                        </span>
                    </div>
                    <div className="item-container">
                        <div className="item">
                            <label className="title">项目编号：</label>
                            <span className="desc">1BJ171314M</span>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item">
                            <label className="title">项目名称:</label>
                            <span className="desc">亚信软件CMC</span>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item">
                            <label className="title">项目经理：</label>
                            <span className="desc">周德平</span>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item">
                            <label className="title">BU：</label>
                            <span className="desc">亚信软件CMC</span>
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
                            <label className="title">区域：</label>
                            <span className="desc">CU-行业合作二部</span>
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
                            <label className="title">合同额：</label>
                            <span className="desc">1764857.49</span>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item">
                            <label className="title">净销售额：</label>
                            <span className="desc">250000.00</span>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item">
                            <label className="title">C-FORM GM：</label>
                            <span className="desc">29.23%</span>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item">
                            <label className="title">本版GM：</label>
                            <span className="desc">27.16%</span>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item">
                            <label className="title">实施费用／NetOrder：</label>
                            <span className="desc">4..53</span>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item">
                            <label className="title">项目版本号：</label>
                            <span className="desc">XXXX</span>
                        </div>
                    </div>
                    <div className="item-title">
                        <span>预算信息</span>
                        <span className="icon down">
                            <i className="iconfont icon-return"></i>
                        </span>
                    </div>
                    <div className="item-container">
                        <div className="item">
                            <label className="title">人工：</label>
                            <span className="desc">735</span>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item">
                            <label className="title">实施：</label>
                            <span className="desc">80.00</span>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item">
                            <label className="title">培训：</label>
                            <span className="desc">0</span>
                        </div>
                    </div>
                    <div className="item-container">
                        <div className="item">
                            <label className="title">外包：</label>
                            <span className="desc">400.00</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default BaseInfo