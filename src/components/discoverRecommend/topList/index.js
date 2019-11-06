import React, { Component } from 'react';
import { Row,Col} from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'
import './index.scss';
import Side from './side'

class HomeList extends Component {
    render() {
        return(
            <div className='homeList'>
                <Row gutter={1} className='homeList-header'> 
                    <Col span={1} className='homeList-logo'/>
                    <Col span={6} className='homeList-title'>榜单</Col>
                    <Col span={15} />
                    <Col span={2} >
                        <Link className='homeList-more' to={`/discover/toplist/`} >更多&nbsp;</Link>
                        <span className='more-icon'></span>
                    </Col>
                </Row>
                <Row  className='homeList-content' >
                    <Col span={8} className='clearfix' style={{paddingTop: '30px',borderRight:' 1px solid #DADADA'}} ><Side topList={this.props.topList}/></Col>
                    <Col span={8} className='clearfix ' style={{paddingTop: '30px',borderRight:' 1px solid #DADADA'}}><Side topList={this.props.newList}/></Col>
                    <Col span={8} className='clearfix' style={{paddingTop: '30px'}}><Side topList={this.props.originalList}/></Col>
                </Row>
            </div>
        )
    }
}

export default HomeList
