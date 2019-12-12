<template>
    <div id="result" class="offset">
        <br>
        <div class="row">
            <div class="col-md-5">
                <h1>Ihre Auswahl:</h1>
                <h3 id="prefernce">Persönliche Preferenzen:</h3>
                <form action="/change" id="filter">
                    <button id="btn-filter" type="button" class="btn btn-primary px-3"><i class="fas fa-filter"
                                                                                          aria-hidden="true"></i>Filter
                    </button>

                </form>
            </div>
        </div>
        <div class="form-group google" id="app">
            <div v-show="!isLoading">
                <google ref="mapRef" :gmarkers="gmarkers" :center="center" :radius="radius" :zoom="zoom"/>
            </div>
        </div>
        <div class="col-md-3">

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
<script>
    //import * as VueGoogleMaps from 'vue2-google-maps';
    //var lat = document.getElementById("lat"); //this will select the input with  id = lat
    //var lng = document.getElementById("lng"); // this will select the input with id = lng
    //import axios from 'axios'
    import GoogleMap from '../components/GoogleMap.vue'
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
            }
        },
        computed:{
        },
        components: {
            'google': GoogleMap
        },
        methods:
            {
                init() {
                    //console.log("marker setzen");
                    this.addMarker(50.7753455, 6.0838868, 1);
                    this.addMarker(50.774720, 6.015920, 2);
                    //this.updateCenter(23,11);
                    this.updateCircle("radius",2000);
                },
                addMarker(lat, lng, id) {
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
                        radius: 2000,
                        fillOpacity: "0.5",

                        fillColor: "#00FF00",
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
            //console.log('Warte auf Post');
            // let self = this;
            //console.log(self.$refs); // Shows the mapRef object reference
            // console.log(self.$refs.mapRef); // returns undefined ???
            this.init();
            /*
            axios
                .post('http://localhost:8081/?search=f#/result')
                .then(response => {
                    this.id = response.data;
                    this.name = response.data;
                    this.center = response.data;
                    this.position = response.data;
                    this.zoom = response.data;
                    alert("Gmap Daten wurden erfolgreich übertragen!");
                })
                .catch(e => alert(e));
       */
        },
    };
</script>
<style>
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
        color: black;
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
    .blue.accent-1 {
        background-color: #82b1ff !important;
    }
    .form-header {
        padding: 1rem;
        margin-top: -3.13rem;
        margin-bottom: 3rem;
        color: #fff;
        text-align: center;
        border-radius: .125rem;
        -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
        box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
    }
    .Infobox {
        position: relative;
        top: 30px;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
    .card-body {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        border-radius: 0 !important;
    }
    .Content {
        position: relative;
        padding-top: 20px;
    }
    .gm-style-iw {
        width: auto !important;
        top: 0 !important;
        left: 0 !important;
        border-radius: 2px 2px 0 0;
    }
    .bonbon {
        width: 200px;
        height: 60px;
        background: yellow; /* old browsers */
        background: linear-gradient(to bottom, white, blue);
        box-shadow: inset 0px 0px 6px #fff, inset 0px -1px 6px #fff;
        border: 1px solid #5ea617;
        border-radius: 1em;
        margin: 1em;
    }
    .bonbon.rot {
        background: linear-gradient(to bottom, white, red);
    }
    .bonbon.orange {
        background: linear-gradient(to bottom, white, orange);
    }
    .bonbon:hover,
    .bonbon:focus {
        box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px, inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    }
</style>