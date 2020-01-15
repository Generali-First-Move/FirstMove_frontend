<template>
    <div id="result" class="offset">
        <br>
        <div class="sliderBackground2"></div>

            <div class="row">
            <div class="col-md-5">
                <h1>Deine Präferenzen</h1>
                <h3>Hier hast du die Möglichkeit die a für <br><h1><span>{{dist_safety}}</span></h1>anzupassen</h3>
                <!--<h1>Ihre Auswahl:</h1>-->
           </div>
                <h3 id="prefernce">Persönliche Preferenzen:</h3>
                <form action="/change" id="filter">
                    <button id="btn-filter" type="button" class="btn btn-primary px-3"><i class="fas fa-filter" aria-hidden="true"></i>Filter
                    </button>

                </form>
            </div>
        <div class="form-group google" id="app">
            <div v-show="!isLoading">
                <google ref="mapRef" :gmarkers="gmarkers" :center="center" :radius="radius" :zoom="zoom"/>
            </div>
        </div>

    </div>

</template>

<!--Load the API from the specified URL
* The async attribute allows the browser to render the page while the API loads
* The key parameter will contain your own API key (which is not needed for this tutorial)
* The callback parameter executes the initMap() function
-->


<!--
<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'
export default {
    props: {
        mapConfig: Object,
        apiKey: String,
    },
    data() {
        return {
            google: null,
            map: null
        }
    },
    async mounted() {
        const googleMapApi = await GoogleMapsApiLoader({
            apiKey: this.apiKey
        })
        this.google = googleMapApi
        this.initializeMap()
    },
    methods: {
        initializeMap() {
            const mapContainer = this.$refs.googleMap
            this.map = new this.google.maps.Map(
                mapContainer, this.mapConfig
            )
        }
    }
}
</script>
-->
<script language="JavaScript">
    //import * as VueGoogleMaps from 'vue2-google-maps';
    //var lat = document.getElementById("lat"); //this will select the input with  id = lat
    //var lng = document.getElementById("lng"); // this will select the input with id = lng
    //import axios from 'axios'
    import GoogleMap from '../components/GoogleMap.vue'
    import axios from "axios";
    export default {
        "name":"GoogleMap",
        data: function () {
            return {
                id: '',
                name: '',
                zoom: 17,
                center: {lat: 50.7753455, lng: 6.0838868} ,
                map: undefined,
                prop:'',
                gmarkers:[],
                radius:0,
                isLoading: false,
                dist_safety: null,
            }
        },
        components: {
            'google': GoogleMap
        },
        methods:
            {
                init() {
                    // eslint-disable-next-line no-console
                    console.log(this.dist_safety);
                    if(this.dist_safety == 5) {
                        this.addMarker(1,50.7663455, 6.0838868, "67FF7B", 1500);
                    }
                    if(this.dist_safety == 4) {
                        this.addMarker(1,50.7553455, 6.0838868, "67FF7B", 1500);
                    }
                    if(this.dist_safety == 3) {
                        this.addMarker(1,50.7443455, 6.0838868, "67FF7B", 1500);
                    }
                    if(this.dist_safety == 2) {
                        this.addMarker(1,50.7353455, 6.0838868, "67FF7B", 1500);
                    }
                    if(this.dist_safety == 1) {
                        this.addMarker(1,50.7223455, 6.0838868, "67FF7B", 1500);
                    }
                    //this.addMarker(2,50.774720, 6.015920, "00FF22",3000);
                    //this.addMarker(3,50.774720, 5.905920, "5BF303",1500);
                    //this.updateCenter(23,11);
                    this.updateCircle("radius",200);
                },
                addMarker(id, lat, lng, fillColor, radius) {
                    this.gmarkers.push({
                        id: id,
                        name: "City1",
                        content: "Der Aachener Dom, auch Hoher Dom zu Aachen, Aachener Münster oder Aachener Marienkirche, ist die Bischofskirche des Bistums Aachen und das bedeutendste Wahrzeichen der Stadt Aachen",
                        content1: "Hier steht ein Text zu  Angeboten und Informationslinks",
                        content2: "Radwandern\n" +
                            "\n" +
                            "Erradeln Sie Aachen und sein Umland auf vielen schönen Nebenstraßen - z.B. nach den folgenden Routenvorschlägen ",
                        position: {
                            lat: lat,
                            lng: lng,
                        },
                        icon: {
                            url: "https://i.ibb.co/Gtx9pyv/home.png",
                            scaledSize: {width: 48, height: 55},
                            labelOrigin: {x: 16, y: -10}
                        },
                        img: require("../images/aachendom.jpeg"),
                        radius: radius,
                        fillOpacity: "0.5",

                        fillColor: "#"+fillColor,
                    });

                    return this.gmarkers;
                },
                updateCenter(lat,lng) {
                    this.center = {
                        lat: lat,
                        lng: lng
                    };
                },
                updateCircle(prop, value) {
                    if (prop === 'radius') {
                        // console.log("radius");
                        this.radius=value;
                        // eslint-disable-next-line no-console
                        console.log(this.radius);
                    } else if (prop === 'bounds') {
                        this.circleBounds = value;
                    }
                },
            },
        mounted: function () {

            axios
                .get('api/user/pref')
                .then(response => {
                    this.dist_safety = response.data;
                    this.init();
                })
                .catch(e => alert(e));

        }
    };
</script>
<style>

    .sliderBackground2{
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
        background-image: url("../assets/blattö.jpg");
        background-color: rgba(0,0,0,0.4);
        background-blend-mode: darken;
        background-repeat: no-repeat;
    }


    .fas {
        color: dodgerblue;
    }
    .vue-map-container {
        height: 700px;
        text-align: left;
        margin-bottom: 50px;
        right: 15px;
        width: auto;
    }
    #filter {
        position: relative;
        left: 1432px;
        bottom: 38px;
    }
    #btn-filter {
        width: 100px;
    }
    .google {
        text-align: left;
        margin-left: 10px;
        margin-top: 55px;
        width: auto;
        height: 730px;
    }
    #result {
        background-color: #ffffff;
        height: auto;
        color: white;
        padding-left: 15px;
        margin-top: 5px;
    }
    #result fieldset {
        background-color: white;
        border-radius: 4px;
        color: black;
        width: 250px;
    }
    #result .Pro {
        color: green;
        text-decoration: underline;
        text-decoration-color: black;
    }
    #result .Contra {
        color: red;
        text-decoration: underline;
        text-decoration-color: black;
    }
    #footer p {
        color: black;
    }
    #result h3 {
        font-variant: small-caps;
    }
    #prefernce {
        font-variant: small-caps;
        position: relative;
        right: 40px;
        top: 5px;
        left: 1190px;
        color: black;
    }
    #result h5 {
        color: black;
    }
    #result h6 {
        top: 200px;
    }
    #result h1 {
        text-align: left;
        font-size: 2.5vw;
        color: white;
        font-variant-caps: inherit;
    }
    #result h3 {
    }
    #link p {
        color: black;
    }
    .col-md-3 {
        right: 10px;
        text-align: left;
        bottom: 10px;
    }
    .col-md-5 {
        text-align: center;
        top: 105px;
    }
    .col-md-9 {
        text-align: left;
        max-width: 100%;
    }
    #result row {
        text-align: center;
        padding-top: 102px;
    }
    * {
        box-sizing: border-box;
    }
    img {
        max-width: 100%;
    }
    .details-wrapper {
        width: 75vw;
        margin: 0 auto;
        background-color: #BFBFBF;
        box-shadow: 0 -1px 1px 5px #BFBFBF;
    }
    details {
        padding: .5rem;
        font: 1.25rem/1.2 sans-serif;
    }
    #City1 {
        padding: .25rem 1rem;
        background-color: limegreen;
        font: bold 1.25rem/2 sans-serif;
        color: floralwhite;
        border: none;
        border-radius: 4px;
        box-shadow: 0 -1px 1px 1px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        list-style: none; /* Triangle not shown */
    }
    #City2 {
        padding: .25rem 1rem;
        background-color: #88ff00;
        font: bold 1.25rem/2 sans-serif;
        color: floralwhite;
        border: none;
        border-radius: 4px;
        box-shadow: 0 -1px 1px 1px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        list-style: none; /* Triangle not shown */
    }
    #City3 {
        padding: .25rem 1rem;
        background-color: #edff21;
        font: bold 1.25rem/2 sans-serif;
        color: floralwhite;
        border: none;
        border-radius: 4px;
        box-shadow: 0 -1px 1px 1px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        list-style: none; /* Triangle not shown */
    }
    #box_green {
        background-color: rgba(136, 243, 147, 1);
        opacity: 0.8;
    }
    #box_red {
        background: #edff21;
        opacity: 0.75;
    }
    #box_orange {
        background: #88ff00;
        opacity: 0.85;
        height: auto;
    }
    /* Triangle not shown - Style for Webkit-Browser */
    summary::-webkit-details-marker {
        display: none;
    }
    summary::before {
        padding-right: .25rem;
        content: '+ '; /* Instead of Triangle closed */
    }
    details[open] summary::before {
        padding-right: .25rem;
        font-style: italic;
        content: '- '; /* Instead of Triangle open */
    }
    /* Styling the summary in case of open 'details' */
    details[open] summary {
        background-color: orange;
        font-style: italic;
        border-radius: 3px 3px 0 0;
    }
    .details-content {
        margin: 0;
        padding: .25rem 1rem;
        background-color: floralwhite;
        border-radius: 0 0 3px 3px;
        box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.5);
        color: red;
    }
    .map-container {
        color: black;
        width: auto;
        height: 500px;
    }
    .InfoWindow {
        position: relative;
        width: auto;
        height: auto;
    }
    .backgroundimg {
        background-image: url("../assets/yingchou-han-IJrIeCs3D4g-unsplash.jpeg");
        width: 100%;
        height: 10%;
        background-size: cover;
        background-blend-mode: darken;
        background-position: center center;
    }
    .bild {
        position: relative;
    }
    .pic {
        width: auto;
        height: auto;
    }
    #backgroundimage {
        height: auto;
        left: 0;
        margin: 0;
        min-height: 203%;
        min-width: auto;
        top: 0;
        z-index: -1;
    }
    gmap-infowindow {
        position: relative;
        width: auto;
        height: auto;
    }
    .InfoWindowframe {
        position: relative;
        width: 650px;
        height: auto;
    }
    .map-container-6 {
        overflow: hidden;
        padding-bottom: 56.25%;
        position: relative;
        height: 0;
    }
    .map-container-6 iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }


</style>