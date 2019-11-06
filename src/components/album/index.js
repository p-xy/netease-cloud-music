import React, { Component } from 'react';
import { Row,Col,Spin,Icon } from 'antd';
import 'antd/dist/antd.css';
import SongList from './songList'
import Comment from '../common/comment'
import MulPlatformDownload from '../common/mulPlatform'
import SingerOtherAlbum from './singerOtherAlbum'
import './index.scss';
import LikeAlbumPerson from './likeAlbumPerson'
import { formatPublishTime, startPlaySong  } from '../common/tools'

class Album extends Component {
    componentDidMount(){
        this.props.getAlbumData( this.props.location.search );
        this.props.getAlbumCommentData(this.props.location.search,20,1 );
    }
     //分页
    handlePagination = (offset)=>{
        this.props.getAlbumCommentData(this.props.location.search,20,offset)
    }
    handleNewAlbum = (search)=>{
        this.props.history.push(`/album${search}`)
        this.props.getAlbumData( search );
        this.props.getAlbumCommentData( search,20,1 );
    }
    
    render() {
    //专辑数据
    const realAlbumData = this.props.albumData ? this.props.albumData.album :null
    //歌曲数据
     const songInAlubmData = this.props.albumData ? this.props.albumData.songs : []
    //出版时间
    const publishTime = realAlbumData ? formatPublishTime( realAlbumData.publishTime) : null

    //评论数量、分享数量、介绍数据
    const commentCount = realAlbumData ? realAlbumData.info.commentCount : null
    const shareCount = realAlbumData ? realAlbumData.info.shareCount : null
    const description = realAlbumData ? realAlbumData.description : null
    return (
      <div className='album'>
        <div className='content' style={{ minWidth:"1400px" }}>
            <Row gutter={30}>
                <Col span={3}/>
                <Col span={18} style={{ backgroundColor:'#fff',borderLeft:"1px solid #D3D3D3",borderRight:"1px solid #D3D3D3"  }}>
                    <Row gutter={10}>
                        {/* //左侧 */}
                        <Col span={ 18 } style={{ borderRight:"1px solid #d3d3d3",padding: '80px 40px 0px 40px' }}>
                                <Row gutter={40}  className='album-header'>
                                    <Col span={8} >
                                        {
                                            realAlbumData ?
                                                <img src={ realAlbumData.picUrl } alt="" style={{ width:"177px",height:"177px" }} />
                                            :<Spin />
                                        }
                                        <span className='album-mask'></span>
                                    </Col>
                                    <Col span={16}>
                                        {
                                            realAlbumData?
                                            <div>
                                                <span className='album-logo'></span>
                                                <span className='album-name'>{realAlbumData.name}</span>
                                            </div>
                                            :null
                                        }
                                        {
                                            realAlbumData?
                                            <div style={{ padding:'2px 0px' ,fontSize:'12px'}}>
                                                <span style={{ marginRight:"10px"}}>歌手:</span>
                                                <span style={{ color:"#0c73c2" ,cursor:'pointer'}} onClick={()=>this.props.history.push(`artist?id=${realAlbumData.artist.id}`) } >{realAlbumData.artist.name}</span>
                                            </div>
                                            :null
                                        }
                                        {
                                           publishTime?
                                                <div style={{padding:'2px 0px',fontSize:'12px' }}>发行时间:<span style={{ marginLeft:"5px" }}>{ publishTime }</span></div>
                                            :null
                                        }
                                        {
                                            realAlbumData?
                                                <div style={{padding:'2px 0px',fontSize:'12px' }}>发行公司:<span style={{ marginLeft:"5px" }}>{realAlbumData.company}</span></div>
                                            :null
                                        }
                                        <Row style={{marginTop:'10px',display: 'flex',flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                            <div style={{marginRight:'5px'}}>
                                                <span className='songPlay'><Icon style={{ fontSize:"14px",verticalAlign:"center"}} type="play-circle" theme="twoTone" />播放</span>
                                                <span className='add'></span>
                                            </div>
                                            <div>
                                                <span className='Collection'><span className='collection-i'>收藏</span></span>
                                            </div>
                                            <div >
                                                <span className='Collection' style={{ backgroundPosition:"0 -1225px" }}  >
                                                    <span className='collection-i'>({shareCount?shareCount:<Spin />})</span>
                                                </span>
                                            </div>
                                            <div>
                                                <span className='Collection'style={{ backgroundPosition:"0 -2761px" }} >
                                                    <span className='collection-i'>下载</span>
                                                </span>
                                            </div>
                                            <div span={3}>
                                                <span  className='Collection'style={{ backgroundPosition:"0 -1465px" }}>
                                                    <span className='collection-i'>({commentCount?commentCount:<Spin />})</span>
                                                </span>
                                            </div>
                                        </Row>
                                    </Col>
                                </Row>
                            <div className='album-description'>
                                <div className='album-introduction'>专辑介绍：</div>
                                <p className='album-detailDescription'>
                                    {description}
                                </p>
                            </div>
                            <div>
                                <SongList  songInAlubmData={ songInAlubmData } startPlaySong={ startPlaySong }  />
                                <Comment commentData={ this.props.albumCommentData} handlePagination={this.handlePagination }/>
                            </div>
                        </Col>
                        <Col span={ 6 } style={{padding:'0 20px',paddingTop:"60px" }}>
                        {/* //喜欢这张专辑的人没有这个接口,或者还没找到,等找到后再补上这个完整的组件,现在用默认头像代替一下 */}
                            <LikeAlbumPerson />
                            <SingerOtherAlbum  singerOtherAlbum = { this.props.singerOtherAlbum}  handleNewAlbum ={ this.handleNewAlbum }/>
                            <MulPlatformDownload />   
                        </Col>
                    </Row>
                </Col>
                <Col span={3}/>
            </Row>
        </div>
      </div>
    )
  }
}

export default Album 