import React, { Component } from 'react'
import {Row,Col,Pagination, Spin} from 'antd';
import 'antd/dist/antd.css'
import './index.scss'

class DiscoverAlbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            area:'ALL',
            offset: 1
        }
    }
    componentDidMount(){
        this.props.newAlbumDataFunc()
        const url_parameter= this.props.location.search
        if( url_parameter){ 
            //'?area=ALL&offset=1' 替换成 ' {"area":"ALL","offset":"1"} '
            const url_1 = url_parameter.replace('?','{"').replace('=','":"').replace('&','","').replace('=','":"').concat('"}')
            const url_dict = JSON.parse( url_1 )
            const offset = url_dict.offset
            const area = url_dict.area
            if( area && offset){
                this.props.newAlbumAllDataFunc(area, offset)
                this.setState({
                    area: area,
                    offset: offset
                })
            }else if(area){
                this.props.newAlbumAllDataFunc(area, 1)
                this.setState({
                    area: area,
                    offset: 1
                })
            }else if(offset){
                this.props.newAlbumAllDataFunc('ALL', offset)
                this.setState({
                    offset: offset
                })
            }
        }else{
            this.props.newAlbumAllDataFunc(this.state.area, this.state.offset)
        }
    }
    //分页
    handleChangePage=(offset)=>{
        this.props.history.push(`/discover/album?area=${this.state.area}&offset=${offset}`)
        this.props.newAlbumAllDataFunc(this.state.area, offset)
        this.setState({
            offset: parseInt(offset,10)
        })
    }
  //选择地区
    handleAreaData=( area )=>{
        this.props.history.push(`/discover/album?area=${area}`)
        this.props.newAlbumAllDataFunc( area, 1)
        this.setState({
            area: area,
            offset: 1
        })
    }
    handleAlbum=(id)=>{
        this.props.history.push(`/album?id=${id}`);
    }
    handleArtist=(id)=>{
        this.props.history.push(`/artist?id=${id}`)
    }
    render(){
        const newAlbumData = this.props.newAlbumData ? this.props.newAlbumData.albums :[];
        const newAlbumAllData = this.props.newAlbumAllData ? this.props.newAlbumAllData.albums :[];
        const renderNewAlbumData = newAlbumData.slice(0,10).map( (item,index) =>(
            <div className='hot-album-wrap' key={item + index}>
                <img  className='hot-album-img'  src={item.picUrl} onClick={ ()=>this.handleAlbum(item.id) } alt=""     />
                <div className='discover-album-content-bg'> </div>
                <div className='hot-album-name' onClick={ ()=>this.handleAlbum(item.id) } > {item.name} </div>
                <div className='hot-album-artist'  onClick={ ()=>this.handleArtist(item.artist.id) } >  {item.artist.name}  </div>
            </div>
        ))
        const renderNewAlbumAllData = newAlbumAllData.map( (item,index)=>(
            <div className='all-album-wrap' key={item.name + index}>
                <img  className='all-album-img'  src={item.picUrl} onClick={ ()=>this.handleAlbum(item.id) } alt=""     />
                <div className='discover-album-content-bg'> </div>
                <div className='all-album-name' onClick={ ()=>this.handleAlbum(item.id) } > {item.name} </div>
                <div className='all-album-artist'  onClick={ ()=>this.handleArtist(item.artist.id) } >  {item.artist.name}  </div>
            </div>
        ))
        return (
            <Row className='discover-album-body'>
                <Col span={4} />
                <Col span={16} className='discover-album-content'>
                    <Row className='content-hot-title'>  热门新碟  </Row>
                    {  renderNewAlbumData.length>0 ? <div className='content-hot-album'> { renderNewAlbumData } </div>  :<Spin />  }
                    <Row className='content-title-all-wrap'>
                        <span className='content-title-all-title'>
                            全部新碟
                        </span>
                        <span className='content-title-all-area'  onClick={ ()=>this.handleAreaData('ALL') }> 全部</span>
                        <span>|</span>
                        <span className='content-title-all-area'  onClick={ ()=>this.handleAreaData('ZH') } >华语</span>
                        <span>|</span>
                        <span   className='content-title-all-area'  onClick={ ()=>this.handleAreaData('EA') } >欧美</span>
                        <span>|</span>
                        <span  className='content-title-all-area'   onClick={ ()=>this.handleAreaData('KR') } >韩国</span>
                        <span>|</span>
                        <span className='content-title-all-area'  onClick={ ()=>this.handleAreaData('JP') } >日本</span>
                    </Row>
                    { renderNewAlbumAllData.length >0 ? <div className='content-all-album'  > {renderNewAlbumAllData}  </div>  :<Spin/> }
                    <Row className='content-pagination'>
                        <Pagination
                            defaultPageSize={35} 
                            current={  this.state.offset  }
                            total={ this.props.newAlbumAllData ?this.props.newAlbumAllData.total: null}
                            onChange={ (offset,size)=>this.handleChangePage(offset) }
                        />
                    </Row>
                </Col>
                <Col span={4} />
          </Row>
        )
    }
}
export default DiscoverAlbum