import React from 'react'
import '../order/payInfo.scss'
export default class ItemCom extends React.Component {
    render() {
        const {data, columns} = this.props;
        return (
            <div>
                {
                    columns.map((item,key)=>{
                        return(
                            <div className={item.className ? item.className : 'item-container'} key={key}>
                                <div className="item">
                                    <label className="title">{item.title}：</label>
                                    <span className='desc'>{item.render ? item.render(data[item.dataIndex]) : (item.default? item.default : data[item.dataIndex])}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        )
    }a
}
