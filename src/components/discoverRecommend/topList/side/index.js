import React, { Component } from 'react'
import { Row,Col } from 'antd';
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import './index.scss'
import { addOrEven } from '../../../common/tools'

class Side extends Component{
    //跳转榜单
    dumpDiscoverToplist= (id) => { this.props.history.push(`/discover/toplist?id=${id}`) }
    //跳转歌曲
    dumpSong = (id) => { this.props.history.push(`/song?id=${id}`) }
    render(){
        const topList = this.props.topList? this.props.topList.playlist : null
        const TopList = !topList? null :(
            <div >
                <Row >
                    <Col span={12}>
                        <img onClick={ ()=>this.dumpDiscoverToplist( topList.id) }
                            src={ topList.coverImgUrl} 
                            className='side-img'
                            alt="" />
                    </Col>
                    <Col span={12}  >
                        <div className='side-topList-name' onClick={ ()=>this.dumpDiscoverToplist(topList.id) }>{topList.name}</div>
                        <span className='player-logo'> </span>
                        <span className='player-restore'></span>
                    </Col>
                </Row>
                <Row>
                    { 
                        topList.tracks.slice(0,10).map( ( item,index ) => {
                            //前三名的字体渲染成红色
                            const renderFont = index <=2? 'side-fontRed' :'side-fontWhite'
                           //渲染间隔颜色
                            const renderColor = addOrEven(index)? 'side-colorEven': 'side-colorAdd'
                            return(
                                <Row className={renderColor} key={item.id + index}>
                                    <span className={renderFont} >{index+1}</span>
                                    <span className='side-songStyle' onClick={ ()=>this.dumpSong(item.id) }> { item.name } </span> 
                                </Row>      
                            )
                        })
                    } 
                </Row>
                <Row className='side-more'>
                    <Col span={16}></Col>
                    <Col span={8}  className='side-fontStyle' onClick={ ()=>this.dumpDiscoverToplist(topList.id) }>查看全部></Col>
                </Row>
            </div>
        )
        return  <div>  { TopList } </div>
               
            
        
    }
}
export default withRouter(Side)