//喜欢这张专辑的人没有这个接口,或者还没找到,等找到后再补上这个完整的组件,现在用默认头像代替一下
import React, { Component } from 'react';
import { Row,Col ,Icon } from 'antd';
import 'antd/dist/antd.css';

class LikeAlbumPerson extends Component {
    render() {
        return (
            <div className='likeAlbumPerson'>
                <div className='likeAlbumPerson-title'>
                    <div style={{ fontSize:"12px",color:"#000",fontWeight:"bold",borderBottom:"1px solid #CCCCCC",paddingBottom:"10px" }}>喜欢这张专辑的人</div>
                </div>
                <div className='likeAlbumPerson-avatar' style={{ marginTop:"15px",marginBottom:"20px" }} >
                    <Row gutter={10}>
                        <Col span={6}><Icon type="user" /></Col>
                        <Col span={6}><Icon type="user" /></Col>
                        <Col span={6}><Icon type="user" /></Col>
                        <Col span={6}><Icon type="user" /></Col>
                    </Row>
                    <Row gutter={10}>
                        <Col span={6}><Icon type="user" /></Col>
                        <Col span={6}><Icon type="user" /></Col>
                        <Col span={6}><Icon type="user" /></Col>
                        <Col span={6}><Icon type="user" /></Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default LikeAlbumPerson