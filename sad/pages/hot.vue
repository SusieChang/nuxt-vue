<template>
  <section class="container">
    <div class="latest-box-container">
      <div class="header">
        <h4>最新资讯</h4>
      </div>
      <div class="news-box-container clearfix">
        <div class="news-box">
          <a class="news-img-ref" href="#" target="_blank" >
            <img class="news-img" src="~/assets/img/2.jpg" alt="news img">
          </a>
          <a class="news-title-ref" href="#" target="_blank">
            <p class="news-title two-line-text text-center">
              《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳
              <!--{{value}}-->
            </p>
          </a>
          <div class="news-info">
            <small class="update-time text-muted float-left">Last updated 3 min ago</small>
            <small class="view-count float-right"><span class="fa fa-eye"></span>200</small>
          </div>
        </div>
        <div class="news-box">
          <a class="news-img-ref" href="#" target="_blank" >
            <img class="news-img" src="~/assets/img/2.jpg" alt="news img">
          </a>
          <a class="news-title-ref" href="#" target="_blank">
            <p class="news-title two-line-text text-center">
              《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳
              <!--{{value}}-->
            </p>
          </a>
          <div class="news-info">
            <small class="update-time text-muted float-left">Last updated 3 min ago</small>
            <small class="view-count float-right"><span class="fa fa-eye"></span>200</small>
          </div>
        </div>
        <div class="news-box">
          <a class="news-img-ref" href="#" target="_blank" >
            <img class="news-img" src="~/assets/img/2.jpg" alt="news img">
          </a>
          <a class="news-title-ref" href="#" target="_blank">
            <p class="news-title two-line-text text-center">
              《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳
              <!--{{value}}-->
            </p>
          </a>
          <div class="news-info">
            <small class="update-time text-muted float-left">Last updated 3 min ago</small>
            <small class="view-count float-right"><span class="fa fa-eye"></span>200</small>
          </div>
        </div>
        <div class="news-box">
          <a class="news-img-ref" href="#" target="_blank" >
            <img class="news-img" src="~/assets/img/2.jpg" alt="news img">
          </a>
          <a class="news-title-ref" href="#" target="_blank">
            <p class="news-title two-line-text text-center">
              《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳
              <!--{{value}}-->
            </p>
          </a>
          <div class="news-info">
            <small class="update-time text-muted float-left">Last updated 3 min ago</small>
            <small class="view-count float-right"><span class="fa fa-eye"></span>200</small>
          </div>
        </div>
        <div class="news-box">
          <a class="news-img-ref" href="#" target="_blank" >
            <img class="news-img" src="~/assets/img/2.jpg" alt="news img">
          </a>
          <a class="news-title-ref" href="#" target="_blank">
            <p class="news-title two-line-text text-center">
              《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳
              <!--{{value}}-->
            </p>
          </a>
          <div class="news-info">
            <small class="update-time text-muted float-left">Last updated 3 min ago</small>
            <small class="view-count float-right"><span class="fa fa-eye"></span>200</small>
          </div>
        </div>
        <div class="news-box">
          <a class="news-img-ref" href="#" target="_blank" >
            <img class="news-img" src="~/assets/img/2.jpg" alt="news img">
          </a>
          <a class="news-title-ref" href="#" target="_blank">
            <p class="news-title two-line-text text-center">
              《动物世界》举行发布会，李易峰骑摩托炫酷登场，与粉丝玩猜拳
              <!--{{value}}-->
            </p>
          </a>
          <div class="news-info">
            <small class="update-time text-muted float-left">Last updated 3 min ago</small>
            <small class="view-count float-right"><span class="fa fa-eye"></span>200</small>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    head: {
      'title': '热点资讯',
    }
  }
</script>

<style>
  .container {
    margin-top: 60px;
  }
  .news-box-container {
    text-align: center;
  }
  .news-box {
    display: inline-block;
    width: 300px;
    height: 240px;
    margin: 20px;
    padding: 0;
    overflow: hidden;
    border-radius: 5px;
    background-color: #eeeeee;
    color: #2E294E;
  }
  .news-img {
    width: 300px;
    height: 70%;
  }
  .news-title {
    width: 100%;
    height: fit-content;
    margin: 0;
    color: #2E294E;
  }
  .news-info {
    width: 100%;
    height: fit-content;
    vertical-align: bottom;
    padding: 0px 10px 10px 10px;
  }
  span.fa{
    line-height: 3px;
    margin: 0px 3px 0px 3px;
  }
</style>
