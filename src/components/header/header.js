/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import goBackApp from '../../utils/goBack'
import './header.scss'
export default class HeaderCom extends React.Component{
    goBack = () => {
        goBackApp()
    }
    render() {
        const {title} = this.props
        return(
            <div className="header">
                <span className='icon left' >
                   <i className='iconfont icon-return' onClick={this.goBack}/>
                </span>
                <div className="title">{title}</div>
            </div>
            )

    }
}
