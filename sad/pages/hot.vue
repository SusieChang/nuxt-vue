<template>
  <section class="container hot-container clearfix">
    <!--最新资讯-->
    <div class="latest-box-container">
      <div class="header">
        <h4>最新资讯</h4>
      </div>
      <div class="news-box-container clearfix" id="vue-app1">
        <div class="news-box" v-for="item in newsdata" :key="item.id">
          <a  :href="item.newsLink" target="_blank" :title="item.newsTitle">
            <img class="news-box-img" :src="item.imgUrl" alt="news img">
          </a>
          <a  :href="item.newsLink" target="_blank" :title="item.newsTitle">
            <p class="news-box-title two-line-text text-center">
              {{item.newsTitle}}
            </p>
          </a>
          <div class="news-box-info">
            <small class="update-time text-muted float-left">Last updated {{item.updateTime}} ago</small>
            <small class="view-count float-right"><span class="fa fa-eye"></span>{{item.viewCount}}</small>
          </div>
        </div>
      </div>
      <a href="/all-news" class="all-news-ref float-right">更多<span class="fa fa-arrow-right fa-lg"></span></a>
    </div>
    <!--最新视频-->
    <div class="latest-box-container">
      <div class="header">
        <h4>最新视频</h4>
      </div>
      <div class="video-box-container clearfix" id="vue-app2">
        <div class="video-box card img-fluid" v-for="item in videodata" :key="item.id">
          <a :href="item.videoLink" :title="item.videoTitle" target="_blank">
            <img class="video-box-img card-img-top" :src="item.imgUrl" alt="video image">
            <div class="video-box-detail card-img-overlay">
              <p class="video-box-title card-title two-line-text">{{item.videoTitle}}</p>
              <small class="view-count float-right"><span class="fa fa-play fa-lg"></span>{{item.viewCount}}</small>
            </div>
          </a>
        </div>
      </div>
      <a href="/all-news" class="all-video-ref float-right">更多<span class="fa fa-arrow-right fa-lg"></span></a>
    </div>
  </section>
</template>

<script scoped>
  export default {
    head: {
      'title': '热点资讯',
    },
    data () {
      return {
        project: 'default',
        newsdata: [
          {
            imgUrl:  require('~/assets/img/1.jpg'),
            newsLink: 'javascript:viod 0',
            newsTitle: '...',
            updateTime: '0 min',
            viewCount: '0'
          },
        ],
        videodata: [
          {
            imgUrl:  require('~/assets/img/1.jpg'),
            videoLink: 'javascript:viod 0',
            videoTitle: '...',
            viewCount: '0'
          },
        ]
      }
    },
    asyncData (context) {
      return {
        project: 'nuxt',
        newsdata: [
          {
            imgUrl:  require('~/assets/img/4.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            updateTime: '30 min',
            viewCount: '200'
          },
          {
            imgUrl:  require('~/assets/img/4.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            updateTime: '30 min',
            viewCount: '200'
          },
          {
            imgUrl:  require('~/assets/img/4.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            updateTime: '30 min',
            viewCount: '200'
          },
          {
            imgUrl:  require('~/assets/img/4.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            updateTime: '30 min',
            viewCount: '200'
          },
          {
            imgUrl:  require('~/assets/img/4.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            updateTime: '30 min',
            viewCount: '200'
          },
          {
            imgUrl:  require('~/assets/img/4.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            updateTime: '30 min',
            viewCount: '200'
          },
        ],
        videodata:[
          {
            imgUrl:  require('~/assets/img/2.jpg'),
            videoLink: 'https://v.qq.com/x/cover/twu995cadnasuk0/o0636w67b39.html',
            videoTitle: 'Battle战？争A班？坐C位？《创造101》里你不能错过的小细节！',
            viewCount: '200'
          },
          {
            imgUrl:  require('~/assets/img/2.jpg'),
            videoLink: 'https://v.qq.com/x/cover/twu995cadnasuk0/o0636w67b39.html',
            videoTitle: 'Battle战？争A班？坐C位？《创造101》里你不能错过的小细节！',
            viewCount: '200'
          },
          {
            imgUrl:  require('~/assets/img/2.jpg'),
            videoLink: 'https://v.qq.com/x/cover/twu995cadnasuk0/o0636w67b39.html',
            videoTitle: 'Battle战？争A班？坐C位？《创造101》里你不能错过的小细节！',
            viewCount: '200'
          },
          {
            imgUrl:  require('~/assets/img/2.jpg'),
            videoLink: 'https://v.qq.com/x/cover/twu995cadnasuk0/o0636w67b39.html',
            videoTitle: 'Battle战？争A班？坐C位？《创造101》里你不能错过的小细节！',
            viewCount: '200'
          },
          {
            imgUrl:  require('~/assets/img/2.jpg'),
            videoLink: 'https://v.qq.com/x/cover/twu995cadnasuk0/o0636w67b39.html',
            videoTitle: 'Battle战？争A班？坐C位？《创造101》里你不能错过的小细节！',
            viewCount: '200'
          },
          {
            imgUrl:  require('~/assets/img/2.jpg'),
            videoLink: 'https://v.qq.com/x/cover/twu995cadnasuk0/o0636w67b39.html',
            videoTitle: 'Battle战？争A班？坐C位？《创造101》里你不能错过的小细节！',
            viewCount: '200'
          },
        ]
      }
    }
  }
</script>

<style>
  .hot-container {
    margin-top: 100px;
  }
  .latest-box-container {
    text-align: center;
    margin: 120px 0 100px 0;
  }
  .news-box {
    display: inline-block;
    width: 300px;
    height: 240px;
    margin: 20px 20px 20px 20px;
    padding: 0;
    overflow: hidden;
    border-radius: 5px;
    background-color: #eeeeee;
    color: #2E294E;
  }
  .news-box-img {
    width: 300px;
    height: 70%;
  }
  .news-box-title {
    width: 100%;
    height: fit-content;
    margin: 0;
    color: #2E294E;
  }
  .news-box-info {
    width: 100%;
    height: fit-content;
    vertical-align: bottom;
    padding: 0px 10px 10px 10px;
  }

  span.fa{
    line-height: 3px;
    margin: 0px 3px 0px 3px;
  }

  .video-box {
    display: inline-block;
    width: 300px;
    height: 220px;
    margin: 20px 20px 20px 20px;
    overflow: hidden;
    padding: 0;
  }
  .video-box-img {
    width: 100%;
    height: 100%;
  }
  .video-box-detail:hover {
    background-color:  rgba(0,0,0,0.5);
    color: antiquewhite;
    font-size: 16px;
  }
  .video-box-detail{
    background-color:  rgba(0,0,0,0.1);
    color: white;
    font-size: 16px;
  }
</style>
