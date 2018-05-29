/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import './header.scss'
export default class HeaderCom extends React.Component{
    render() {
        const {title} = this.props
        return(
            <div className="header">
                <span className='icon left' >
                   <i className='iconfont icon-return'/>
                </span>
                <div className="title">{title}</div>
            </div>
            )

    }
}
