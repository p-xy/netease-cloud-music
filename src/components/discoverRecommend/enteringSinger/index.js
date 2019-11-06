import React, { Component } from 'react'
import { Row,Col,Button } from 'antd';
import 'antd/dist/antd.css';
import './index.scss'
import { withRouter } from 'react-router-dom'

class EnteringSinger extends Component {
    handleClick = (id) =>{ this.props.history.push(`/user/home?id=${id}`)}
    checkAll=() => { this.props.history.push('/discover/artist/signed/') }
    render(){
        let Singer =  this.props.enteringSinger
        return (
            <Row className='enterSinger'>
                <Row className='enterSinger-header'>
                    <Col span={12} className='enterSinger-header-name' >入驻歌手</Col>
                    <Col span={12} className='enterSinger-header-more' onClick={ ()=>this.checkAll() } >查看全部 ></Col>
                </Row>
                {
                    Singer.length>0  && Singer.map( (item,index) => (
                       <Row className='enterSinger-content' key={ index }  onClick={ ()=>this.handleClick(item.accountId) } >
                            <Col span={8}   >
                                <img className= 'enterSinger-content-img'src={item.picUrl} alt="" />
                            </Col>
                            <Col span={16}>
                                <div  className='enterSinger-content-name'>{  item.name }</div>
                                <div  className='enterSinger-content-alias'>{item.name}</div>
                            </Col>
                        </Row>
                    ))
                } 
                <Row className='enterSinger-footer' >
                    <a  href='https://music.163.com/nmusician/web/index#/' target='_blank' rel="noopener noreferrer" >
                        <Button type="primary" >申请成为音乐人</Button>
                    </a>
                </Row>
            </Row>
        )
    }
}
export default withRouter(EnteringSinger)