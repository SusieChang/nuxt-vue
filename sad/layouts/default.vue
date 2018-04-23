<template>
  <div>
    <b-header>
      <topnav/>
      <!--end of navbar-->
    </b-header>>
    <div>
      <nuxt/>
    </div>
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
</style>
