/**
 * Created by liangshuang on 18/5/31.
 */
import React from 'react'
export default function mixin(wrappedComponet) {
    return class Hoc extends React.Component{
        render(){
            return(
                <div>
                    <p>我是经过高阶组件修饰过的</p>
                    <wrappedComponet />
                </div>
                )
        }
    }
}