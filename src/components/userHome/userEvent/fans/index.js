import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Row,Col } from 'antd';
import 'antd/dist/antd.css'

class UserFans extends Component{
    render(){
        const fansData = this.props.userFansData.followeds.slice(0,6)
        return(
            <div>
                <Row style={{fontWeight:'bold',borderBottom:'1px solid #ccc',fontSize:'12px',padding:'10px 0px',color:'#333333'}}> TA的粉丝</Row>
                <Row gutter={10}>
                    {
                        fansData.map( (item,index)=>(
                            <Col span={8} style={{paddingTop:'15px'}} key={item.userId} >
                                <img 
                                    src={item.avatarUrl}
                                    alt=''
                                    style={{width:'64px',height:'64px',cursor:'pointer'}}
                                    onClick={ ()=>this.props.history.push(`/user/home?id=${item.userId}`)}
                                    />
                                <div 
                                    style={{padding:'5px 0px',color:'#333333',fontSize:'12px',cursor:'pointer',width:'64px',overflow:'hidden',textOverflow:'ellipsis', whiteSpace:'nowrap'}}
                                    onClick={ ()=>this.props.history.push(`/user/home?id=${item.userId}`)}> {item.nickname}
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        ) 
    }
}
export default withRouter(UserFans)
