<template>
  <div>
    <div class="header">
      <top-nav/>
      <!--end of navbar-->
    </div>

      <nuxt/>

    <div class="footer">
      <bottom-footer/>
    </div>
  </div>
</template>

<script>
  import TopNav from '~/components/TopNav.vue'
  import BottomFooter from '~/components/BottomFooter.vue'

  export default {
    components: {
      TopNav,
      BottomFooter
    },
  }
</script>

<style>
  html, body{
    background-color: #D499B9;
    margin: 0;
    padding: 0;
  }
</style>
