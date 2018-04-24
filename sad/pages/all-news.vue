<template>
  <div class="container all-news-container">
    <!--全部资讯栏-->
    <h4 class="latest-header">全部资讯</h4>
    <div class="new-cell-group">
      <div class="news-cell clearfix" v-for="item in allnewsdata" :key="item.id">
        <div class="news-cell-img float-left">
          <a :href="item.newsLink" :title="item.newsTitle" target="_blank">
            <img :src="item.imgUrl"/>
          </a>
        </div>
        <div class="news-cell-detail float-left">
          <a :href="item.newsLink" title="item.newsTitle" target="_blank">
            <h5 class="news-cell-title two-line-text">{{item.newsTitle}}</h5>
          </a>
          <article class="news-cell-article three-line-text">{{item.newsArticle}}</article>
        </div>
        <small class="news-cell-info float-right">STAR MOVIES<span class="news-date text-muted">{{item.newsDate}}</span></small>
      </div>
    </div>
    <!--分页栏-->
    <div class="pag-nav">
      <b-pagination align="center" :total-rows="5000" v-model="currentPage" :per-page="10">
      </b-pagination>
    </div>
  </div>
</template>
<script scoped>
  export default {
    head: {
      'title': '全部资讯',
    },
    data () {
      return {
        project: 'default',
        currentPage: 1,
        allnewsdata: [
          {
            imgUrl:  require('~/assets/img/5.jpg'),
            newsLink: 'javascript:viod 0',
            newsTitle: '...',
            newsDate: '00-00',
            viewCount: '0',
            newsArticle: '...',
          },
        ]
      }
    },
    asyncData (context) {
      return {
        project: 'nuxt',
        allnewsdata: [
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            newsDate: '04-13',
            viewCount: '200',
            newsArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            newsDate: '04-13',
            viewCount: '200',
            newsArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            newsDate: '04-13',
            viewCount: '200',
            newsArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            newsDate: '04-13',
            viewCount: '200',
            newsArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            newsDate: '04-13',
            viewCount: '200',
            newsArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            newsDate: '04-13',
            viewCount: '200',
            newsArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            newsDate: '04-13',
            viewCount: '200',
            newsArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            newsDate: '04-13',
            viewCount: '200',
            newsArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            newsDate: '04-13',
            viewCount: '200',
            newsArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
          {
            imgUrl:  require('~/assets/img/6.jpg'),
            newsLink: 'http://baidu.com',
            newsTitle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳',
            newsDate: '04-13',
            viewCount: '200',
            newsArticle: '《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳'
          },
        ],
      }
    }
  }
</script>
<style>
  .all-news-container{
    margin: 160px auto 50px auto;
    text-align: center;
    height: 1500px;
    position: relative;
  }
  .pag-nav {
    text-align: center;
    position: absolute;
    padding: 0;
    width: 280px;
    height: 50px;
    left: 50%;
    margin-left: -140px;
    bottom: 0;
  }
  .latest-header {
    text-align: center;
    margin: 10px;
  }
  .news-cell:hover{
    width: 91%;
    height: 125px;
  }

  .news-cell {
    width: 90%;
    height: 120px;
    transition:width .5s ease-out;
    -moz-transition:width .5s ease-out; /* Firefox 4 */
    -webkit-transition:width .5s ease-out; /* Safari and Chrome */
    -o-transition:width .5s ease-out; /* Opera */
    margin: 10px auto 10px auto;
    padding: 5px 5px 5px 5px;
    text-align: left;
    background-color: #2E294E;
    color: lightgrey;
  }
  .news-cell-img {
    width: 19%;
    height: 100%;
    overflow: hidden;
  }
  .news-cell-img img {
    width: 100%;
    height: 100%;
  }
  .news-cell-detail {
    width: 68%;
    height: 100%;
    padding: 5px 20px 10px 10px;
    overflow: hidden;
  }
  .news-date {
    padding: 0px 0px 0px 5px;
  }
  .news-cell-info {
    width: 13%;
    height: 100%;
    padding: 5px 0px 0px 0px;
  }
</style>
