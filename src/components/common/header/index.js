import React,{ Component } from 'react';
import { connect } from 'react-redux'
import './index.scss';
import TopPart from './topPart';
import BottomPart from './bottomPart'
import { loginDataAction } from '../../../actions/header';
import 'antd/dist/antd.css'
import { withRouter } from 'react-router-dom'


class Header extends Component{
    render(){
        return (
            <div className='header'> 
                <div className='header-wrapper'>
                    <TopPart loginData={this.props.loginData}  loginDataFunc={this.props.loginDataFunc} />
                    <BottomPart  />
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state,ownProps)=>{
    return {
        loginData:state.loginDataReducer.data||{},
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
        loginDataFunc:(data)=>{
            dispatch(loginDataAction(data))
        }
    }
}
/*
* 这里必须要加withRouter，否则导航组件Header 无法拿到 history,location,match
* 请看链接问题【withRouter有什么用？】： https://segmentfault.com/q/1010000015964411 
*/
export default  withRouter( connect(mapStateToProps,mapDispatchToProps)(Header) );