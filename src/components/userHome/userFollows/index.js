import React, { Component } from 'react'
import { Row,Col, Empty,Spin } from 'antd'
import {withRouter} from 'react-router-dom'
import 'antd/dist/antd.css'
import Introduction from '../introduction'

class UserFollows extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.search = this.props.location.search
        this.id = this.search.match(/\d+/gi).toString()
        //获取用户详情、用户关注
        this.props.getUserDetailData( this.id)
        this.props.getUserFollowsData( this.id)
    }
    refresh = (uid)=>{
        this.props.getUserDetailData( uid)
        this.props.getUserFollowsData( uid)
        this.props.history.push(`/user/follows?id=${uid}`)
    }
    render() {
        const renderUserFollows = this.props.userFollowsData && this.props.userFollowsData.follow ?
            this.props.userFollowsData.follow.map( (item,index)=>(
                <Col span={12} 
                    style={{ padding:"20px",backgroundColor:(index+1)%4===1 ||(index+1)%4===2 ? '':'#FAFAFA',borderRight:(index+1)%2?'1px solid #D3D3D3':'' }}>
                    <div 
                        style={{ display:"inline-block",marginRight:"10px",cursor:"pointer" }} 
                        onClick={ ()=>this.props.history.push(`/user/home?id=${item.userId}`) }>
                        <img style={{ width:"64px",height:"64px" }} src={item.avatarUrl} alt=""  />                                    
                    </div>
                    <div style={{ display:"inline-block",verticalAlign:"middle",width:"250px" }}>
                        <div 
                            style={{ color:"#2983C9",height:"24px",cursor:"pointer" }}
                            onClick={ ()=>this.props.history.push(`/user/home?id=${item.userId}`) } >{item.nickname}
                        </div>
                        <div style={{fontSize:'12px'}}>
                            <span 
                                style={{ cursor:"pointer" }} 
                                onClick={ ()=>this.props.history.push(`/user/event?id=${item.userId}`) }>动态
                                <span style={{color:'#0C73c2'}}> {item.eventCount} </span>
                            </span>
                            <span 
                                style={{ marginLeft:"5px",marginRight:"5px" }}>|</span>
                            <span 
                                style={{ cursor:"pointer" }} 
                                onClick={ ()=>this.refresh(item.userId) }>关注
                                <span style={{color:'#0C73c2'}}>{item.follows}</span>
                            </span>
                            <span 
                                style={{ marginLeft:"5px",marginRight:"5px" }}>|</span>
                            <span 
                                style={{ cursor:"pointer" }} 
                                onClick={ ()=>this.props.history.push(`/user/fans?id=${item.userId}`) }>粉丝
                                <span style={{color:'#0C73c2'}}>{item.followeds}</span>
                            </span>
                        </div>
                        <div style={{ overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis" }}>{item.signature}</div>
                    </div>
                </Col>
            ))
        :null
        return(
            <Row  style={{backgroundColor:"#F5F5F5",minWidth:"1200px"}}>
                <Col span={4} />
                <Col span={16} style={{ backgroundColor:"#fff",borderLeft:"1px solid #D3D3D3",borderRight:"1px solid #D3D3D3",padding:'50px 30px' }}>
                    {
                        this.props.userFollowsDetailData ? 
                            <Introduction userDetailData={ this.props.userFollowsDetailData }/>
                        :   <Spin style={{minHeight:'500px' }}/>
                    }
                    {
                        this.props.userFollowsData ? 
                            <div>
                                <Row style={{borderBottom:'2px solid #c20c0c',fontSize:'20px',color:'#666666',paddingBottom:'10px'}}> 
                                    关注&nbsp;( {this.props.userFollowsData.follow.length} )
                                </Row>
                                {
                                    this.props.userFollowsData.follow ? 
                                        <Row style={{border:'1px solid #D3D3D3'}}> { renderUserFollows } </Row>
                                    :   <Row style={{ margin:"50px 0px" }}> <Empty description="还没有关注人"/> </Row>
                                }
                            </div>
                        :<Spin />
                    }
                </Col>
                <Col span={4} />
            </Row>
        )
    }
}
export default withRouter(UserFollows)




