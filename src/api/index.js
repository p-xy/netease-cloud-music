import axios from 'axios';

//根据线上情况填写真实ip
const baseURL = "http://localhost:3000"
//const baseURL = "http://18.218.243.114:7001"
/*=============================
        index：首页
===============================*/
//轮播图
export const getIndexBanner = ()=>{
    const url = `${baseURL}/banner`;
    return axios.get( url,{ withCredentials: true } )
}
//热门推荐的标签
export const getHotCommendTags = ()=>{
    const url = `${baseURL}/playlist/hot`;
    return axios.get(url,{ withCredentials: true });
}
//热门推荐
export const getHotCommend = ()=>{
    const url = `${baseURL}/personalized`;
    return axios(url,{ withCredentials: true });
}
//新碟上架
export const getNewAlbum = ()=>{
    const url = `${baseURL}/album/newest`;
    return axios.get(url,{ withCredentials: true })
}
//云音乐飙升榜
export const getIncreate = ()=>{
    const url = `${baseURL}/top/list?idx=3`;
    return axios.get(url,{ withCredentials: true });
}

//云音乐新歌榜
export const getNewList = ()=>{
    const url = `${baseURL}/top/list?idx=0`;
    return axios.get(url,{ withCredentials: true });
}
//网易原创歌曲榜
export const getOriginalList = ()=>{
    const url = `${baseURL}/top/list?idx=2`;
    return axios.get(url,{ withCredentials: true });
}
//入驻歌手
export const getEnteringSinger = ()=>{
    const url = `${baseURL}/artist/list?cat=5001&limit=90`;
    return axios.get(url,{ withCredentials: true });
}

/*=====================================
          discoverToplist：排行榜页
=======================================*/
//榜单(左侧列表)
export const allPlaylistData = ( )=>{
    const url = `${baseURL}/toplist`;
    return axios.get(url,{ withCredentials: true });
}
//单个榜单(右侧内容)
export const toplistData = (id)=>{
    const url = `${baseURL}/playlist/detail${id}`
    return axios.get(url,{ withCredentials: true })
}
//评论数据
export const toplistCommentData = (id,limit,offset)=>{
    offset = (offset-1)*limit;
    const url = `${baseURL}/comment/playlist${id}&limit=${limit}&offset=${offset}`;
    return axios.get(url,{ withCredentials: true });
}

/*======================================
          discoverPlaylist：歌单页
========================================*/
// 歌单内容
export const getHotCommendTagsContent = (tag,offset)=>{
    const limit = 35
    // eslint-disable-next-line radix
    const offsets = ( parseInt(offset) - 1)* limit
    const url = `${baseURL}/top/playlist?cat=${tag}&limit=${limit}&offset=${offsets}`;
    return axios.get(url,{ withCredentials: true });
}
//标签
export const getSelectTagsData = ()=>{
    const url = `${baseURL}/playlist/catlist`;
    return axios.get(url,{ withCredentials: true });
}

/*=========================================
          discoverAlbum：新碟上架页
===========================================*/
//全部新碟
export const getNewAlbumAll = (area ,offset)=>{
    const limit = 35
    const offsets = (offset-1)*limit;
    const url = `${baseURL}/top/album?type=${area}&offset=${offsets}&limit=${limit}`;
    return axios.get(url,{ withCredentials: true })
}
//热门新碟(见首页）： getNewAlbum()  

/*=============================================
          discoverArtist：歌手页
===============================================*/
//入驻歌手(见首页)：getEnteringSinger()
//热门歌手
export const getHotSingerData = ()=>{
    const url = `${baseURL}/top/artists?limit=100`;
    return axios.get(url,{ withCredentials: true });
}
// 不同类型歌手:(华语，日本，欧美。。。) 参数： ?cat=${id}&initial=${initial}
export const getCatSingerData = (url_parameter)=>{
    const url = `${baseURL}/artist/list${url_parameter}&limit=100`;
    return axios.get(url,{ withCredentials: true })   
}

/*==============================================
            album:专辑(单张)
===============================================*/

//album专辑数据
export const getAlbum = (search)=>{
    const url = `${baseURL}/album${search}`;
    return axios.get( url,{ withCredentials: true } );
}
//歌手的其他专辑
export const getSingerAlbum = (id,limit)=>{
    const url = `${baseURL}/artist/album?id=${id}&limit=${limit}`;
    return axios.get(url,{ withCredentials: true });
}
//专辑评论
export const getAlbumComment = (id,limit,offset)=>{
    let url = "";
    let num = (offset-1)*20;
    if(offset) {
         url = `${baseURL}/comment/album${id}&limit=${limit}&offset=${num}`;
    }else {
         url = `${baseURL}/comment/album${id}`;
    }
    return axios.get(url,{ withCredentials: true });
}

/*==============================================
            playlist:歌单(单张)
===============================================*/
//歌单数据  ?id=xxx
export const getPlaylistData = (id)=>{
    const url = `${baseURL}/playlist/detail${id}`;
    return axios.get(url,{ withCredentials: true });
}
//评论数据
export const getPlayListCommentData = (id,limit,number)=>{
    if(limit && number){
        let offset = limit*(number-1);
        const url = `${baseURL}/comment/playlist${id}&limit=${limit}&offset=${offset}`
        return axios.get( url,{ withCredentials: true });
    }else {
        const url = `${baseURL}/comment/playlist${id}`;
        return axios.get( url,{ withCredentials: true });
    }
}
//相关推荐(相似歌单)
export const getHotPlaylistLike = (id)=>{
    const url =`${baseURL}/related/playlist${id}`;
    return axios.get(url,{ withCredentials: true }); 
}

/*==============================================
            song:歌曲(单首)
===============================================*/
//歌曲详细数据
export const songGetSongData = (id)=>{
    const songId = id.replace('?id=','')
    const url =`${baseURL}/song/detail?ids=${songId}`;
    return axios.get(url,{ withCredentials: true });
}
//歌词: ?id=xxx
export const getSongLyric = (id)=>{
    const url = `${baseURL}/lyric${id}`;
    return axios.get(url,{ withCredentials: true });
}
//评论数据
export const getSongComment = (id,limit,offset)=>{
    let url = "";
    let num = (offset-1)*20;
    if(offset){
        url = `${baseURL}/comment/music${id}&limit=${limit}&offset=${num}`;

    }else {
        url = `${baseURL}/comment/music${id}`;
    }
    return axios.get(url,{ withCredentials: true });
}
//相似用户（5个）
export const getSimiUser = (id)=>{
    return axios.get(`${baseURL}/simi/user${id}`,{ withCredentials: true });
}
//相似歌单(3个)
export const getSimiPlaylist = (id)=>{
    return axios.get(`${baseURL}/simi/playlist${id}`,{ withCredentials: true });
}
//相似歌曲
export const getSimilarSong = (id)=>{
    const url = `${baseURL}/simi/song${id}`;
    return axios.get(url,{ withCredentials: true });
}
//歌曲的播放地址数据
export const getSongUrlData = (id)=>{
    const url = `${baseURL}/song/url?id=${id}`;
    return axios.get(url,{ withCredentials: true })
}

/*==============================================
            userHome:用户主页
===============================================*/
//用户详情
export const getUserDetailData = (uid)=>{
    const url = `${baseURL}/user/detail?uid=${uid}`;
    return axios.get(url,{ withCredentials: true })
}
//播放排行榜。type参数：1为一周，0为所有时间
export const getUserPlayerList = (uid,type)=>{
    const url = `${baseURL}/user/record?uid=${uid}&type=${type}`;
    return axios.get(url,{ withCredentials: true })
} 
//歌单数据(包括创建和收藏的歌单),默认limit=31
export const getUserHomePlaylist = (id)=>{
    const url = `${baseURL}/user/playlist?uid=${id}&limit=200`;
    return axios.get(url,{ withCredentials: true })
}

/*==============================================
            userFollows:用户关注
===============================================*/
/*用户详情
export const getUserDetailData = (uid)=>{
    const url = `${baseURL}/user/detail?uid=${uid}`;
    return axios.get(url,{ withCredentials: true })
}
*/
//获取用户关注的人
export const getUserFollowsData = (id)=>{
    const url = `${baseURL}/user/follows?uid=${id}`;
    return axios.get(url,{ withCredentials: true });
}

/*==============================================
            userEvent:用户动态
===============================================*/
/*用户详情
export const getUserDetailData = (uid)=>{
    const url = `${baseURL}/user/detail?uid=${uid}`;
    return axios.get(url,{ withCredentials: true })
}
//获取用户关注的人
export const getUserFollowsData = (id)=>{
    const url = `${baseURL}/user/follows?uid=${id}`;
    return axios.get(url,{ withCredentials: true });
}
*/
//粉丝
export const getUserFansData = (uid)=>{
    const url = `${baseURL}/user/followeds?uid=${uid}`
    return axios.get(url,{ withCredentials: true })
}
//获取用户动态
export const getUserEventData = (id)=>{
    const url = `${baseURL}/user/event?uid=${id}`;
    return axios.get(url,{ withCredentials: true })
}

/*==============================================
            artitst:歌手
===============================================*/
//歌手热门歌曲
export const getSingerSongs = (id)=>{
    const url = `${baseURL}/artists?id=${id}`;
    return axios.get(url,{ withCredentials: true });
}
//获取歌手专辑
export const getSingerAlbums = (id)=>{
    const url = `${baseURL}/artist/album?id=${id}`;
    return axios.get(url,{ withCredentials: true });
}
//获取歌手mv
export const getSingerMvs = (id)=>{
    const url = `${baseURL}/artist/mv?id=${id}`;
    return axios.get(url,{ withCredentials: true });
}
//获取歌手描述
export const getSingerDesc = (id)=>{
    const url = `${baseURL}/artist/desc?id=${id}`;
    return axios.get(url,{ withCredentials: true });
}
//相似歌手
export const getSimiArtist =(id)=>{
    const url = `${baseURL}/simi/artist?id=${id}`
    return axios.get(url,{ withCredentials: true });
}

/*==============================================
            search:搜索页面
===============================================*/
//搜索的API
export const getSearchData = (keyword,type,offset,limit)=>{
    let url = ``;
    if(limit) {
        offset = (offset-1)*limit;
        url=`${baseURL}/search?keywords=${keyword}&type=${type}&offset=${offset}`
    }else if(type) {
        url = `${baseURL}/search?keywords=${keyword}&type=${type}`
    }else{
        url = `${baseURL}/search?keywords=${keyword}`;
   } 
    return axios.get(url,{ withCredentials: true });
}

/*==============================================
            my:我的音乐
===============================================*/
//获取登录状态
export const loginStatusRefresh = ()=>{
    return axios.get(`${baseURL}/login/status`,{ withCredentials: true })
}
//用户歌单
export const userPlayList =(uid)=>{
    const url = `${baseURL}/user/playlist?uid=${uid}`
    return axios.get(url,{ withCredentials: true })  
}
//歌单信息
export const playListDetail = (playID)=>{
    const url = `${baseURL}/playlist/detail?id=${playID}`
    return axios.get(url,{ withCredentials: true })
}

/*部分与登录有关接口*/
//刷新登录状态
export const getLoginStatus = ()=>{
    const url = `${baseURL}/login/refresh`;
    return axios.get(url,{ withCredentials: true })
}
//退出登录接口
export const loginOut = ()=>{
    return axios.get(`${baseURL}/logout`,{ withCredentials: true })
}

/*==============================================
            musicPlay:音乐播放栏
===============================================*/
/*歌曲的播放地址url
export const getSongUrlData = (id)=>{
    const url = `${baseURL}/song/url?id=${id}`;
    return axios.get(url,{ withCredentials: true })
}
*/
//歌曲详细数据(歌曲名，作者等等)
export const getSongData = (id)=>{
    const url =`${baseURL}/song/detail?ids=${id}`;
    return axios.get(url,{ withCredentials: true });
}


/*========预留=========*/

//发送私信不携带歌单
export const sendPersonMessage=(user_ids,msg)=>{

    const url = `${baseURL}/send/text?user_ids=${user_ids}&msg=${msg}`;
    return axios.get(url,{ withCredentials: true });
}
//关注/取消关注 用户
export const followUser = (id,t)=>{
    const url = `${baseURL}/follow?id=${id}&t=${t}`;
    return axios.get(url,{ withCredentials: true })
}
//获取每日推荐歌单
export const getPlaylistEveryData = ()=>{
    const url=`${baseURL}/recommend/resource`;
    return axios.get(url,{ withCredentials: true });
}
