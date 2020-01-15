<template>
    <div>
        <gmap-map id="map" v-bind="options" :center="center" ref="map">

            <gmap-info-window
                    :options="infoOptions"
                    :position=" infoPosition"
                    :opened="infoWinOpen"
                    @closeclick="infoWinOpen=false">

                <div class="InfoWindowframe">
                    <section class="section pb-5">

                        <!--Section heading-->
                        <h2 class="section-heading h1 pt-4">Willkommen zum Stadtteil: </h2>

                        <div class="Infobox">
                            <!--Grid column-->
                            <div class="col-lg-9 mb-4">

                                <!--Form with header-->
                                <div class="card">
                                    <div class="form-header blue accent-1">
                                        <h3><em class="fas fa-map-marker-alt"></em> {{name}}</h3>
                                    </div>

                                    <div class="card-body">
                                        <div class="pic">
                                            <img id="backgroundimage" :src="imgfile" border="0" alt="">
                                        </div>
                                        <br>
                                        <br>
                                        <div class="description">
                                            <div class="html" v-html="infoContent"></div>

                                        </div>

                                    </div>
                                </div>
                                <!--Grid column-->
                            </div>
                        </div>

                    </section>
                </div>
                <button class="bonbon" v-on:click="closeInfoWindow()">Close</button>

            </gmap-info-window>
            <gmap-marker
                    v-for="(item, index) in gmarkers"
                    :key="index"
                    :id="item.id"
                    :position="item.position"
                    :draggable="true"
                    :label="item.label"
                    :icon="item.icon"
                    :clickable="true"
                    @drag="updateCoordinates(item.position)" ,
                    @click="toogle(item,index)"

            />
            <gmap-circle
                    v-for="(pin, index) in gmarkers"
                    :key="index"
                    :id="pin.id"
                    :center="pin.position"
                    :radius="radius"
                    :visible="true"
                    :options="{fillColor:pin.fillColor,fillOpacity:pin.fillOpacity, strokeColor: '#FFFFFF',  strokeOpacity: 0.2,}"/>

            <gmap-marker
                    v-for="(item, index) in gmarkers1"
                    :key="index"
                    :id="item.id"
                    :position="item.position"
                    :draggable="true"
                    :label="item.label"
                    :icon="item.icon"
                    :clickable="true"
                    @drag="updateCoordinates(item.position)" ,
                    @click="toogle(item,index)"

            />
        </gmap-map>
    </div>
</template>


<script>
    import {gmapApi} from "vue2-google-maps";
    //import {Stadtteile_Aachen} from "../data";
    import axios from "axios";
    //import data from "../data.json"

    export default {
        props: ["id", "position", "center", "radius", "zoom", "gmarkers"],
        name: "GoogleMap",

        data() {
            return {
                options: {
                    zoom: 12,
                    center: {lat: 50.7753455, lng: 6.0838868},
                    zoomControl: true,
                    mayTypeId: "roadmap"
                },
                infoPosition: {
                    lat: 0,
                    lng: 0
                },
                myTypeId: "roadmap",
                infoContent: '',
                infoWinOpen: false,
                infoCurrentKey: null,
                currentMidx: null,
                currentId: null,
                name: '',
                imgfile: '',
                infoOptions: {
                    pixelOffset: {
                        width: 0,
                        height: -35
                    }
                },

            };
        },

        computed:
            {
                google: gmapApi,

                /*
                gmarkers1() {
                    return Stadtteile_Aachen.map(({label, location: {lat, lon}, name, prev, icon}) => ({
                        label: {
                            text: label,
                            color: '#333',
                            fontWeight: 'bold',
                            fontSize: '30px'
                        },
                        position: {
                            lat: lat,
                            lng: lon,
                        },
                        name,
                        prev,
                        icon,
                    }));
                },
                */
                // eslint-disable-next-line vue/no-dupe-keys
                /*markers() {
                    return this.map.locations.map(
                        ({label, location: {lat, lon}}) => ({
                            label,
                            position: {
                                lat: lat,
                                lng: lon
                            }
                        }))
                },*/
            },


        watch: {},
        methods:
            {

                initMap() {

                    // console.log("initMap");
                    this.mapOptions = {
                        center: {lat: 40.7753455, lng: 3.0838868},
                        zoom: 17,
                        mapTypeId: 'roadmap'
                    };

                },
                initialize() {
                    // eslint-disable-next-line no-console
                    console.log("Initialize");

                    //this.initMap();

                }
                ,
                toogle: function (marker, idx) {
                    this.infoPosition = marker.position;
                    this.infoContent = this.getInfoWindow(marker);
                    this.Name = marker.name;
                    this.imgfile = marker.img;
                    //check if its the same marker that was selected if yes toggle
                    if (this.currentMidx === idx) {
                        this.infoWinOpen = !this.infoWinOpen;
                    }
                    //if different marker set infowindow to open and reset current marker index
                    else {
                        this.infoWinOpen = true;
                        this.currentMidx = idx;
                    }
                },

                created() {
                    this.gmarkers.push({
                        position: this.center,
                        icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
                    });
                },

                closeInfoWindow() {
                    this.infoWinOpen = false;
                    this.googledefault();
                },

                googledefault() {
                    this.center = {
                        lat: 50.7753455,
                        lng: 6.0838868

                    };
                },

                getImgUrl(pic) {
                    return require("../images/" + pic)
                },


                updateCoordinates(location) {
                    this.coordinates = {
                        lat: location.latLng.lat(),
                        lng: location.latLng.lng(),
                    }
                },

                updatePlace(place) {
                    if (place && place.geometry && place.geometry.location) {
                        var marker = this.addMarker();
                        marker.position.lat = place.geometry.location.lat();
                        marker.position.lng = place.geometry.location.lng();
                    }
                }
                ,

                updateZoom(zoom) {
                    this.zoom = zoom;
                }
                ,
                updateradius(radius) {
                    return this.radius = radius;
                },
                getInfoWindow: function (marker) {

                    return (
                        `<div class="Info">
                        <div class="Content">
                            <table style="width:100%">
                                <tr style="position: relative;bottom: 10px;">
                                <th style="font color=#0000FF">Wichtige Informationen: </th>
                                <td>${marker.content}</td>
                                </tr>

                                <tr style="position: relative;bottom: 5px;">
                                <th style="color=#FF0000" >Freizeit:</th>
                                <td>${marker.content2}
                                <a href="www.google.de" >Informationsangebot 1</a>
                                </td>
                                </tr>

                                <tr style="position: relative;top: 5px;"">
                                <th style="color=#FF0000" >Andere wichtige Informationen:</th>
                                <td>${marker.content1}
                                <a href="www.google.de" >wichtige Information </a>
                                </td>
                                </tr>
                            </table>
                        </div>
                </div>`
                    );
                }
                ,


            },

        mounted: function () {
            //console.log('Get Request');
            this.initialize();
            axios
                .post('api/result')
                .then(response => {
                    this.gmarkers = response.data;
                    // eslint-disable-next-line no-console
                    console.log(response.data);
                    alert("Gmap Daten wurden erfolgreich übertragen!");
                })
                .catch(e => alert(e), alert("Kein Get-Empfang"));
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
        left: 1119px;
        bottom: 38px;
    }

    #btn-filter {
        width: 100px;
    }

    .google {
        text-align: left;
        margin-left: 10px;
        margin-top: 55px;
        width: 1478px;
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
        left: 820px;
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
        font-size: 2.5rem;
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

    .bonbon:hover {
    }

    .bonbon:focus {
        box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px, inset rgba(0, 0, 0, 0.15) 0px -10px 20px;
    }

</style>