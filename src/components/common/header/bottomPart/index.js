import React from 'react'
import { withRouter,NavLink } from 'react-router-dom'
import { Row,Col } from 'antd';
import 'antd/dist/antd.css';
import './index.scss';

const BottomPart = () => {
    let discoverList = [
        {name:"推荐",link:"/"},
        {name:"排行榜",link:"/discover/toplist"},
        {name:"歌单",link:"/discover/playlist"},
        {name:"主播电台",link:"/discover/djradio"},
        {name:"歌手",link:"/discover/artist"},
        {name:"新碟上架",link:"/discover/album"},
    ];
    return(
        <div className='bottomPart-wrapper'>
            <Row >
                <Col span={5}  />
                <Col span={10}>
                    <Row>
                        {
                            discoverList.map( (item,index) => (
                                <Col span={4} className='nav' key={ item.link}>
                                    <NavLink exact to={ item.link} > 
                                        { item.name } 
                                    </NavLink> 
                                </Col>
                            )) 
                        }
                    </Row>
                </Col>
                <Col span={9} />
            </Row>   
        </div>
    )
};

export default withRouter(BottomPart);
