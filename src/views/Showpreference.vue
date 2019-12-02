<template>
    <div id="show" class="offset" style="padding-top: 150px">
        <div class="col-12 narrow text-center">
            <h1>Deine Präferenzen</h1>
            <h3 class="lead">
                Hier kannst du deine Präferenzen für <span><b>{{city}}</b></span> hinzufügen und anpassen
            </h3>
        </div>

        <form>
            <div class="form-group">
                <h3>Gute Busanbindung</h3>
                <div class="vue">
                <!-- default props -->
                    <vue-slider ref="slider" v-model="value0" :max="max" :min="min"></vue-slider>
                    <h4>{{ value0 }}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Nähe Bahnhof</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value1" :max="max" :min="min"></vue-slider>
                    <h4>{{ value1 }}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Einkaufsmöglichkeiten</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value2" :max="max" :min="min"></vue-slider>
                    <h4>{{ value2 }}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Essensmöglichkeiten</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value3" :max="max" :min="min"></vue-slider>
                    <h4>{{ value3 }}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Ruhe/Atmosphäre</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value4" :max="max" :min="min"></vue-slider>
                    <h4>{{ value4 }}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Sicherheit</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value5" :max="max" :min="min"></vue-slider>
                    <h4>{{ value5 }}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Uni Nähe</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value6" :max="max" :min="min"></vue-slider>
                    <h4>{{ value6 }}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Innenstadt</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value7" :max="max" :min="min"></vue-slider>
                    <h4>{{ value7 }}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Freizeit</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value8" :max="max" :min="min"></vue-slider>
                    <h4>{{ value8 }}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Sportaktivitäten</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value9" :max="max" :min="min"></vue-slider>
                    <h4>{{ value9 }}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Fitnessstudio</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value10" :max="max" :min="min"></vue-slider>
                    <h4>{{ value10 }}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Schwimmbäder</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value11" :max="max" :min="min"></vue-slider>
                    <h4>{{ value11 }}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Kletterhalle</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value12" :max="max" :min="min"></vue-slider>
                    <h4>{{ value12 }}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Fußball</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value13" :max="max" :min="min"></vue-slider>
                    <h4>{{ value14}}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Nightlife</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value14" :max="max" :min="min"></vue-slider>
                    <h4>{{ value15 }}</h4>
                </div>
            </div>

            <div class="form-group">
                <h3>Park</h3>
                <div class="vue">
                    <!-- default props -->
                    <vue-slider ref="slider" v-model="value15" :max="max" :min="min"></vue-slider>
                    <h4>{{ value16 }}</h4>
                </div>
            </div>

        <div>
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
        border: 3px solid #80081e;
        border-radius: 10px;
        padding: .6rem 1.3rem;
        font-size: 1.1rem;
        width: 50%;
        margin-left: 25%;
        text-align: center;

    }
</style>