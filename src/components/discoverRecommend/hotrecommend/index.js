import React, { Component } from 'react';
import { Row,Col,Icon } from 'antd';
import 'antd/dist/antd.css';
import { Link,withRouter } from 'react-router-dom'
import { formatPlayCount } from '../../common/tools'
import './index.scss';

class HotRecommend extends Component {
    handleClick = (id) =>{ this.props.history.push(`/playlist?id=${id}`) }
    render(){
        const hotCommend = this.props.hotCommend && this.props.hotCommend.slice(0,8)
        const hotCommendTags = this.props.hotCommendTags && this.props.hotCommendTags.slice(0,5) 
        //热门推荐歌单
        const renderHotCommend = hotCommend && hotCommend.map( (item,index)=>(
            <Col span={6} className='hot-content' onClick={ ()=>this.handleClick(item.id) }  key={item.name} >
                <div>
                    <img className='hot-content-img' src={item.picUrl} alt="" />
                    <div className='hot-content-name'> {item.name}  </div>
                    <div className='clearfix' >
                        <div className='hot-content-shadow'>
                            <div className='hot-content-tagMusic'>
                                <Icon type="customer-service" />
                            </div>

                            <div className='hot-content-tagCount'>
                                <span>{formatPlayCount(item.playCount)}</span>
                            </div>

                            <div className='hot-content-tagRight'>
                                <Icon type="right-circle" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        ))
        
        return (
            <div>
                <Row className='hot-title' >
                    <Col  span={1} className='hot-title-logo' ></Col>
                    <Col span={4} className='hot-title-name'> 热门推荐 </Col>
                    {
                        hotCommendTags && hotCommendTags.map( (item,index,arr) => (
                            <div key={item.id}>
                                <Col span={1} >
                                    <Link className='hot-tag-name' to={`/discover/playlist?cat=${item.name}&order=hot`} > {item.name}</Link>
                                </Col>
                                <Col span={index===arr.length-1?0:1} className='hot-title-tag'>|</Col>
                            </div>
                        ))
                    }
                    <Col span={7} /> 
                    <Col  span={2} className='hot-title-more'>
                            <Link className='hot-title-more-color' to={`/discover/playlist`} > 更多&nbsp;</Link>
                            <span className='more-icon'></span>
                    </Col>
                </Row>
                <Row gutter={40} >
                    {renderHotCommend}
                </Row>  
            </div>    
        )
    }
}
export default withRouter(HotRecommend)