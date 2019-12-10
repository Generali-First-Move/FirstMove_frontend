import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/sprites/solid.svg'
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue'
import router from './router'

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'



import Slider from '@jeremyhamm/vue-slider'
import VueCircleSlider from 'vue-circle-slider'

Vue.use(VueCircleSlider);

Vue.component('VueSlider', VueSlider);
require("dotenv").config();

require('bootstrap');

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyD5UnUjfGRvPefBbTgLr-iy3CZ5BD99dBg",
        callback: "init",
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // Use new renderer
        useBetaRenderer: false,
    }, installComponents: true,
});


Vue.component('google-map',VueGoogleMaps);

//Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
    el: "#app",
    components: { App },
    template: "<App/>",
    router,
    render: h => h(App)
});
/*
new Vue(
    {
    router,
    render: h => h(App)
}).$mount('#app');
*/

Vue.use(Slider);
//Sidebar
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
    // options here
});


