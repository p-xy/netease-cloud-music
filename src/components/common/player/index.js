//播放音乐的组件
import React, { Component } from 'react'
import { Row,Col,Icon,Slider,Modal } from 'antd'
import { withRouter} from 'react-router-dom'
import 'antd/dist/antd.css'
import Sound from 'react-sound';
import { getSongPlayerTime, } from '../tools';
import './index.scss'
import { connect } from'react-redux'
import {  clearPlaylistAction, playerStatusAction, currentSongIndexAction } from '../../../actions/player'

class Player extends Component {
    constructor(props){
        super(props)
        this.state = {
            position:"00.00", //显示播放音乐的位置         
            duration:"00.00", //持续时间
            sliderValue:0, //歌曲播放的进度值：0-100
            audioPosition:0,//音频播放的位置
            volume:50,//音量大小：0-100之间
            showVolumeSlider:false,
            modalVisible:false, //播放列表：显示/不显示
            playMode:"singleLoop", // 单曲循环(singleLoop),列表循环(listLoop),随机循环(randomLoop)。默认单曲循环
        }
        //禁止Sound 的log日志输出
        window.soundManager.setup({
            debugMode: false,
            debugFlash: false
         })
    }

    //单曲循环
    singleLoop = ()=>{
        //单曲循环什么也不用做
    }
    //列表循环
    listLoop = ()=>{
        if( this.props.currentSongIndexData +1 < this.props.playlistData.length){
            this.props.changeCurrentSongIndex( this.props.currentSongIndexData + 1)
        }else{
            this.props.changeCurrentSongIndex( 0 )
        }
    }
    //随机循环
    randomLoop = ()=>{
        const length = this.props.playlistData.length
        const random_int = Math.floor( Math.random() * length ) //Math.random()生成0~1的随机数
        this.props.changeCurrentSongIndex(random_int)

    }
    //获取下一首歌的索引
    getNextSongIndex = ()=>{
        switch( this.state.playMode){
            case("listLoop"):
                return this.listLoop()
            case("randomLoop"):
                return  this.randomLoop()
            default:
                return
        }
    }
    //解析索引
    parseSongIndex = ()=>{
        this.songImgUrl = this.props.playlistData[ this.props.currentSongIndexData ].songInfo.songs[0].al.picUrl
        this.songName = this.props.playlistData[ this.props.currentSongIndexData ].songInfo.songs[0].name
        this.songArtist = this.props.playlistData[ this.props.currentSongIndexData ].songInfo.songs[0].ar[0].name
        this.songUrl = this.props.playlistData[ this.props.currentSongIndexData ].songUrl.data[0].url
    }
    //点击播放的时候触发的函数
    playing = ()=>{
        if( this.songUrl && this.songImgUrl){
            this.props.changePlayerStatus( "PLAYING")
        }
    }
    //点击暂停按钮的时候出发的函数
    pause = ()=>{
        if( this.songUrl ){
            this.props.changePlayerStatus( "PAUSED")
        }
    }
    //音乐停止触发的函数(停止是为了播放下一首，与暂停不同)
    onStop = ({position, duration})=>{
        this.setState({
            position:"00.00",
            duration:"00.00",
            sliderValue:0,
            audioPosition:0
        })
    }
    //当音乐播放完毕触发的函数
    mediaPlayingFinish = ()=>{
        this.props.changePlayerStatus( "PAUSED")
        this.setState({
            position:"00.00",
            duration:"00.00",
            sliderValue:0,
            audioPosition:0
        })
        // 解析索引后播放下一首歌
        this.getNextSongIndex()
        this.parseSongIndex()
        this.props.changePlayerStatus( "PLAYING" )
    }
    //当音乐播放时触发的函数
    mediaPlaying = ({position,duration})=>{
        let sliderPosition = position
        let durationPosition = duration
        this.changeAudioPosition = duration
        //改变歌曲进行时间
        let min = Math.floor(position/1000/60);
        let sec = Math.floor(position/1000%60);
        min = min<10?`0${min}`:min;
        sec = sec<10?`0${sec}`:sec;
        let durMin = Math.floor(duration/1000/60);
        let durSec = Math.floor(duration/1000%60);
        durMin = durMin<10?`0${durMin}`:durMin;
        durSec = durSec<10?`0${durSec}`:durSec;
        position = `${min}:${sec}`;
        duration = `${durMin}:${durSec}`;
        //改变歌曲进度条
        let sliderValue = Math.floor(sliderPosition/durationPosition*100);
        this.setState({
            position:position,
            duration:duration,
            sliderValue:sliderValue,//进度条的值
            audioPosition:sliderPosition,//音频播放位置的值
        })
    }
    //改变(拖动)进度条,去改变audioPosition(音频的播放位置),再由mediaPlaying重新触发音乐的播放
    handleSliderChange=(value)=>{
        let changeValue = (value/100)*this.changeAudioPosition
        this.setState({
            audioPosition:changeValue
        })
    }
    //鼠标悬浮：显示音量控制
    handleMouseOver=()=>{
        this.setState({
            showVolumeSlider:true
        })
   }
    //鼠标停止悬浮：隐藏音量控制
    handleMouseOut=()=>{
        this.setState({
            showVolumeSlider:false
        })
    }
    //调控音量
    handleVolumeChange=(value)=>{
    this.setState({
        volume:value
       })
    }
    //改变播放模式
    changePlayMode=(mode)=>{
        this.setState({
            playMode: mode
        })
    }
    //显示歌曲列表
    showModal=()=>{
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }
    handleCancel=()=>{
        this.setState({
            modalVisible:false
        })
    }
    //清除播放列表
    handleClearItem=()=>{
        this.props.clearPlaylist()
        this.songUrl = ''
        this.songImgUrl = ''
        this.songName = ''
        this.songArtist = ''
    }
    //点击播放列表,播放歌曲,
    playSong = (index)=>{
        this.props.changePlayerStatus( "STOPPED")
        this.props.changeCurrentSongIndex( index)
        this.parseSongIndex()
        this.props.changePlayerStatus( "PLAYING" )

    }
    //在歌曲列表中播放下一首歌
    nextSong=()=>{
        if(this.props.playlistData.lenght <2){
            return
        }else{
            this.props.changePlayerStatus( "STOPPED")
            if( this.props.currentSongIndexData + 1 < this.props.playlistData.length){
                this.props.changeCurrentSongIndex( this.props.currentSongIndexData + 1 )
            }else{
                this.props.changeCurrentSongIndex(0)
            }
            this.parseSongIndex()
            this.props.changePlayerStatus( "PLAYING" )
       }
    }
    //在歌曲列表中播放上一首歌
    preSong=( )=>{
        if(this.props.playlistData.lenght <2){
            return
        }else{
            this.props.changePlayerStatus( "STOPPED")
            if( this.props.currentSongIndexData   > 0 ){
                this.props.changeCurrentSongIndex( this.props.currentSongIndexData -1 )
            }else{
                this.props.changeCurrentSongIndex( this.props.playlistData.length -1)
            }
            this.parseSongIndex()
            this.props.changePlayerStatus( "PLAYING" )
       }
    }
    //在列表中点击歌手跳转相应得歌手页面
    dumpArtist=(singerId)=>{
        this.props.history.push(`/artist?id=${singerId}`)
    }
    render(){
        const STYLE = {
            body:{
                minWidth:"980px",
                width:"100%",
                height:"47px",
                lineHeight:"47px",
                backgroundColor:"#333333",
                color:"#fff",
                position:"fixed",
                bottom:"0px",
                left:"0px",
                zIndex:"9999",
                opacity:'0.9'
            }
        }
        let A = this.props.playlistData ? 1 :0
        let B = (this.props.currentSongIndexData !== null) ? 1:0
        let C = A && B
        //console.log( A,B,C)
        //console.log( this.props.currentSongIndexData,this.props.playlistData.length)
        this.songImgUrl =  C ? this.props.playlistData[ this.props.currentSongIndexData ].songInfo.songs[0].al.picUrl :''
        this.songName =  C ? this.props.playlistData[ this.props.currentSongIndexData ].songInfo.songs[0].name :''
        this.songArtist =  C? this.props.playlistData[ this.props.currentSongIndexData ].songInfo.songs[0].ar[0].name:''
        this.songUrl =  C ? this.props.playlistData[ this.props.currentSongIndexData ].songUrl.data[0].url :''
        return(
            <div style={ STYLE.body }>
                <Sound   
                    url={ this.songUrl }
                    playStatus={ this.props.playerStatusData }
                    onPlaying={ ({position,duration})=>this.mediaPlaying({position,duration}) }
                    onStop = { ({position,duration})=>{ this.onStop({position,duration})}}
                    onFinishedPlaying={ ()=>this.mediaPlayingFinish() }
                    position={this.state.audioPosition}
                    volume={ this.state.volume }
                    loop={false} > 
                </Sound>
            
                <Modal
                    wrapClassName="playlist-modal"
                    title={
                        [
                            <div key="play-list" style={{ float:"left" }}>播放列表({ this.props.playlistData ? this.props.playlistData.length: 0 })</div>,
                            <div key="all-store" style={{ float:"right",marginRight:"20px",fontSize:"12px" }}>
                                <span style={{ marginRight:"10px",cursor:"pointer" }}><Icon style={{ marginRight:"10px" }} type="folder-add" />收藏全部</span>
                                <span style={{ marginRight:"10px",cursor:"pointer" }}  onClick={ ()=>this.handleClearItem() }><Icon  style={{ marginRight:"10px" }} type="delete" />清除</span>
                            </div>,
                            <div key="clear" style={{ clear:"both" }}></div>
                        ]
                    }
                    mask={false}
                    visible={ this.state.modalVisible }
                    footer={ null }
                    bodyStyle={{ height:"260px",overflow:"auto",backgroundColor:"#242223",color:"#CCCCCC" }}
                    onCancel={ ()=>this.handleCancel() }
                    >
                    {
                        this.props.playlistData && this.props.playlistData.map( (item,index)=>(
                            <div key={item.id} className='playlist-modal-sub'>
                                {
                                    index === this.props.currentSongIndexData ?
                                        <div style={{ display:"inline-block",width:"20px",height:"28px",lineHeight:"28px",verticalAlign:"super" }}>
                                            <Icon type="caret-right" style={{ color:"#B50A0A",fontSize:"20px" }} />
                                        </div>
                                    :
                                        <div style={{ display:"inline-block",width:"20px",height:"28px",lineHeight:"28px",verticalAlign:"super" }}></div>
                                }
                                <div  
                                    onClick={ ()=>this.playSong( index ) }
                                    style={{ display:"inline-block", width:"266px",height:"28px",lineHeight:"28px",textAlign:"left",fontSize:"12px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",cursor:"pointer",paddingLeft:"10px" }}>
                                    { item.songInfo.songs[0].name }
                                </div>
                                <div 
                                    onClick={ ()=>this.dumpArtist(item.songInfo.songs[0].ar[0].id) }
                                    style={{ display:"inline-block",width:"80px",height:"28px",lineHeight:"28px",fontSize:"12px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",cursor:"pointer"  }}>
                                    { item.songInfo.songs[0].ar[0].name }
                                </div>
                                <div style={{ display:"inline-block",width:"45px",height:"28px",lineHeight:"28px",fontSize:"12px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",cursor:"pointer"  }}>
                                    { getSongPlayerTime(item.songInfo.songs[0].dt) }
                                </div>                               
                            </div>
                        ))
                    }
                </Modal>
                  
                <Row gutter={30}>
                    <Col span={3} ></Col>
                    <Col style={{ float:"left" }}>
                        <Row>
                            {/* 上一首*/}
                            <Col 
                                onClick = { this.preSong } 
                                style={{ float:"left",cursor:"pointer" }}>
                                    <Icon style={{ fontSize:"30px",verticalAlign:"middle" }} type="step-backward" />
                            </Col>
                            {/*播放or暂停*/}
                            {
                                this.props.playerStatusData === "PLAYING" ?
                                    <Col style={{ float:"left",cursor:"pointer" }}>
                                        <Icon style={{ fontSize:"30px",verticalAlign:"middle" }} type="pause-circle" onClick={ this.pause } />
                                    </Col>
                                :
                                    <Col style={{ float:"left",cursor:"pointer" }}>
                                        <Icon style={{ fontSize:"30px",verticalAlign:"middle" }} type="play-circle" onClick={ this.playing } />
                                    </Col>
                            }
                            {/*下一首*/}
                            <Col 
                                onClick={ this.nextSong } 
                                style={{ float:"left",cursor:"pointer" }}>
                                    <Icon style={{ fontSize:"30px" ,verticalAlign:"middle"}} type="step-forward" />
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{ float:"left" }}>
                        {/*图片*/}
                        <div style={{ display:"inline-block",width:"35px",height:"35px",marginRight:"15px" }}>
                            {
                                this.songImgUrl ?
                                    <img 
                                        src={ this.songImgUrl } 
                                        style={{ width:"35px",height:"35px" }}
                                        alt='' />
                                :
                                    <Icon type="user" style={{ fontSize:"20px" }} />
                            }
                        </div>
                        {/*播放条*/}
                        <div style={{ display:"inline-block",verticalAlign:"middle" }}>
                            <div style={{ lineHeight:"28px" }}>
                                {/*歌曲名*/}
                                <span style={{ fontSize:"12px",marginRight:"10px",color:"#D9D9DA",cursor:"pointer" }}>
                                    { this.songName }
                                </span>
                                {/*歌手名*/}
                                <span style={{ fontSize:"12px",color:"#9B9B9B",cursor:"pointer" }}>
                                    { this.songArtist }
                                </span>
                            </div>
                            <div style={{ lineHeight:"20px",marginTop:"-10px",position:"relative" }} className='songTime'>
                                {/*正在播放的进度条 */}
                                <Slider 
                                    value={this.state.sliderValue}
                                    tooltipVisible={false} 
                                    onChange={ (value)=>this.handleSliderChange(value) }
                                    min={0}
                                    max={100}
                                    style={{ width:"490px",marginRight:"10px",display:"inline-block",verticalAlign:"middle",color:"red" }}  >
                                </Slider>
                                {/* 已播放的时间*/}
                                <span>{ this.state.position }</span>
                                <span>/</span>
                                {/*歌曲长度 */}
                                <span>{this.state.duration}</span>
                            </div>
                        </div>
                    </Col>
                    {/*收藏和共分享*/}
                    <Col style={{ float:"left" }}>
                        <Icon type="file-add" style={{ fontSize:"20px",verticalAlign:"middle",color:"#B7B7B7",marginRight:"10px",cursor:"pointer" }} />
                        <Icon type="share-alt" style={{ fontSize:"20px",verticalAlign:"middle",color:"#B7B7B7",cursor:"pointer" }} />
                    </Col>
                    {/*音量调节*/}
                    <Col 
                        style={{ float:"left",position:"relative",cursor:"pointer" }} 
                        onMouseOver={ ()=>this.handleMouseOver() } 
                        onMouseOut={ ()=>this.handleMouseOut() } >
                            {
                                this.state.volume ?
                                    <div>
                                        <Icon type="sound" style={{ fontSize:"20px",verticalAlign:"middle",color:"#b7b7b7",cursor:"pointer" }} />
                                    </div>
                                :
                                    <div>
                                        <Icon type="stop" style={{ fontSize:"20px",verticalAlign:"middle",color:"#b7b7b7",cursor:"pointer" }} />
                                    </div>
                            }
                        <div style={{ position:"absolute",top:"-100px",left:"10px",width:"32px",height:"100px",backgroundColor:"#292929",display:this.state.showVolumeSlider?"block":"none" }}>
                            <Slider 
                                vertical={true}
                                tooltipVisible={false}
                                value={ this.state.volume }
                                onChange={ (value)=>this.handleVolumeChange(value) }
                            />    
                        </div>                            
                    </Col>
                    {/*循环模式 */}
                    <Col style={{ float:"left",cursor:"pointer" }}>
                        {
                            this.state.playMode==="singleLoop" ?
                                <span className="singer_loop" style={{ verticalAlign:"middle" }} onClick={ ()=>this.changePlayMode("listLoop") }></span>
                            :
                                (this.state.playMode==="listLoop" ?
                                    <span className="songs_loop" onClick={ ()=>this.changePlayMode("randomLoop") } style={{ verticalAlign:"middle" }}></span>
                                :   
                                    <span className='songs_random' onClick={ ()=>this.changePlayMode("singleLoop") } style={{ verticalAlign:"middle" }}></span>
                                )
                        }
                    </Col>
                    {/*播放列表*/}
                    <Col style={{ float:"left",cursor:"pointer" }} onClick={ ()=>this.showModal() }>
                        <span className='musicPlay-playlist'></span>
                        <span style={{ fontSize:"12px",marginLeft:"-15px" }}>{ this.props.playlistData ? this.props.playlistData.length :0 }</span>
                    </Col>
                    <Col span={3}/>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
       playlistData: state.playerReducer.data,
       currentSongIndexData: state.currentSongIndexReducer.data,
       playerStatusData: state.playerStatusReducer.data
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        clearPlaylist: ()=>{
            dispatch( clearPlaylistAction())
        },
        changeCurrentSongIndex: (index)=>{
            dispatch( currentSongIndexAction(index) )
        },
        changePlayerStatus: (status)=>{
            dispatch( playerStatusAction(status) )
        }
    }
}

export default withRouter( connect( mapStateToProps,mapDispatchToProps)(Player) )



