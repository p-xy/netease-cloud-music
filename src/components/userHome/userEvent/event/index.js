import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Row,Col} from 'antd';
import 'antd/dist/antd.css'

class Event extends Component{
    render(){
        const events =  this.props.userEventData.events
        return(
            <div style={{paddingRight:'20px'}}>
                {
                   events.map( (item,index)=>(
                       <div style={{padding:'20px',borderBottom:'1px solid #D3D3D3'}} key={item.uuid}>
                            <Row gutter={20}>
                                <Col span={2}>
                                    <img 
                                    style={{width:'45px',height:'45px',cursor:'pointer'}}
                                    src={item.user.avatarUrl}
                                    alt=''
                                    onClick={()=>this.props.history.push(`/user/home?id=${item.user.userId}`)}
                                     />
                                </Col>
                                <Col span={22}  >
                                    <Row >
                                        <span style={{color:'#0c73c2',fontSize:'14px',cursor:'pointer'}}> {item.user.nickname}</span>
                                        <span>分享type{item.type}(不同type对应不同类型内容，我懒得分类了)</span>
                                    </Row>
                                    <Row>
                                        {item.showTime}(发布时间，UTC格式，懒得格式化了)
                                    </Row>
                                </Col>
                           </Row>
                            <Row>
                                <Col span={2}></Col>
                                <Col span={22} style={{height:'100px',backgroundColor:'#F5F5F5',margin:'center'}}>这里是让用户发布的内容，懒得格式化数据了</Col>
                            </Row>
                            <Row style={{ textAlign:"right",color:"#3C8ECE" }}>
                                <span>
                                    赞({item.info.likedCount})
                                </span>
                                <span style={{ marginLeft:"5px",marginRight:"5px" }}>|</span>
                                <span>转发({item.info.shareCount})</span>
                                <span style={{ marginLeft:"5px",marginRight:"5px" }}>|</span>
                                <span>评论({item.info.commentCount})</span>
                            </Row>
                        </div>
                   ))
                }
            </div>
        )
    }
}
export default withRouter(Event)
