/**
 * Created by liangshuang on 18/5/25.
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.modal = document.createElement('div')
        this.modal.classList.add('modal')
        if(props.className) {
            this.modal.classList.add(props.className)
        }
        document.body.appendChild(this.modal)
    }
    componentWillUnmount() {
        document.body.removeChild(this.modal)
    }
    render() {
        return ReactDOM.createPortal(
            <div className='content'>
                {this.props.children}
            </div>,
            this.modal
        )
    }
}