<div align="center">
    <h1 align="center">Web PC版 网易云音乐 </h1>
    <p> 基于React，   
        <a href="http://18.218.243.114:7000/">在线预览</a>
    </p>
    <p>
    <a href=""><img src="https://img.shields.io/badge/-Antd Design-blue.svg" alt="Version"></a>
    <a href=""><img src="https://img.shields.io/badge/-Redux-brightgreen .svg" alt="Version"></a>
    <a href=""><img src="https://img.shields.io/badge/ React router-red.svg" alt="Version"></a>
    </p>
    <img height='85%' width='85%' src="https://i.loli.net/2019/11/11/OTi6pX8PARDrkVh.png" alt="picture" >
    </div>
</div>

## 起源

<p>
掌握react技术栈是个漫长的过程,这是我实战练习后的一个项目成果。

如果你是一个React新手，苦于没有实战经验而不知如何下手，它应该能有些帮助
(前提是对React全家桶有足够的了解 :-))。
</p>

##### 主要技术栈
- react ^16.11.0
- antd ^3.25.0
- axios ^0.19.0
- redux ^4.0.4
- react-redux ^7.1.3
- react-router-dom ^5.1.2
- react-thunk ^2.3.0
- react-sound ^1.2.0

##### 功能

- 实现了一个可以单曲、随机和顺序循环，等等功能较完善的音乐播放器
- 播放音乐上，利用redux 和 localStorage 做了本地数据持久化
- 搜索、登录（只实现了手机登录）
- 推荐、排行榜、歌手、新碟上架、歌单、用户主页、评论等等的绝大部分页面
- 具体功能请移步： <a href="http://18.218.243.114:7000/">在线预览</a> 

## 开发

- 本项目依赖一个开源的网易云音乐API,请移步 <a href="https://github.com/Binaryify/NeteaseCloudMusicApi">网易云音乐 Node.js API service </a>，下载运行后监听本地3000端口。
- 终端运行
    ```js
    $ git clone https://github.com/XiaoyuPang/netease-cloud-music.git
    $ cd netease-cloud-music/
    $ npm install
    $ npm run start
    ```

### 参考
<p>
<a href ="https://github.com/Binaryify/NeteaseCloudMusicApi"> Binaryify/NeteaseCloudMusicApi </a>
</p>
<p>
<a href ="https://github.com/jiudehuiyi/react-player-music-PC">jiudehuiyi/react-player-music-PC </a>
</p>