import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/sprites/solid.svg'
import App from './App.vue'
import router from './router'

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

import Map from './components/map.vue';

import Slider from '@jeremyhamm/vue-slider'

Vue.component('VueSlider', VueSlider);
require("dotenv").config();

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

Vue.use(VueGoogleMaps, {
  load: { key: "AIzaSyD5UnUjfGRvPefBbTgLr-iy3CZ5BD99dBg",
    libraries: 'places', // This is required if you use the Autocomplete plugin
  }
});

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

Vue.use(Slider);
//Sidebar
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  // options here
});


