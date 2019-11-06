import React, { Component } from 'react'
import { Row,Col,Button,Icon,Pagination, Spin } from 'antd'

import 'antd/dist/antd.css'
import './index.scss'
import { formatPlayCount } from '../common/tools';
import SelectTags from './selectTags';

class DiscoverPlaylist extends Component {
    constructor(props){
      super(props);
      this.state={
        isExtends:false,
        tag:'全部',
        offset: 1
      }
    }
    componentDidMount(){
        this.props.selectTagsDataFunc();
        const url_parameter = decodeURIComponent(this.props.location.search)
        if( url_parameter){ 
            //'?cat=华语&offset=1' 替换成 ' {"cat":"华语","offset":"1"} '
            const url_1 = url_parameter.replace('?','{"').replace('=','":"').replace('&','","').replace('=','":"').concat('"}')
            const url_dict = JSON.parse( url_1 )
            const offset = url_dict.offset
            const cat = url_dict.cat
            if ( cat && offset){
                this.props.hotCommendTagsContentFunc( cat, offset)
                this.setState({ 
                    tag:cat,
                    offset: offset
                  })
            }else if( cat){
                this.props.hotCommendTagsContentFunc( cat, 1)
                this.setState({  tag:cat  })
            }else if( offset){
                this.props.hotCommendTagsContentFunc( this.state.tag, offset)
                this.setState({
                    offset: offset
                })
            }else{
                this.props.hotCommendTagsContentFunc( this.state.tag, this.state.offset)
            }
        }else{
            this.props.hotCommendTagsContentFunc( this.state.tag, this.state.offset)
        }
    }
    
    //跳转到相应的playlist页面
    handleJumpToPlayList=(id)=>{
      this.props.history.push(`/playlist?id=${id}`)
    }
    //分页
    handlePagination=( offset)=>{
        this.props.history.push(`/discover/playlist?cat=${this.state.tag}&offset=${offset}`)
        this.props.hotCommendTagsContentFunc( this.state.tag, offset )
        this.setState({
            offset: offset
        })
    }
    //获取新标签数据
    handleNewTagContent = (newTag) =>{
        this.setState({
            tag: newTag,
            offset:1,
            //是否展开选择面板
            isExtends: !this.state.isExtends
        })
        this.props.hotCommendTagsContentFunc( newTag, 1)
    }
   
    render() {
        //标签内容数据
        const commendTagsContentData = this.props.commendTagsContentData ? this.props.commendTagsContentData : false
        //渲染标签内容数据
        const renderCommendTagsContentData = commendTagsContentData.playlists && commendTagsContentData.playlists.map( (item,index)=>(
            <div key={item.id} className='content-playlist-wrap' >
                <img className='content-playlist-img' onClick={ ()=>this.handleJumpToPlayList(item.id) }  src={item.coverImgUrl} alt="" />
                <div className='content-playlist-icon'>
                       <span style={{marginLeft:'5px'}}> <Icon type="customer-service" /> </span>
                       <span>{formatPlayCount(item.playCount)}</span>
                       <span style={{ float:"right",marginRight:"10px" }}>  <Icon type="right-circle" />  </span>
                </div>
                <div style={{position:"relative",bottom:"22px"}}>
                    <div className='content-playlist-name' onClick={ ()=>this.handleJumpToPlayList(item.id) }>{item.name} </div>
                    <div style={{ fontSize:"12px",  cursor:"pointer" }} onClick={ ()=>{  this.props.history.push(`/user/home?id=${item.userId}`)}} >by {item.creator.nickname}</div>
                </div>
            </div>
        ))
      
        return (
            <Row  className='discoverPlaylist'>
                <Col span={4} />
                <Col span={16} className='playlist-content'>
                    <Row  className='playlist-content-cat' >
                        <span className='content-cat-title'>{ commendTagsContentData ? commendTagsContentData.cat : null }</span>
                        <Button  onClick={ ()=>{  this.setState({isExtends: !this.state.isExtends }) }}>
                            选择分类 <Icon  type={this.state.isExtends?"up":"down"}/>
                        </Button>
                        {
                            this.state.isExtends? 
                                <SelectTags 
                                    selectTagsData={this.props.selectTagsData}
                                    handleNewTagContent ={ this.handleNewTagContent }
                                     />
                            :null
                        }
                    </Row>
                    <Row  style={{ paddingBottom:'30px'}}>
                        <div style={{height:'30px'}}>  </div>
                        <div className='playlist-content-playlist' >
                            { renderCommendTagsContentData ? renderCommendTagsContentData :<Spin /> }
                        </div>
                    </Row>
                    <Row  className='playlist-content-pagination'>
                        <Pagination 
                            pageSize={35}
                            current =  {this.state.offset}
                            total={commendTagsContentData.total}
                            onChange={ (current,pageSize)=>this.handlePagination(current) }/>
                    </Row>
                </Col>
                <Col span={4} />
            </Row>
        )
    }
}
export default DiscoverPlaylist


