<template>
    <div id="show" class="offset">
        <div class="landingShow">
            <div class="show-wrap">
                <div class="show-inner">
                </div>
            </div>
        </div>
        <div class="row">
        <div class="caption-show text-center">
        <h1>Deine Präferenzen</h1>
        <h3>Hier hast du die Möglichkeit die Präferenzen für <br><h1><span>{{city}}</span></h1>anzupassen</h3></div>
    </div>
        <div class="sliderBackground"></div>
        <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
        <form class="sliderFront">
            <div class="form-group">
                <div class="showContent">
                    <h3>Nähe Bahnhof</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="value0" :max="max" :min="min"></vue-slider>
                        <h4>{{ value0 }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Gute Busanbindung</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="value1" :max="max" :min="min"></vue-slider>
                        <h4>{{ value1 }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Uni Nähe</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="value2" :max="max" :min="min"></vue-slider>
                        <h4>{{ value2 }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Einkaufsmöglichkeiten</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="value3" :max="max" :min="min"></vue-slider>
                        <h4>{{ value3 }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Park Nähe</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="value4" :max="max" :min="min"></vue-slider>
                        <h4>{{ value4 }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Sportanlagen</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="value5" :max="max" :min="min"></vue-slider>
                        <h4>{{ value5 }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Schwimmbad Nähe</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="value6" :max="max" :min="min"></vue-slider>
                        <h4>{{ value6 }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Innenstadt Nähe</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="value7" :max="max" :min="min"></vue-slider>
                        <h4>{{ value7 }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Nachtleben</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="value8" :max="max" :min="min"></vue-slider>
                        <h4>{{ value8 }}</h4>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                    <h3>Sicherheit</h3>
                    <div class="vue">
                        <!-- default props -->
                        <vue-slider ref="slider" v-model="value9" :max="max" :min="min"></vue-slider>
                        <h4>{{ value9 }}</h4>
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-10">
               <router-link to="/result" class="nav-link"><button type="button" name="action" class="btn btn-outline-light btn-lg" data-target="#navbarResponsive" id="buttonshow">Zu deiner Wohngegend</button></router-link>
                </div>
                <div class="col-1"></div>
            </div>
        </form>
        </div>

        </div>
    </div>
</template>



<script>
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'
    import axios from 'axios'
    export default
    {
        components: {VueSlider},
        data ()
        {
            return{
                city: "",
                min:1,
                max:5,
                value0: 3,
                value1: 3,
                value2: 3,
                value3: 3,
                value4: 3,
                value5: 3,
                value6: 3,
                value7: 3,
                value8: 3,
                value9: 3,
            }
        },
        mounted() {
            axios
                .get('api/user')
                .then(response =>{
                    this.city = response.data;
                })
                .catch(e => alert(e));
        }
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

    }
    #buttonshow{
        z-index: +100;
        padding: 20px 50px;
        border-radius: 15px;
        font-size: 1.5vw;
        background-color: rgba(111, 111, 111, 0.5) !important;
        position: center;
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
        background-repeat: no-repeat
    }
    .vue {
margin-left: 10px;
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
        position: center;
        background-color: rgba(0, 0, 0, 0.6) !important;
        color: white;
        margin-top: 5px;
    }
    @media screen and (max-width: 60em){
        .form-group h3{
            color: white;
            font-size: 1.1em;
            text-align: center;

        }
    }

.vue h4{
    margin-top: 10px;
}


    .showContent{
        text-align: center;
    }
    .showContent .vue-slider{
        margin-right: 3%;
    }

    .valShow{
        color: white;
        border: solid 1px white;
        padding: 5px;
    }

    .offset .col-11{
        padding: 0px;
    }
</style>