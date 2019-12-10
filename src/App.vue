<template>
    <div id="app">
        <header>
            <Firstmove/>
        </header>
        <body>
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
        name:"App",
        components: {
            'Firstmovefooter':Firstmovefooter,
            'Firstmove':Firstmove,

        }
    }

</script>


<style>

</style>
