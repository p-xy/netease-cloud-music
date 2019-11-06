import  React, { Component } from 'react';
import { Carousel, Spin,Icon,Row,Col  } from 'antd';
import 'antd/dist/antd.css'
import { withRouter } from 'react-router-dom'
import './index.scss'

class Bannner extends Component {
    constructor(props){
        super(props);
        this.state = {
            indexBannners: 0
        }
    }
    handleClick = (url,targetId,targetType) =>{
      // 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频      const baseUrl = 'http://localhost:3000'
        if(url) {
            window.location = url
        }
        else{
            console.log('ID:',targetId,'type:',targetType,url)
            switch(targetType){
                case 1:
                    this.props.history.push(`/song?id=${targetId}`)
                    break;
                case 10:
                    this.props.history.push(`/album?id=${targetId}`)
                    break;
                case 100:
                    this.props.history.push(`/artist?id=${targetId}`)
                    break;
                case 1000:
                    this.props.history.push(`/playlist?id=${targetId}`)
                    break;
                case 1002:
                    this.props.history.push(`/user/home?id=${targetId}`)
                    break;
                case 1004:
                    this.props.history.push(`/mv?id=${targetId}`)
                    break;
                case 1009:
                    this.props.history.push(`/djradio?id=${targetId}`)
                    break;
                case 1014:
                    this.props.history.push(`/m/at?id=${targetId}`)
                    break
  
                default:
                    this.props.history.push(`/djradio?id=${targetId}`)
            }
        }
    }

    prevImg = ()=>{
      //切换上一张图片
       this.banners.prev();
    } 
    nextImg = ()=>{
      //切换下一张图片
        this.banners.next();
    }
    //轮播事件触发更换背景图
    afterChange = (current)=>{
      this.setState({
        indexBannners:current
      })
    }

    render(){
        //耗时操作应该在return 之前做好
        const banners = this.props.banner.banners?
            <Row style={{height:'336px'}}>
                <div className='leftArrow' onClick={ ()=>this.prevImg() }>
                    <Icon type="left" />
                </div>
                <Carousel
                    afterChange={ (current) => this.afterChange(current) }
                    autoplay={true}
                    effect="fade"
                    ref={ (middle)=>this.banners=middle }>
                    {
                       this.props.banner.banners.map( (item,index) =>(
                            <div  className='index-banner' key={ item.imageUrl}>  
                                <img 
                                    src={ item.imageUrl }
                                    key={item.imageUrl}
                                    alt='轮播图'
                                    className='img-style'
                                    onClick = { ()=>this.handleClick(item.url, item.targetId, item.targetType) } /> 
                            </div>     
                       ))
                    }
                </Carousel>
                <div className='rightArrow' onClick={ ()=>this.nextImg() }>
                    <Icon type="right" className='icon'  />
                </div>
            </Row>
        : <Spin />;
        return(
            <Row
                style={{ marginTop:"30px",minWidth:"990px"}} 
                className={`indexBannner${this.state.indexBannners}`} >
                <Col span={4} />
                <Col span={16} > { banners } </Col>
                <Col span={4}/>
            </Row>
        )
    }
}

export default withRouter(Bannner);