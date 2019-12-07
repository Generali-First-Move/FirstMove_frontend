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
        <form class="sliderFront">
            <div class="form-group">
                <div class="showContent">
                    <h3>Gute Busanbindung</h3>
                    <span class="valShow">{{ value0 }}</span>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value0" :max="max" :min="min"></vue-slider>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Nähe Bahnhof</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value1" :max="max" :min="min"></vue-slider>
                    <h4>{{ value1 }}</h4>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Einkaufsmöglichkeiten</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value2" :max="max" :min="min"></vue-slider>
                    <h4>{{ value2 }}</h4>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Essensmöglichkeiten</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value3" :max="max" :min="min"></vue-slider>
                    <h4>{{ value3 }}</h4>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Ruhe/Atmosphäre</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value4" :max="max" :min="min"></vue-slider>
                    <h4>{{ value4 }}</h4>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Sicherheit</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value5" :max="max" :min="min"></vue-slider>
                    <h4>{{ value5 }}</h4>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Uni Nähe</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value6" :max="max" :min="min"></vue-slider>
                    <h4>{{ value6 }}</h4>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Innenstadt</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value7" :max="max" :min="min"></vue-slider>
                    <h4>{{ value7 }}</h4>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Freizeit</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value8" :max="max" :min="min"></vue-slider>
                    <h4>{{ value8 }}</h4>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Sportaktivitäten</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value9" :max="max" :min="min"></vue-slider>
                    <h4>{{ value9 }}</h4>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Fitnessstudio</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value10" :max="max" :min="min"></vue-slider>
                    <h4>{{ value10 }}</h4>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Schwimmbäder</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value11" :max="max" :min="min"></vue-slider>
                    <h4>{{ value11 }}</h4>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Kletterhalle</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value12" :max="max" :min="min"></vue-slider>
                    <h4>{{ value12 }}</h4>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Fußball</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value13" :max="max" :min="min"></vue-slider>
                    <h4>{{ value14}}</h4>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Nightlife</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value14" :max="max" :min="min"></vue-slider>
                    <h4>{{ value15 }}</h4>
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="showContent">
                <h3>Park</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value15" :max="max" :min="min"></vue-slider>
                    <h4>{{ value16 }}</h4>
                </div>
                </div>
            </div>

            <div id="buttonshow">
                <router-link to="/result" class="nav-link"><button type="button" name="action" class="btn btn-secondary btn-lg">Abschicken</button></router-link>
            </div>
        </form>


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
                max:10,

                value0: 1,
                value1: 1,
                value2: 1,
                value3: 1,
                value4: 1,
                value5: 1,
                value6: 1,
                value7: 1,
                value8: 1,
                value9: 1,
                value10: 1,
                value11: 1,
                value12: 1,
                value13: 1,
                value14: 1,
                value15: 1,

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
        top: 20%;
        z-index: 1;
        color: #ffffff;
        text-transform: uppercase;
        background-size: cover;
        margin-bottom: 100px;
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
    }

    .sliderFront{
        position: relative;
        top: 80%;
        margin-top: 350px;
    }



#buttonshow{
    right: 50%;
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
        right: 50%;
        bottom:10px;
        width: 100%;
        text-align: center;
    }

    .vue h4{
        left: 10%;
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

    .form-group{
        border: 3px solid #ffffff;
        border-radius: 10px;
        padding: .6vw 1.3vw;
        width: 50%;
        margin-left: 25%;
        background-color: rgba(0, 0, 0, 0.6) !important;
    }

    @media screen and (max-width: 60em){
        .form-group h3{
            color: white;
            font-size: 1.1em;
            text-align: center;
        }
    }

    .showContent{
        text-align: center;
    }

    .valShow{
        color: white;
        border: solid 1px white;
        padding: 5px;
    }



</style>
