/**
 * Created by liangshuang on 18/5/25.
 */
import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Modal from '../modal/modal'
import Item from '../common/item'
import {
    budgetApplyColumns,
    budgetchangeColumns
} from '../common/columns'

export default class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type:'',
            selectIndex: '基本信息',
            modalInfo: '',
            modalFlag: false,
            show0:true,
            show1:true,
            show2:true,
            show3:true,
            show4:true,
            show5:true,
            key:''
        }
    }

    handleClick = (type) => {
        this.setState({
            selectIndex: type
        })
    }
    handleConfrimClick = (type) => {
        this.setState({
            modalFlag: true
        })
    }
    cancel = () => {
        this.setState({
            modalFlag: false
        })
    }
    hidden = (key) => {
        let keyshow = `show${key}`
        this.setState(prevState=>(
            {
                key:key,
                [keyshow]:!prevState[keyshow]
            }
        ))
    }
    showFn = (key) => {
        let keyshow = `show${key}`
        return this.state[keyshow] ? 'show' :'hiddren'
    }
    confrimClick = () => {
        let type = this.state.type
        let param = this._geturlPram(type)
        this.props.approve(param)
        this.cancel()
    }
    _geturlPram = (type) => {
        let options = this.state.modalInfo ? this.state.modalInfo : ''
        let url = this.props.url[0]
        let acceptBtnUrlPrams = ''
        if (url && url.hasOwnProperty("acceptBtnUrl") && url.hasOwnProperty("rejectBtnUrl")) {
            if (type ==="同意") {
                acceptBtnUrlPrams = url.acceptBtnUrl.split('?')[1]
            }
            if (type ==="驳回") {
                acceptBtnUrlPrams = url.rejectBtnUrl.split('?')[1]
            }
        }else {
            console.log('获取URL失败')
            return
        }

        acceptBtnUrlPrams = `${acceptBtnUrlPrams}&rejectReason=${options}`
        return acceptBtnUrlPrams
    }
    changetText = (e) => {
        let info = e.target.value
        this.setState({
            modalInfo:info
        })
    }

    render() {
        let headerTitle = ''
        let path = window.location.pathname
        let data = this.props.data
        let columns = budgetApplyColumns
        if (path === '/budget/change') {
            headerTitle = '预算变更'
            columns =budgetchangeColumns
        }
        if (path === '/budget/apply') {
            headerTitle = '预算申请'
            columns =budgetApplyColumns
        }
        return (
            <div className="wrap index clearfix budget">
                <Header title={headerTitle}/>
                <div className="main">
                    <div className="body scroll f-bt">
                        {
                            this.props.loading ?
                                <div className="loading">loading</div>
                                :
                            columns.map((item,key)=>{
                                return(
                                    <div key={key}>
                                        <div className="item-title">
                                            <span>{item.title}</span>
                                            <span className="icon down">
                                                    <i className="iconfont icon-return" onClick={()=>this.hidden(key)}></i>
                                                </span>
                                        </div>
                                        <div className={this.showFn(key)}>
                                            <Item data={data} title={item.title} columns={item.children} base={this.state.base}/>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    {
                        this.state.modalFlag ?
                            <Modal>
                                <div className="modal-panel">
                                    <div className="modal-body">
                                        <textarea className="modal-info modal-text" placeholder="请输入审批意见，如无意见请按确定" onChange={(e)=>this.changetText(e)}>

                                        </textarea>
                                    </div>
                                    <div className="modal-footer">
                                        <a className="cancel" onClick={this.cancel}>取消</a>
                                        <a onClick={this.confrimClick}>确定</a>
                                    </div>
                                </div>
                            </Modal> : null
                    }

                    <Footer confirmClick={this.handleConfrimClick}/>
                </div>
            </div>

        )
    }
}