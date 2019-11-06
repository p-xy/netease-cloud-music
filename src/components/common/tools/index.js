import { addSongToPlaylistAction } from '../../../actions/player'
import store from '../../../reducers'

//点播歌曲
export const startPlaySong = (songId)=>{
    store.dispatch( addSongToPlaylistAction( songId) ) //添加歌曲到播放列表
}

//格式化 播放量
export const formatPlayCount = (playCount)=>{
    if( (playCount/10000)>10000 ) {
        return `${(playCount/100000000).toFixed(1)}亿`
    } else if ( (playCount/10000)>9 ) {
        return Math.floor( playCount/10000 )+"万"
    } else {
        return playCount
    }
}

//确定某个数是单数还是复数
//addOrEven当是偶数的时候为true，当为奇数的时候为false
export const addOrEven = (number)=>{
    if( number%2 === 0 ) {
        return true;
    }
    else {
        return false
    }
}
//与时间有关的函数
const formatDate = (date)=>{
    return date < 10 ? `0${date}` : date;
}
//格式化歌曲时间
export const formatSongTime = (dt)=>{
    const date = new Date(dt);
    const minutes = formatDate(date.getMinutes());
    const second = formatDate(date.getSeconds());
    return `${minutes}:${second}`
}

//格式化月日
export const formatMonthDate = (time)=>{
    let times = new Date(time);
    const months = formatDate(times.getMonth()+1);
    const day = formatDate(times.getDate());
    return  `${months}月${day}日`
}
//对出版时间进行格式化
export const formatPublishTime = (time)=>{
    const date = new Date(time);
    const years = date.getFullYear();
    const months = formatDate(date.getMonth()+1);
    const day = formatDate(date.getDate());
    return `${years}-${months}-${day}`;
}
//格式化年月日
export const formatYearMonthDate=(time)=>{
    let times = new Date(time);
    const years = times.getFullYear();
    const months = formatDate(times.getMonth()+1);
    const day = formatDate(times.getDate());
    return  `${years}.${months}.${day}`
}

//格式化专辑中热门评论发表评论的时间
export const formatHotCommentPublishTime = (time)=>{
    //传进来的是评论时间,是一个毫秒数
    const passDt = new Date(time);
    const passYears = passDt.getFullYear();
    const passMonths = passDt.getMonth()+1;
    const passDate = passDt.getDate();
    //对时和分进行补零操作
    const passHours = formatDate(passDt.getHours());
    const passMinutes =formatDate( passDt.getMinutes());

    //now是现在时间的毫秒数
    const now = Date.now();
    const nowDt = new Date(now);
    const nowYears = nowDt.getFullYear();
    const nowMonths = nowDt.getMonth()+1;
    const nowDate = nowDt.getDate();
    //当是上一年或者更加之前的评论,返回的日期(与现在的时间相比较)
    if( nowYears>passYears ){
        return `${passYears}年${passMonths}月${passDate}日 ${passHours}:${passMinutes}`;
    }
    //当是今年的评论
    if( nowYears === passYears ) {
        return `${passMonths}月${passDate}日 ${passHours}:${passMinutes}`;
    }
    //当是今天的评论
    if( passYears === nowYears &&  passMonths === nowMonths &&  passDate === nowDate ) {
        return `${passHours}:${passMinutes}`;
    }
}

//格式化音乐播放时间,传入毫秒,
export const getSongPlayerTime = (mill)=>{
    //获得分钟
    const min =formatDate(Math.floor(mill/1000/60));
    //获得秒
    const sec = formatDate(Math.floor(mill/1000%60));
    return `${min}:${sec}`
}