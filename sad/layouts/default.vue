<template>
  <div>
    <div class="header">
      <topnav/>
      <!--end of navbar-->
    </div>

      <nuxt/>

    <div class="footer">
      <bottomfooter/>
    </div>
  </div>
</template>

<script>
  import topnav from '~/components/topnav.vue'
  import bottomfooter from '~/components/bottomfooter.vue'

  export default {
    components: {
      topnav,
      bottomfooter
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
