<template>
  <div id="app" >
    <header>
        <Firstmove/>
    </header>
    <body style="padding-top: auto">
        <router-view/>
    </body>
    <footer>
        <Firstmovefooter/>
    </footer>
  </div>
</template>


<script>

  import Firstmove from '@/components/Firstmove.vue';
  import Firstmovefooter from "./components/Firstmovefooter";

  export default {
    components:{
      Firstmovefooter,
      Firstmove,
    }
  }

</script>


<style>

</style>
