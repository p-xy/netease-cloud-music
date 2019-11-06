import React, { Component } from 'react'
import { Row,Col,Tabs,Spin } from 'antd'
import 'antd/dist/antd.css'

import HotWorks from './hotWorks'
import AllAlbum from './allAlbum'
import Mvs from './mvs'
import Des from './des'
import SimiArtist from './simiArtist'
import MulPlatform from '../common/mulPlatform'
import { startPlaySong } from '../common/tools'

class Artist extends Component {
    componentDidMount(){
        this.search = this.props.location.search
        this.id = this.search.match(/\d+/gi).toString()
        //歌手热门歌曲、专辑、MV、描述、相似歌手
        this.props.singerSongsDataFunc( this.id)
        this.props.singerAlbumsDataFunc(this.id)
        this.props.singerMvsDataFunc(this.id)
        this.props.singerDesDataFunc(this.id)
        this.props.singerSimiArtistDataFunc(this.id)
    }
    handleNewArtist = (id)=>{
        this.props.singerSongsDataFunc( id)
        this.props.singerAlbumsDataFunc(id)
        this.props.singerMvsDataFunc(id)
        this.props.singerDesDataFunc(id)
        this.props.singerSimiArtistDataFunc(id)
        this.props.history.push(`/artist?id=${id}`)
    }
    
    render(){
        const styles = {
            body:{
                backgroundColor:"#F5F5F5",
                minWidth:"1200px",
                minHeight:'400px'
            },
            content:{
                backgroundColor:'#ffffff',
                borderRight:"1px solid #D3D3D3",
                borderLeft:"1px solid #D3D3D3"

            },
            content_left:{
                borderRight:"1px solid #D3D3D3",
                padding:'0px 40px' 
            },
            artist_name:{
                paddingTop:'55px',
                fontSize:"25px",
                color:"#333333",
                marginRight:"20px"
            },
            img:{
                width:"640px",
                height:"300px",
                border:"1px solid #B7B7BF",
                marginTop:"10px" 
            },
            content_right:{
                padding:'50px 35px 0px 35px '
            }
        }
        return(
            <Row style={ styles.body }>
                <Col span={3} />
                <Col span={18} style={styles.content}>
                    <Row gutter={10}>
                        {
                            this.props.singerSongsData && this.props.singerAlbumsData && this.props.singerMvsData && this.props.singerDesData ?
                                <Col span={17} style={ styles.content_left }>
                                    <div style={ styles.artist_name }>
                                        { this.props.singerSongsData.artist ? this.props.singerSongsData.artist.name: null }
                                    </div>
                                    <img 
                                        alt=''
                                        style={ styles.img} 
                                        src={ this.props.singerSongsData.artist ? this.props.singerSongsData.artist.picUrl +'?param=640y300' : null }/>
                                    <Tabs >
                                        <Tabs.TabPane tab="热门作品" key="1">
                                            <HotWorks  hotSongs={ this.props.singerSongsData.hotSongs } startPlaySong={(id)=>startPlaySong(id)}   />
                                        </Tabs.TabPane>
                                        <Tabs.TabPane tab="所有专辑" key="2">
                                            <AllAlbum  hotAlbums={ this.props.singerAlbumsData.hotAlbums } />
                                        </Tabs.TabPane>
                                        <Tabs.TabPane tab="相关MV" key="3">
                                            <Mvs   singerMvsData={this.props.singerMvsData.mvs }/>
                                        </Tabs.TabPane>
                                        <Tabs.TabPane tab="艺人介绍" key="4">
                                            <Des singerDesData={this.props.singerDesData}/>
                                        </Tabs.TabPane>
                                    </Tabs>
                                </Col>
                            :<Spin/>
                        }
                        <Col span={7} style={ styles.content_right}>
                            {
                                this.props.singerSimiArtistData && this.props.singerSimiArtistData.artists ?
                                    <SimiArtist simiArtistData={this.props.singerSimiArtistData} handleNewArtist={this.handleNewArtist} />
                                    
                                :null
                            }
                            <MulPlatform />
                        </Col>
                    </Row>
                </Col>
                <Col span={3}/>
            </Row>

        )
    }
}
export default Artist