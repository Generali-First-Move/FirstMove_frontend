<template>
    <div id="show" class="offset">
        <div class="landingShow">
            <div class="show-wrap">
                <div class="show-inner">
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="caption-show text-center">
                <h1>Deine Präferenzen</h1>
                <h3>Hier hast du die Möglichkeit die Präferenzen für <br><h1><span>{{city}}</span></h1>anzupassen</h3>
            </div>
        </div>

        <div class="sliderBackground"></div>
    <div class="row" id="front">
        <div class="col">
            <form class="sliderFront"  @submit="getFullUser()" action="#/result">
            <div class="form-group">
                <div class="showContent">
                    <h3>Nähe Bahnhof</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="train" :max="max" :min="min"></vue-slider>
                        <h4>{{ train }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Gute Busanbindung</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="bus" :max="max" :min="min"></vue-slider>
                        <h4>{{ bus }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Uni Nähe</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="uni" :max="max" :min="min"></vue-slider>
                        <h4>{{ uni }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Einkaufsmöglichkeiten</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="shopping" :max="max" :min="min"></vue-slider>
                        <h4>{{ shopping }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Park Nähe</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="park" :max="max" :min="min"></vue-slider>
                        <h4>{{ park }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Sportanlagen</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="sport" :max="max" :min="min"></vue-slider>
                        <h4>{{ sport }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Innenstadt Nähe</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="center" :max="max" :min="min"></vue-slider>
                        <h4>{{ center }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Nachtleben</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="night" :max="max" :min="min"></vue-slider>
                        <h4>{{ night }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Sicherheit</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="safety" :max="max" :min="min"></vue-slider>
                        <h4>{{ safety }}</h4>
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
            <div class="row">
            <div class="col text-center">
               <!-- <router-link to="/result" class="nav-link"><button type="button" name="action" class="btn btn-outline-light btn-lg" data-target="#navbarResponsive" id="buttonshow">Zu deiner Wohngegend</button></router-link>-->
                    <button to="/result" @click="getFullUser" type="submit" class="btn btn-outline-light btn-lg" data-target="#navbarResponsive" id="buttonshow">Zu deiner Wohngegend</button>
            </div>
                <div class="col-1"></div>
            </div>
        </form>
        </div>

        </div>
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
        top: 30%;
        z-index: 1;
        color: #ffffff;
        text-transform: uppercase;
        background-size: cover;
        position: absolute;
    }
    .caption-show h1{
        font-size: 3.8vw;
        font-weight: 700;
        letter-spacing: .3vw;
        text-shadow: .1vw .1vw .8vw black;
        padding-bottom: .1vw;
    }
    .caption-show h3{
        font-size: 2vw;
        text-shadow: .1vw .1vw .5vw black;
        padding-bottom: 1vw;
        color: white;
    }
    .sliderFront{
        margin-left: 0px;
        margin-top: 250px;
        z-index: +100;
    }
    #buttonshow{
        z-index: +100;
        padding: 20px 50px;
        border-radius: 15px;
        font-size: 1.4vw;
        background-color: rgba(111, 111, 111, 0.5) !important;
        margin-left: 10%;
    }

    #buttonshow:hover{
        background-color: white;
        color: black;
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
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    .vue {

        margin-right: 10px;
        right: 50%;
        bottom:10px;
        width: 100%;
        text-align: center;
        margin-top: 50px;
    }
    .vue h4{
        text-align: center;
        padding-left: 0px;
        z-index: +10;
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
        right:15px;
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


    /* process style */

    .vue .vue-slider-process {
        background-color: maroon;
        border-radius: 15px;
    }
    .vue .vue-slider{
        margin-left: 10%;
        margin-right: 10%;
    }

    .vue-slider:hover .vue-slider-process {
        background-color: #c5281c;
    }

    .vue .vue-slider-dot-handle{
        border-color: maroon;
        padding: 8px 8px;
        margin-top: -3px;

    }
    .vue .vue-slider:hover .vue-slider-dot-handle {
        border-color: #c5281c;
    }

    .vue .vue-slider-dot-tooltip-inner {
        font-size: 14px;
        white-space: nowrap;
        padding: 6px 8px;
        color: #fff;
        border-radius: 5px;
        border-color: #c5281c;
        background-color: #c5281c !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5) !important;
        transform: scale(0.9);
        transition: transform 0.3s;
        margin-left: 5px;
    }

    .form-group{
        border: 3px solid #ffffff;
        border-radius: 10px;
        padding: .6vw 1.3vw;
        background-color: rgba(0, 0, 0, 0.6) !important;
        color: white;
        margin-left: 25%;
        width: 50%;
        z-index: +100;
        margin-top: 50px;
    }
    @media screen and (max-width: 60em){
        .form-group h3{
            color: white;
            font-size: 1.1em;
            text-align: center;
            z-index: +100;
        }
    }

.vue h4{
    margin-top: 10px;
}


    .showContent{
        text-align: center;
        z-index: +100;
    }
    .showContent .vue-slider{

    }

    .valShow{
        color: white;
        border: solid 1px white;
        padding: 5px;
    }

    .offset .col-11{
        padding: 0px;
    }

    #front{
        margin-top: 10%;
    }
</style>