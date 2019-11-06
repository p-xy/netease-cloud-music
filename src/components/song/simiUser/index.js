import React, { Component } from 'react';
import { Row,Col } from 'antd';
import "antd/dist/antd.css";
import  { withRouter } from 'react-router'

class SimiUser extends Component{
    render(){
        return(
            <div >
                <div style={{ paddingBottom:'10px',borderBottom:'1px solid #D3D3D3',fontSize:'12px',fontWeight:'bold',color:'#333333'}}>
                    <span> 喜欢这首歌的人 </span>
                </div>
                <Row style={{padding:'15px 0px 30px 0px'}}>
                    {
                        this.props.simiUserData.slice(0,4).map( (item,index)=>(
                            <Col span={6} >
                                <img 
                                    onClick={()=>this.props.history.push(`/user/home?id=${item.userId}`)} 
                                    src={item.avatarUrl} 
                                    alt=''
                                    style={{width:'40px',height:'40px',cursor:"pointer"}} />
                            </Col>
                        ))
                    }
                </Row>
            </div>
        )
    }
}
export default withRouter(SimiUser)