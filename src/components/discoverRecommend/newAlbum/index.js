import  React, { Component, Fragment } from 'react';
import { Row,Col,Carousel,Icon } from 'antd';
import { Link,withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import './index.scss'
class NewDishShelf extends Component {

    handleAlbum=(id)=>{
        this.props.history.push(`/album?id=${id}`);
    }
    handleArtist=(id)=>{
        this.props.history.push(`/artist?id=${id}`)
    }
    nextAlbum=()=>{
        this.carousel.next()
    }
    prevAlbum=()=>{
        this.carousel.prev()
    }

    render(){
        const newAlbum = this.props.newAlbum;
        const firstPageAlbum =  newAlbum && newAlbum.slice(0,5);
        const secondPageAlbum =  newAlbum && newAlbum.slice(5,10);
        const renderFirstPageAlbum = firstPageAlbum && firstPageAlbum.map( (item,index)=>(
            <Fragment key={item.name}>
                <Col span={4} className='fragment' >
                    <img className='fragment-img' src={item.picUrl} alt=""  onClick={ ()=>this.handleAlbum(item.id) }   />
                    <div className='fragment-bg'></div>
                    <div className='fragment-name' onClick={ ()=>this.handleAlbum(item.id) }>
                        {item.name}
                    </div>
                    <div  className='fragment-artist-name' onClick={ ()=>this.handleArtist(item.artist.id) }>
                        {item.artist.name}
                    </div>
                </Col>
                { index+1%5?<Col span={1}></Col>  :null }
            </Fragment>
        ))
        const renderSecondPageAlbum = secondPageAlbum && secondPageAlbum.map( (item,index)=>(
            <Fragment key={item.name}>
                <Col span={4} className='fragment' >
                    <img className='fragment-img' src={item.picUrl} alt=""  onClick={ ()=>this.handleAlbum(item.id) }   />
                    <div className='fragment-bg'></div>
                    <div className='fragment-name' onClick={ ()=>this.handleAlbum(item.id) }>
                        {item.name}
                    </div>
                    <div  className='fragment-artist-name' onClick={ ()=>this.handleArtist(item.artist.id) }>
                        {item.artist.name}
                    </div>
                </Col>
                { index+1%5?<Col span={1}></Col>  :null }
            </Fragment>
        ))
        return(
            <div className='new-album'>
                <Row gutter={5} className='album-title'>
                    <Col span={1} className='album-title-logo' />
                    <Col span={6} className='album-title-name'>新碟上架</Col>
                    <Col span={15} />
                    <Col span={2} className='album-title-more' >
                        <Link className='album-title-more-title'  to={`/discover/album/`} >更多&nbsp;</Link>
                        <span className='more-icon'></span>
                    </Col>
                </Row>

                <Row className='album_content' >
                    <Col span={1} className='album-content-icon' onClick={ ()=>this.prevAlbum() } >
                        <Icon type="left" />
                    </Col>
                    <Col span={22}>
                        <Carousel dots={false} ref={ (duration)=>this.carousel=duration } >
                            <div >
                                <Row className='album-content-album'> { renderFirstPageAlbum }  </Row>
                            </div>
                            <div >
                                <Row className='album-content-album'> { renderSecondPageAlbum }  </Row>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={1} className='album-content-icon'onClick={ ()=>this.nextAlbum() } >
                        <Icon type="right" /> 
                    </Col>    
                </Row>
            </div>
        )
    }
}
export default  withRouter(NewDishShelf)