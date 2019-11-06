import React, { Component } from 'react'
import { Row,Col,Input,Icon,Button } from 'antd'
import defaultAvatar from '../../../../assets/images/default_avatar.jpg'
import 'antd/dist/antd.css'

class OwnComment extends Component {
    render(){
        const TextArea = Input.TextArea;
        return (
            <div className='playlist-comment' style={{ marginTop:"40px" }}>
                <div className='ownComment-header'>
                    <span style={{ color:"#4C4C4C",fontSize:"20px",marginRight:"20px" }}  >评论</span>
                    <span style={{ color:"#6F6F6F",fontSize:"14px" }}>
                        共{ this.props.commentCount  }条评论
                    </span>
                </div>
                <div className='ownComment-content'>
                    <Row style={{ marginBottom:"10px" }}>
                        <Col span={2}>
                            <img src={defaultAvatar} width="50px" height="50px" alt="" />
                        </Col>
                        <Col span={22} style={{ position:"relative" }}>
                            <TextArea rows={4}   placeholder="评论" style={{ resize:"none" }}/>
                            <span className='circle'>&nbsp;</span>
                            <span className='circle-mask'>&nbsp;</span>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom:"30px" }} gutter={10}>
                        <Col span={2} />
                        <Col span={1}> <Icon type="smile" style={{ color:"#9D9D9D",fontSize:"20px",cursor:"pointer" }} /></Col>
                        <Col span={1}> <span className='aite'></span>  </Col>
                        <Col span={16} />
                        <Col span={4} style={{textAlign:'right'}}>
                            <span style={{paddingRight:'5px'}}>140</span>
                            <span><Button type='primary'>评论 </Button></span>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default OwnComment