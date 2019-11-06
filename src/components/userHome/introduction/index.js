import React, { Component } from 'react'
import {  Row,Col,Icon,Button  } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'

class Introduction extends Component {
    render(){
        const userDetailData = this.props.userDetailData;
        //渲染社交网络图标
        const renderCommunicationLogo =   userDetailData.bindings.map( (item,index)=>(
            //根据item.type的类型确定社交网络的类型LOGO,这里就用统一一个LOGO
            <span key={item.url + index}>
                {
                    item.url ? 
                        <span style={{ cursor:"pointer" }} >
                            <a href={ item.url } >
                                <Icon type="weibo-circle" theme="filled" style={{ fontSize:"20px",color:"red",verticalAlign:"middle",marginLeft:"10px" }} />
                            </a>
                        </span>
                    :null
                }
            </span>
        ))
        return(
            <Row style={{paddingTop:'40px'}}>
                <Col span={6}>
                    <img style={{ width:"188px",height:"188px",padding:"4px", border:"1px solid #D5D5D5" }} src={ userDetailData.profile.avatarUrl} alt=""/>
                </Col>
                <Col span={18}>
                    <Row style={{ borderBottom:"1px solid #DDDDDD",paddingBottom:"10px" }}>
                        <Row gutter={10} style={{ height:"40px",lineHeight:"40px" }} >
                            <Col style={{ fontSize:"24px",color:"#000",float:"left",}}>
                                <span>{ userDetailData.profile.nickname }</span>
                            </Col>
                            <Col style={{ float:"left" }}>
                                { userDetailData.profile.vipType===0 ? null:<div className='user-home-cvip' ></div> }
                            </Col>
                            <Col style={{ float:"left"}}  >
                                <div className='user-home-level'>{userDetailData.level}</div>
                            </Col>
                            <Col  style={{ float:"left" }}>
                                {
                                    userDetailData.profile.gender===1?<div className='user-home-man'></div> : <div className='user-home-woman'></div>  
                                }
                            </Col>
                            <Col style={{ float:"left" }} >
                                <Button style={{ marginRight:"10px" }}  ><Icon type="mail" />发私信</Button>
                                <Button type='primary' ><Icon type="plus" />关注</Button>
                            </Col>
                        </Row>
                        {
                            userDetailData.profile.description?
                                <Row>
                                    <i className='user-home-authLogo'></i>
                                    { userDetailData.profile.description }
                                </Row>
                            :null
                        }
                    </Row>
                    <Row>
                        <ul style={{ listStyle:"none",paddingLeft:"0px" }}>
                            <li style={{ display:"inline-block",height:"53px",paddingRight:"40px",borderRight:"2px solid #DDDDDD",marginTop:"5px" }}> 
                                <Link to={ `/user/event?id=${ userDetailData.profile.userId }` }>
                                    <strong style={{ fontSize:"26px",color:"#666666" }}>{ userDetailData.profile.eventCount }</strong>
                                    <div style={{ fontSize:"12px",color:"#898989" }}>动态</div>
                                </Link>
                            </li>
                            <li style={{ display:"inline-block",height:"53px",paddingRight:"40px",borderRight:"2px solid #DDDDDD",marginTop:"5px",marginLeft:"20px" }}> 
                                <Link to={`/user/follows?id=${ userDetailData.profile.userId }`}>
                                    <strong style={{ fontSize:"26px",color:"#666666" }}>{ userDetailData.profile.follows }</strong>
                                    <div style={{ fontSize:"12px",color:"#898989" }}>关注</div>
                                </Link>
                            </li>
                            <li style={{ display:"inline-block",height:"53px",paddingRight:"40px",marginTop:"5px",marginLeft:"20px" }}> 
                                <Link to={`/user/fans?id=${ userDetailData.profile.userId }`}>
                                    <strong style={{ fontSize:"26px",color:"#666666" }}>{ userDetailData.profile.followeds }</strong>
                                    <div style={{ fontSize:"12px",color:"#898989" }}>粉丝</div>
                                </Link>
                            </li>
                        </ul>
                    </Row>
                    {
                        userDetailData.profile.signature?
                        <div style={{ fontSize:"14px" }}> 
                            <span>个人介绍:</span>
                            <span>{userDetailData.profile.signature}</span>
                        </div>              
                        :null             
                    }
                    {
                        userDetailData.profile.city?
                        <div style={{ marginTop:"20px" }}>
                            <span>所在省份:</span>
                            <span>{`${userDetailData.profile.province}-${userDetailData.profile.city}(这里的数字代表这省份和城市,这里转化就省略了)`}</span>
                        </div>
                        :null
                    
                    }
                    <div style={{ marginTop:"10px" }}>
                        <span>社交网络:</span>
                        <span>{renderCommunicationLogo}</span>
                    </div>
                </Col>
            </Row>
        )
    }
}
export default Introduction