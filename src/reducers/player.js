//播放列表
export const playerReducer = (state={},action)=>{
    switch(action.type){
        case "PLAYLIST":
            return {
                data:action.data
            }
        default:
            const playlist = JSON.parse( localStorage.getItem("playlist") )
            return  playlist? { data:playlist } : state
    }
}

//默认播放器的状态为：停止
export const playerStatusReducer =( state={ data:'PAUSED'}, action )=>{
    switch(action.type){
        case "PLAYERSTATUS":
            return {
                data:action.data
            }
        default :
            return state
    }
}
//当前播放音乐的索引
export const currentSongIndexReducer = ( state=null, action)=>{
    switch( action.type){
        case "CURRENTSONGINDEX":
            return{
                data: action.data
            }
        default:
            const currentSongIndex = localStorage.getItem( "currentSongIndex")
            // eslint-disable-next-line radix
            return { data: currentSongIndex ? parseInt( currentSongIndex ) : null }
    }
}