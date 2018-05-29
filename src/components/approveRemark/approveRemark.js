/**
 * Created by liangshuang on 18/5/25.
 */
import React from 'react'
import './approveRemark.scss'

export default class Component extends React.Component {
    render() {
        return (
            <div className="approve-container">
                <div className="approve-item-container">
                    <div className="approve-item">
                        <label className="approve-title">当前审批人：</label>
                        <span className="approve-desc">张某</span>
                    </div>
                </div>
                <div className="approve-item-container">
                    <div className="approve-item-remark">
                        <label className="approve-title">审批意见：</label>
                        <textarea className="approve-remark">通过</textarea>
                    </div>
                </div>
            </div>
        )
    }
}