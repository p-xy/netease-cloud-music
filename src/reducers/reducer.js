import {combineReducers} from 'redux'
import { albumData,albumCommentData,singerOtherAlbum } from './album'
import { 
    banner, hotCommend, newAlbumReducer,
    topListReducer,newListReducer,originalListReducer,
    enteringSingerReducer,hotCommendTagsReducer } from './discoverRecommend'
import { 
    songDataReducer,songCommentDataReducer,songLyricDataReducer,
    simiUserDataReducer, simiPlaylistDataReducer, similarSongData, 
    songUrlDataReducer } from './song';
import { commendTagsContentReducer, selectTagsDataReducer } from './discoverPlaylist';
import { playlistDataReducer,playlistCommentDataReducer,hotPlaylistDataReducer } from './playlist';
import { newAlbumDataReducer,newAlbumAllDataReducer } from './discoverAlbum';
import { allPlaylistDataReducer ,toplistContentDataReducer,toplistCommentDataReducer} from './discoverToplist';
import {  enterSingerDataReducer,hotSingerDataReducer,catSingerDataReducer } from './discoverArtist'
import { getUserDetailDataReducer,userSingerPlayListReducer,userHomePlaylistReducer } from './userHome'
import { loginDataReducer } from './header';
import { getUserDetailDataReducerUserEven, userEventDataReducer,userFollowsDataReducer,userFansDataReducer } from './userEvent'
import { getUserDetailDataReducerUserFollows,userFollowsDataReducerUserFollows } from './userFollows'
import { searchDataReducer } from './search'
import { singerSongsDataReducer,singerAlbumsDataReducer,singerMvsDataReducer,singerDesDataReducer,simiArtistDataReducer } from './artists';
import { getLoginStatusReducer,getLoginPlaylistInfoReducer,getLoginPlaylistContentReducer } from './my';
import { playerReducer, playerStatusReducer, currentSongIndexReducer } from './player'

const reducer = combineReducers({
  banner,
  albumData,
  albumCommentData,
  singerOtherAlbum,
  hotCommend,
  simiUserDataReducer, 
  simiPlaylistDataReducer,
  newAlbumReducer,
  topListReducer,
  newListReducer,
  originalListReducer,
  enteringSingerReducer,
  songDataReducer,
  songCommentDataReducer,
  songLyricDataReducer,
  similarSongData,
  songUrlDataReducer,
  hotCommendTagsReducer,
  commendTagsContentReducer,
  selectTagsDataReducer,
  playlistDataReducer,
  playlistCommentDataReducer,
  hotPlaylistDataReducer,
  newAlbumDataReducer,
  newAlbumAllDataReducer,
  allPlaylistDataReducer,
  toplistContentDataReducer,
  toplistCommentDataReducer,
  enterSingerDataReducer,
  hotSingerDataReducer,
  catSingerDataReducer,
  getUserDetailDataReducer,
  loginDataReducer,
  userSingerPlayListReducer,
  userHomePlaylistReducer,
  getUserDetailDataReducerUserEven,
  userEventDataReducer,
  userFollowsDataReducer,
  getUserDetailDataReducerUserFollows,
  userFollowsDataReducerUserFollows,
  searchDataReducer,
  singerSongsDataReducer,
  singerAlbumsDataReducer,
  singerMvsDataReducer,
  singerDesDataReducer,
  getLoginStatusReducer,
  getLoginPlaylistInfoReducer,
  getLoginPlaylistContentReducer,
  userFansDataReducer,
  simiArtistDataReducer,
  playerReducer,
  playerStatusReducer,
  currentSongIndexReducer
  });
  
  export default reducer