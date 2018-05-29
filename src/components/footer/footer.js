/**
 * Created by liangshuang on 18/5/22.
 */
import React from 'react'
import './footer.scss'

class FooterCom extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick = (type) => {
        this.props.confirmClick(type)
    }
    render() {
        return (
            <div className="footer">
                <button className='active' onClick={()=>this.handleClick('同意')}>同意</button>
                <button className='confirm' onClick={()=>this.handleClick('驳回')}>驳回</button>
            </div>
        )
    }
}
export default FooterCom