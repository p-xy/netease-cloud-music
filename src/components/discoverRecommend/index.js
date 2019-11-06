import React, { Component } from 'react';
import { Row,Col } from 'antd';
import 'antd/dist/antd.css';
import './index.scss'

import Banner from './banner';
import HotRecommend from './hotrecommend';
import NewdishShelf from './newAlbum';
import HomeList from './topList'
import UserLogin from './userLogin'
import HotDj from './hotdj'
import EnteringSinger from './enteringSinger';
import PersonalRecommend from './personalRecommend'

class Index extends Component {
    //dispacth (action) 
    componentDidMount(){
        //轮播图
        this.props.bannerActionFunc()
        //热门推荐
        this.props.hotCommendFunc()
        //新碟上架
        this.props.newDishShelfFunc()
        //榜单:飙升榜
        this.props.topListFunc()
        //榜单：新歌榜
        this.props.newListFunc()
        //榜单：原创榜
        this.props.originalListFunc()
        //入驻歌手
        this.props.entertingSingerFunc()
        //热门推荐的标签
        this.props.hotCommendTagsFunc()
    }

    render() {
        const banner = this.props.banner
        const hotCommend = this.props.hotCommend && this.props.hotCommend.result 
        const hotCommendTags = this.props.hotCommendTags && this.props.hotCommendTags.tags
        const newAlbum = this.props.newAlbum && this.props.newAlbum.albums 
        const topList =  this.props.topList
        const newList = this.props.newList
        const originList = this.props.originalList
        const enteringSinger = this.props.enteringSinger
        return (
            <div>
                {/* 轮播图*/}
                <Banner banner={ banner} />
                <Row gutter={10} className='wrapped'>
                    <Col span={3}  />
                    <Col span={18}>
                        <Row className='main' >
                            <Col span={18} className='content'>
                                    {/* //热门推荐歌单 */}
                                <HotRecommend  hotCommend={ hotCommend } hotCommendTags = { hotCommendTags }/>
                                    {/* 这个需要再登录之后菜可以获取数据 */}
                                <PersonalRecommend />
                                    {/*新碟上架组件 */}
                                <NewdishShelf  newAlbum = { newAlbum } />
                                    {/* 首页榜单数据 */}
                                <HomeList topList={ topList } newList={ newList } originalList={ originList } />
                            </Col>
                            <Col span={6}>
                                <UserLogin />
                                <EnteringSinger enteringSinger={enteringSinger} />
                                <HotDj />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={3} />
                </Row>
            </div>
        )
    }
}
export default Index;