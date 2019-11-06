import React, { Component } from 'react'
import { Row,Col,Tabs } from 'antd';
import PlaylistInfo from './playlistInfo';
import PlaylistContent from './playlistContent';

class LoginMyPlaylist extends Component{
    constructor(props){
        super(props);
        this.state={
            activeKey:"1"
        }
    }
   
    handleChange=(key)=>{
        this.setState({
            activeKey:key
        })
     this.props.changePane( parseInt(key)-1 )
    }
    componentDidMount(){
        if(JSON.stringify(this.props.getLoginPlaylistInfo)==="{}"){
            this.forceUpdate()
        }
    }
    render() {
    const getLoginPlaylistInfo = this.props.getLoginPlaylistInfo;
    const renderPlaylist = getLoginPlaylistInfo.playlist&&getLoginPlaylistInfo.playlist.length>0&&getLoginPlaylistInfo.playlist.map( (item,index)=>{
    return (
        <Tabs.TabPane 
        tab={ <div>
                <div style={{ display:"inline-block",width:"40px",height:"40px" }}>
                    <img style={{ width:"40px",height:"40px" }} src={item.coverImgUrl} alt=''/>
                </div>
                <div style={{ display:"inline-block",marginLeft:"15px",verticalAlign:"middle" }}>
                  <div style={{ fontSize:"12px",width:"150px",textAlign:"left",color:"#000",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{item.name}</div>
                  <div style={{ fontSize:"12px",width:"150px",textAlign:"left",color:"#BBBBBB",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{item.trackCount}首</div>
                </div>
              </div> 
        }
       key={index+1}>
            <div>
               <PlaylistInfo 
                coverImgUrl={item.coverImgUrl} name={item.name} creatorImg = {item.creator.avatarUrl}
                 nickname={item.creator.nickname} createTime={item.createTime} userId={item.creator.userId}  />
            </div>
            <div>
              <PlaylistContent getLoginPlaylistContent={this.props.getLoginPlaylistContent} startPlaySong={ (id)=>this.props.startPlaySong(id) } />
            </div>
       </Tabs.TabPane>
      )
    })
    
    return(
            <Row style={{ backgroundColor:"#F5F5F5" }}>
                <Col span={3}/>
                <Col span={18} style={{borderLeft:'1px solid #D3D3D3',borderRight:'1px solid #D3D3D3', backgroundColor:"#fff",minWidth:"940px" }}>
                    <Row style={{ marginTop:"30px"}}>
                        <Col span={24}>
                            <div style={{ padding:"20px",fontSize:"18px",color:"#000",   }}>我的歌单({getLoginPlaylistInfo.playlist&&getLoginPlaylistInfo.playlist.length})</div>
                        <Tabs 
                            tabPosition="left"
                            activeKey={this.state.activeKey}
                            onChange={ (key)=>this.handleChange(key) }
                            >

                        {
                           renderPlaylist
                        }
                        </Tabs>
                        </Col>
                    </Row>
                </Col>
                <Col span={3} />
            </Row>
        )
    }
}
export default LoginMyPlaylist