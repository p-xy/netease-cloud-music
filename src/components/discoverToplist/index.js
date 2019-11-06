import React, { Component } from 'react'
import { Row,Col,Icon,Button } from 'antd';
import 'antd/dist/antd.css'
import './index.scss'
import { Link,withRouter } from 'react-router-dom'
import { formatMonthDate, startPlaySong } from '../common/tools';
import SongList from './songList'
import Comment from '../common/comment';

class DiscoverToplist extends Component {
    constructor(props){
        super(props)
        this.state = {
            //由于数据接口中没有这项数据(列表),所以只能用列表中的数据(内容)
            updateFrequency:"每天更新"
        }
        this.search = ''
    }
    componentDidMount(){
        this.props.allPlaylistDataFunc() 
        //获取动态路由的参数
        this.search = this.props.location.search ? this.props.location.search : '?id=19723756';
        this.props.toplistContentDataFunc( this.search )
        this.props.toplistCommentDataFunc( this.search, '20', '1')
       
    }
    //获取新榜单和评论
    refreshToplistData( id,updateFrequency ){
        this.setState({
            updateFrequency: updateFrequency
        })
        this.search = `?id=${id}`
        this.props.toplistContentDataFunc(  this.search )
        this.props.toplistCommentDataFunc( this.search,'20','1')
    }
    //评论分页
    handlePagination = (offset) =>{
        this.props.toplistCommentDataFunc(this.search,20,offset)
    }
    
    render(){
        //榜单列表数据
        const topList = this.props.allPlaylistData ? this.props.allPlaylistData.list : [] 
        const cloudToplist =  topList.slice(0,4)
        const globalToplist = topList.slice(5,topList.length-1)
        //榜单内容数据
        const toplistContentData = this.props.toplistContentData ? this.props.toplistContentData.playlist : []
        //渲染云音乐特色榜
        const renderCloudToplist = cloudToplist.map( (item,index)=> (
            <Link  key={item.id } to={`/discover/toplist?id=${item.id}`} onClick={ ()=>this.refreshToplistData( item.id, item.updateFrequency ) }>
                <Row  className={ this.props.location.search===`?id=${item.id}` ?'topList-BG': 'topList-noBG' }>
                    <Col  span={6} className='topList-img-wrapped' >
                        <img className='topList-item-img' src={item.coverImgUrl} alt='' />
                    </Col>
                    <Col span={16}  >
                        <h2 className='topList-item-name'>{item.name}</h2>
                        <h2 className='topList-item-iname' ref={ (duration)=>this.updateFrequency=duration }>{item.updateFrequency}</h2>
                    </Col>
                </Row>           
            </Link>  
        ));
        //渲染全球媒体榜
        const renderGlobalToplist =  globalToplist.map( (item,index) => (
            <Link  key={item.id } to={`/discover/toplist?id=${item.id}`} onClick={ ()=>this.refreshToplistData( item.id, item.updateFrequency ) }>
                <Row  className={ this.props.location.search===`?id=${item.id}` ?'topList-BG': 'topList-noBG' }>
                    <Col  span={6} className='topList-img-wrapped' >
                        <img className='topList-item-img' src={item.coverImgUrl} alt='' />
                    </Col>
                    <Col span={16} >
                        <h2 className='topList-item-name'>{item.name}</h2>
                        <h2 className='topList-item-iname' ref={ (duration) =>this.updateFrequency=duration }>{item.updateFrequency}</h2>
                    </Col>
                </Row>           
            </Link> 
        ));
        return(
            <Row className='discoverTop'>
                <Col span={3} />
                <Col span={18}>
                    <Row className='discoverTop-content'>
                        {/* //内容左侧 */}
                        <Col span={6} className='content-left'>
                            <div className='left-cloudMusic'>
                                <h2  className='cloudMusic-title'> 云音乐特色榜 </h2>
                                <div > { renderCloudToplist } </div>
                            </div>
                            <div className='left-globMusic' >
                                <h2 className='globMusic-title'> 全球媒体榜 </h2>
                                <div >   { renderGlobalToplist } </div>
                            </div>
                        </Col>
                        {/* //内容右侧 */}
                        <Col span={18} className='content-right'>
                        { toplistContentData ?
                            <Row className='content-right-head'>
                                <Col span={6}>
                                    <img  className='head-img'  src={toplistContentData.coverImgUrl} alt="" />
                                </Col>
                                <Col span={18}>
                                    <h2 className='head-name' > {toplistContentData.name}  </h2>
                                    <div className='head-update'>
                                        <Icon type="clock-circle"   />
                                        <span > &nbsp;最近更新：&nbsp; </span>
                                        <span>{ formatMonthDate(toplistContentData.trackUpdateTime)}</span>
                                        <span>( {this.state.updateFrequency} )</span>
                                    </div>
                                    <Row gutter={5} className='head-button' >
                                        <Col className='button-wrapped'>
                                            <Button.Group >
                                                <Button type='primary'  >
                                                    <Icon  type="play-circle"  />
                                                    <span>播放</span>
                                                </Button>
                                                <Button type='primary'  >
                                                    <span >+</span>
                                                </Button>
                                            </Button.Group>
                                        </Col>
                                        <Col  className='button-wrapped'>
                                            <Button  >
                                                <Icon  type="file-add"  />
                                                <span>({toplistContentData.subscribedCount})</span>
                                            </Button>
                                        </Col>
                                        <Col  className='button-wrapped'>
                                            <Button>
                                                <Icon type="share-alt" />
                                                <span> ({toplistContentData.shareCount}) </span>
                                            </Button>
                                        </Col>
                                        <Col  className='button-wrapped'>
                                            <Button > 
                                                <Icon type="download" />
                                                <span>下载</span>
                                            </Button>
                                        </Col>
                                        <Col  className='button-wrapped'>
                                            <Button  >
                                                <Icon type="edit" />
                                                <span>({toplistContentData.commentCount})</span>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        :null }
                            <Row>
                                <SongList  toplistContentData={toplistContentData } startPlaySong={ (id)=>startPlaySong(id)  }/>
                            </Row>
                            <Row>
                               <Comment commentData={ this.props.toplistCommentData } handlePagination={ this.handlePagination } />
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={3} />
            </Row>
        )
    }
}
export default withRouter( DiscoverToplist );