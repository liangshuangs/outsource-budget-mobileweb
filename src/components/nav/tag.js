/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'

import './tag.scss'
export default class TagCom extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            selectIndex:0
        }
    }
    changeItem = (index,item) => {
        this.setState({
            selectIndex:index
        })
        this.props.handleClick(item)
    }
    render() {
        const {title} = this.props
        return(
            <ul className="nav">
                {
                    title.map((item,index)=>{
                        return (
                            <li key={index} className={this.state.selectIndex === index ? "nav-active" : ''} onClick={()=>this.changeItem(index,item)}>{item}</li>
                        )
                    })
                }
            </ul>
        )
    }
}