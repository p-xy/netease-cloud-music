import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import  Loadable from 'react-loadable';//按需加载组件库
import { Spin } from 'antd';
import 'antd/dist/antd.css';
//公共组件
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import Player from '../components/common/player'

const load = ( func ) => {
    return Loadable({
            loader(){ return func },
            loading(){ return <Spin /> }
        }
    )   
};
const dynamicIndex = load(import('../containers/discoverRecommend'))
const dynamicAlbum = load(import('../containers/album'))
const dynamicSong = load(import('../containers/song'))
const dynamicPlaylist =  load(import('../containers/playlist'))
const dynamicArtist  = load(import('../containers/artist'))

const dynamicDiscoverPlaylist = load(import('../containers/discoverPlaylist'))
const dynamicDiscoverAlbum = load(import('../containers/discoverAlbum'))
const dynamicDicoverToplist = load(import('../containers/discoverToplist'))
const dynamicDiscoverArtists = load(import('../containers/discoverArtist'))

const dynamicUserHome = load(import('../containers/userHome'))
const dynamicUserFollows = load(import('../containers/userFollows'))
const dynamicUserEvent = load(import('../containers/userEvent'))
const dynamicUserFans = load(import('../components/userHome/userFans'))

const dynamicSearch = load(import('../containers/search'))
const dynamicMy = load(import('../containers/my'))
const dynamicFriends = load(import('../components/friends'))

const dynamic404 = load(import('../components/404'))

class App extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Header/> 
                    <Player/>
                    <Switch>
                        <Route  path='/' exact component={ dynamicIndex } />
                        <Route  path='/album' component={ dynamicAlbum } />
                        <Route  path='/song' component={ dynamicSong } />
                        <Route  path='/playlist' component={ dynamicPlaylist } />

                        <Route  path='/discover' exact component={ dynamicIndex } />
                        <Route  path='/discover/playlist' component={ dynamicDiscoverPlaylist }/>
                        <Route  path='/discover/album' component={dynamicDiscoverAlbum} />
                        <Route  path='/discover/toplist' component={ dynamicDicoverToplist } />
                        <Route path='/discover/artist/' component={dynamicDiscoverArtists} />
                        <Route  path='/discover/artist/cat' component={dynamicDiscoverArtists} />

                        <Route  path='/user/home' component={dynamicUserHome} />
                        <Route path='/user/event' component={dynamicUserEvent} />
                        <Route path='/user/follows' component={dynamicUserFollows} />
                        <Route path='/user/fans' component={dynamicUserFans} />
                        <Route path='/search' component={dynamicSearch} />
                        <Route path='/artist' component={dynamicArtist} />
                        <Route path='/my' component={dynamicMy} />
                        <Route path='/friend' component={dynamicFriends} />
                        <Route path='*'  component={dynamic404} />
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        )
    }
}
export default connect()(App)