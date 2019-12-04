<template>
    <div id="show" class="offset">
        <div class="landingShow">
            <div class="show-wrap">
                <div class="show-inner">
                </div>
            </div>
        </div>
        <div class="caption-show text-center">
            <h1>Deine Präferenzen</h1>
            <h3>Hier hast du die Möglichkeit die Präferenzen für <br><h1><span>{{city}}</span></h1>anzupassen</h3>
        </div>
        <div class="sliderBackground"></div>
        <form class="sliderFront" @submit="getFullUser()" action="#/result">
             <div class="form-group">
                <h3>Nähe Bahnhof</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="train" :max="max" :min="min"></vue-slider>
                    <h4>{{ train }}</h4>
                </div>
            </div>
            <div class="form-group">
                <h3>Gute Busanbindung</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="bus" :max="max" :min="min"></vue-slider>
                    <h4>{{ bus }}</h4>
                </div>
            </div>
            <div class="form-group">
                <h3>Nähe zur Uni</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="uni" :max="max" :min="min"></vue-slider>
                    <h4>{{ uni }}</h4>
                </div>
            </div>
            <div class="form-group">
                <h3>Einkaufsmöglichkeiten</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="shopping" :max="max" :min="min"></vue-slider>
                    <h4>{{ shopping }}</h4>
                </div>
            </div>
            <div class="form-group">
                <h3>Parknähe</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="park" :max="max" :min="min"></vue-slider>
                    <h4>{{ park }}</h4>
                </div>
            </div>
            <div class="form-group">
                <h3>Sportaktivitäten</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="sport" :max="max" :min="min"></vue-slider>
                    <h4>{{ sport }}</h4>
                </div>
            </div>
            <div class="form-group">
                <h3>Schwimmanlagen</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="swim" :max="max" :min="min"></vue-slider>
                    <h4>{{ swim }}</h4>
                </div>
            </div>
            <div class="form-group">
                <h3>Innenstadt</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="center" :max="max" :min="min"></vue-slider>
                    <h4>{{ center }}</h4>
                </div>
            </div>
            <div class="form-group">
                <h3>Nightlife</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="night" :max="max" :min="min"></vue-slider>
                    <h4>{{ night }}</h4>
                </div>
            </div>
            <div class="form-group">
                <h3>Sicherheit</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="safety" :max="max" :min="min"></vue-slider>
                    <h4>{{ safety }}</h4>
                </div>
            </div>
        <div>
            <!--<router-link to="/result" class="nav-link"><button type="submit" name="action" class="btn btn-secondary btn-lg">Abschicken</button></router-link>-->
            <button @click="getFullUser" type="submit" class="btn btn-outline-dark btn-lg">Abschicken</button>
        </div>
        </form>
    </div>
</template>
<script language="JavaScript">

    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'
    import axios from 'axios'


    export default {
        components: {VueSlider},

        data(){
            return {

                city: "",
                min: 1,
                max: 10,
                train: 1,
                bus: 1,
                uni: 1,
                shopping: 1,
                park: 1,
                sport: 1,
                swim: 1,
                center: 1,
                night: 1,
                safety: 1,
            }
        },
        methods: {
            getFullUser: function(){
                axios
                    .post('api/user/pref', {
                        city: this.city,
                        dist_train_station: this.train,
                        dist_bus_station: this.bus,
                        dist_uni: this.uni,
                        dist_shopping: this.shopping,
                        dist_park: this.park,
                        dist_sport: this.sport,
                        dist_swimming: this.swim,
                        dist_center: this.center,
                        dist_nightlife: this.night,
                        dist_safety: this.safety
                    })
                    .then(function () {
                        alert("Added all prefs");
                    })
                    .catch(e => alert(e));
            }
        },
        mounted() {
            axios
                .get('api/user')
                .then(response => {
                    this.city = response.data;
                })
                .catch(e => alert(e));
        },
    }
</script>

<style>

    .caption-show{
        width: 100%;
        top: 20%;
        z-index: 1;
        color: #ffffff;
        text-transform: uppercase;
        background-size: cover;
        margin-bottom: 100px;
        position: absolute;

    }

    .caption-show h1{
        font-size: 3.8rem;
        font-weight: 700;
        letter-spacing: .3rem;
        text-shadow: .1rem .1rem .8rem black;
        padding-bottom: .1rem;
    }

    .caption-show h3{
        font-size: 2rem;
        text-shadow: .1rem .1rem .5rem black;
        padding-bottom: 1.6rem;
    }

    .sliderFront{
        position: relative;
        top: 80%;
        margin-top: 350px;
    }



#buttonshow{
    margin-left: 43%;
}






    /*--- Extra Bootstrap Column Padding --*/
    [class*="col-"] {
        padding: 1rem;
    }

    /*--- Bootstrap Mobile Gutter Fix --*/
    .row, .container-fluid {
        margin-left: 0px!important;
        margin-right: 0px!important;
    }


    /*--- Fixed Landing Page Section --*/
    .landingShow {
        width: 100%;
        height: 10vh;
        display: table;
        z-index: -1;
    }
    .show-wrap {
        clip: rect(0, auto, auto, 0);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 60%;
    }

    .sliderBackground{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        will-change: transform;
        background-image: url("../assets/mihai-lazar-8TDltliWdJY-unsplash.jpg");
        background-color: rgba(0,0,0,0.4);
        background-blend-mode: darken;
        background-repeat: no-repeat

    }





    .vue {
        padding-left:15px;
        margin: 10px;
        bottom:10px;
        width: 100%;
        text-align: center;
    }
    .vue h4
    {
        margin-left: 39px;
    }
    #custom-handle {
        width: 2em;
        height: 1.6em;
        top: 50%;
        margin-top: -.8em;
        text-align: center;
        line-height: 1.6em;
    }



    .col-md-10
    {
        margin-left:160px;

    }

    .col-form-label
    {
        bottom:0px;

    }

    .col-sm-2
    {
        top:0px;
    }

    #show
    {
        background-color: #b3b3b3;

    }

    #show textarea{
        border: 1px solid #C5281C;
        border-radius: 6px;
    }

    #box
    {
        border: 1px solid white;
        text-align: left;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 20px;
        color: white;
        background-color: #b3b3b3;

    }

    #box label
    {
        font-variant: small-caps;
    }

    #box input
    {
        border: 1px solid #C5281C;
    }

    #rating
    {
        padding-right: 350px;
        padding-left: 15px;
    }

    #box h5
    {
        font-weight: bold;
        color: white;
    }

    #show h4
    {
        color: white;
        padding-left: 80px;
        padding-right: 80px;
    }

    #box button
    {
        background-color: white;
        color: black;
        border-color: white;
    }

    #link p
    {
        color: white;
    }


    .slider
    {
        -webkit-appearance: none;
        width: 40%;
        top:5px;
        left:15px;
        height: 25px;
        background: white;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    .slider:hover
    {
        opacity: 1;
    }

    .slider::-webkit-slider-thumb
    {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        background: #000000;
        cursor: pointer;
    }

    .slider::-moz-range-thumb
    {
        width: 25px;
        height: 25px;
        background: #000000;
        cursor: pointer;
    }

    .form-group{
        border: 3px solid black;
        border-radius: 10px;
        padding: .6rem 1.3rem;
        font-size: 1.1rem;
        width: 50%;
        margin-left: 25%;
        text-align: center;
        background-color: rgba(100, 100, 100, 0.7) !important;

    }

    .form-group h3{
        color: white;
    }
</style>
