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
                        if (item === '合作种类、成本、利润') {
                            console.log(item)
                        }
                        return (
                            <li key={index} style={{flex:item === '合作种类、成本、利润' ? 2 : 1}} className={this.state.selectIndex === index ? "nav-active" : ''} onClick={()=>this.changeItem(index,item)}>{item}</li>
                        )
                    })
                }
            </ul>
        )
    }
}