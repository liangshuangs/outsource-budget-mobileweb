/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import '../order/payInfo.scss'

class TeamInfo extends React.Component {
    render() {
        return (
            <div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">技术合作申请种类：</label>
                        <span className="desc">技术合作－(技术类)</span>
                    </div>
                    <div className="calss-desc">合作</div>
                </div>
                <div className="item-container">
                    <div className="item">
                        <label className="title">预计技术合作时成本:</label>
                        <span className="desc">10000.00</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default TeamInfo