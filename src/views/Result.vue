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

        <div class="form-group google">

            <div class="map-container">
                <GmapMap :center="center" @center_changed="updateCenter" :zoom="zoom" @zome_changed="updateZoom"
                         ref="map">

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
                                                <h3><i class="fas fa-map-marker-alt"></i> {{Name}}</h3>
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
                        <button class="bonbon" @click="closeInfoWindow()">Close</button>

                    </gmap-info-window>
                    <GmapMarker
                            :key="index"
                            v-for="(item, index) in markers"
                            :id="item.id"
                            :zoom=item.zoom
                            :position="item.position"
                            :draggable="true"
                            :label="item.label"
                            :icon="item.icon"
                            :clickable="true"
                            @drag="updateCoordinates(item.position)" ,
                            @click="toogle(item,id)"

                    />
                    <GmapCircle
                            v-for="(pin, index) in markers"
                            :key="index"
                            :id="pin.id"
                            :center="pin.position"
                            :radius="pin.radius"
                            :visible="true"
                            :options="{fillColor:pin.fillColor,fillOpacity:pin.fillOpacity}">

                    </GmapCircle>


                </GmapMap>


            </div>


        </div>
        <!--
         <div class="vue-map-container">
         <GmapMap :center="center" :zoom="zoom" :map-type-id="mapTypeId" ref="google-maps">
             <GmapMarker
                     v-for="(item, index) in markers"
                     :key="index"
                     :position="item.position"
                     :clickable="true"
                     :icon="markerOptions"
                     @click="center = item.position"

             />
             <GmapCircle
                     v-for="(pin, index) in markers"
                     :key="index"
                     :center="pin.position"
                     :radius="10"
                     :visible="true"
                     :options="{fillColor:'red',fillOpacity:0.8}"
             ></GmapCircle>
         </GmapMap>

         </div>
             -->
        <!--
                        <div class="vue-map-container">
                        <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="16">
                            <GmapMarker
                                    v-for="(item, index) in markers"
                                    :key="index"
                                    :position="item.position"
                                    @click="center = item.position"
                            />
                        </GmapMap>
                        </div>
            -->
        <!--
            <div class="google-map" ref="googleMap"></div>
             <template v-if="Boolean(this.google) && Boolean(this.map)">
                      <slot
                                 :google="google"
                                 :map="map"
                         />
                     </template>
                     -->
        <!--
                    <div class="google-maps">
                        <iframe id="map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10094.445629951531!2d6.084487735032457!3d50.76423872231622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c09be02b9ad17f%3A0x262760fd637fdee1!2s52066%20Burtscheid!5e0!3m2!1sde!2sde!4v1573582989242!5m2!1sde!2sde" width="780" height="600" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                    </div>
         -->
        <div class="col-md-3">
            <fieldset>
                <details>
                    <summary id="City1"> Stadt Bereich 1:</summary>
                    <div id="box_green">
                        <h3 class="Pro">Pro:</h3>
                        <table style="width:100%">
                            <tr>
                                <th><i class="fas fa-check"/></th>
                                <th>Gute Busanbindung</th>
                            </tr>
                            <tr>
                                <th><i class="fas fa-check-square"/></th>
                                <th>Nähe Bahnhof</th>
                            </tr>
                        </table>

                        <br>
                        <h3 class="Contra">Contra:</h3>
                        <table>
                            <tr>
                                <th><i class="fas fa-times-circle"/></th>
                                <th> Innenstadt</th>
                            </tr>
                        </table>

                        <br>
                    </div>
                </details>

                <details>
                    <summary id="City2"> Stadt Bereich 2:</summary>
                    <div id="box_orange">
                        <h3 class="Pro">Pro:</h3>
                        <table style="width:100%">
                            <tr>
                                <th><i class="fas fa-check"/></th>
                                <th>Gute Busanbindung</th>
                            </tr>
                            <tr>
                                <th><i class="fas fa-check-square"/></th>
                                <th>Nähe Bahnhof</th>
                            </tr>
                        </table>

                        <br>
                        <h3 class="Contra">Contra:</h3>
                        <table>
                            <tr>
                                <th><i class="fas fa-times-circle"/></th>
                                <th> Innenstadt</th>
                            </tr>
                        </table>

                        <br>
                    </div>
                </details>

                <details>
                    <summary id="City3"> Stadt Bereich 3:</summary>
                    <div id="box_red">
                        <h3 class="Pro">Pro:</h3>
                        <table style="width:100%">
                            <tr>
                                <th><i class="fas fa-check"/></th>
                                <th>Gute Busanbindung</th>
                            </tr>
                            <tr>
                                <th><i class="fas fa-check-square"/></th>
                                <th>Nähe Bahnhof</th>
                            </tr>
                        </table>

                        <br>
                        <h3 class="Contra">Contra:</h3>
                        <table>
                            <tr>
                                <th><i class="fas fa-times-circle"/></th>
                                <th> Innenstadt</th>
                            </tr>
                        </table>

                        <br>
                    </div>
                </details>

            </fieldset>
        </div>
    </div>
</template>

<!--Load the API from the specified URL
* The async attribute allows the browser to render the page while the API loads
* The key parameter will contain your own API key (which is not needed for this tutorial)
* The callback parameter executes the initMap() function
-->
<script>
    /*
    let map;
    let markersArray=[];


    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 50.775346, lng: 6.083887},
            zoom: 25
        });
    }

    function addMarker (latLng , color)
    {
        let url = "http://maps.google.com/mapfiles/ms/icons/";
        url += color + "-dot.png";
        let marker = new google.maps.Marker ({
            map:map,
            position:latLng,
            icon:{
                url:url
            }
        });
        markersArray.push(marker);
    }*/

    export default {
        props: ["marker"],
        data() {
            return {
                map: null,
                mapLoaded: false,
                center: { lat: 50.7753455, lng: 6.0838868},
                zoom: 17,
                gestureHandling: 'none',
                zoomControl: true,
                mapTypeId: "terrain",
                picture: null,
                infoPosition: {
                    lat: 0,
                    lng: 0
                },
                infoContent: '',
                infoWinOpen: false,
                infoCurrentKey: null,
                currentMidx: null,
                currentId: null,
                Name: '',
                imgfile: '',
                infoOptions: {
                    pixelOffset: {
                        width: 0,
                        height: -35
                    }
                },
                markers: [
                    {
                        Id: "1",
                        name: "City1",
                        content: "Der Aachener Dom, auch Hoher Dom zu Aachen, Aachener Münster oder Aachener Marienkirche, ist die Bischofskirche des Bistums Aachen und das bedeutendste Wahrzeichen der Stadt Aachen",

                        content1: "Hier steht ein Text zu  Angeboten und Informationslinks",

                        content2: "Radwandern\n" +
                            "\n" +
                            "Erradeln Sie Aachen und sein Umland auf vielen schönen Nebenstraßen - z.B. nach den folgenden Routenvorschlägen ",
                        position: {
                            lat: 50.7753455,
                            lng: 6.0838868,
                        },

                        icon: {
                            url: "https://i.ibb.co/Gtx9pyv/home.png",
                            scaledSize: {width: 48, height: 55},
                            labelOrigin: {x: 16, y: -10}
                        },
                        img: require("../images/aachendom.jpeg"),
                        radius: 55,
                        fillOpacity: "0.7",
                        fillColor: "#00FF00"
                    },

                    {
                        Id: "2",
                        name: "City2",
                        content: "Das ist Content von Marker 2",
                        position: {
                            lat: 50.774720, lng: 6.085920
                        },
                        icon:
                            {
                                url: "https://i.ibb.co/chfqBTq/home-location-marker-2.png",
                                scaledSize: {width: 50, height: 48},
                                labelOrigin: {x: 16, y: -10}
                            },
                        img: require("../images/aachenjva.jpeg"),
                        radius: 50,
                        fillOpacity: "0.6",
                        fillColor: "#40ff00",
                    },


                    {
                        Id: "3",
                        name: "City3",
                        content: 'Das ist Content von Marker 3',
                        position: {
                            lat: 50.776026, lng: 6.089590
                        },
                        icon:
                            {
                                url: "https://i.ibb.co/chfqBTq/home-location-marker-2.png",
                                scaledSize: {width: 50, height: 48},
                                labelOrigin: {x: 16, y: -10}
                            },
                        img: require("../images/aachenstadt.jpeg"),
                        radius: 45,
                        fillOpacity: "0.7",
                        fillColor: "#ccff33",

                    },

                ],

                circle: [
                    {
                        id: "1",
                        position: {
                            lat: 50.7753455,
                            lng: 6.0838868,
                        },
                        radius: 35,

                        fillOpacity: "0.6",
                        fillColor: "#00FF00"
                    },
                    {
                        id: "2",
                        position: {
                            lat: 50.774720, lng: 6.083920
                        },
                        radius: 26,
                        fillOpacity: "0.6",
                        fillColor: "#56FF44",
                    },
                    {
                        id: "3",
                        position: {
                            lat: 50.776026, lng: 6.089590
                        },
                        radius: 26,
                        fillOpacity: "0.6",
                        fillColor: "#E2FF00",
                    }

                ]
                /*
                markers: [
                    { Id: 1, name: "Oslo", position: {lat: 50.7753455, lng: 6.0838868 },},
                    { Id: 2, name: "Stockholm", position: { lat: 50.774720, lng: 6.083920} },
                    { Id: 3,  name: "Copenhagen", position: { lat: 50.776026, lng: 6.089590 }},
                    { Id: 4, name: "Berlin", position: { lat: 50.775026, lng: 6.0855908 } },
                    { Id: 5, name: "Paris", position: { lat: 50.772026, lng: 6.088590 } },

                ],
                */

                // draw Markers

            }
        },
        methods: {


            updateCoordinates(location) {
                this.coordinates = {
                    lat: location.latLng.lat(),
                    lng: location.latLng.lng(),
                }
            },

            //set after merker end drag
            gMapFunc(evnt) {
                this.jdata = {"geo": {"lat": evnt.lat(), "lng": evnt.lng()}};
            },


            toogle: function (marker, idx) {
                this.infoPosition = marker.position;
                this.infoContent = this.getInfoWindow(marker);
                this.Name = marker.name;
                this.imgfile = marker.img;
                //check if its the same marker that was selected if yes toggle
                if (this.currentMidx == idx) {
                    this.infoWinOpen = !this.infoWinOpen;
                }
                //if different marker set infowindow to open and reset current marker index
                else {
                    this.infoWinOpen = true;
                    this.currentMidx = idx;
                }
            },

            closeInfoWindow() {
                this.infoWinOpen = false;
                this.googledefault();
            },

            googledefault()
            {
                this.center = {
                    lat: 50.7753455,
                    lng: 6.0838868

                };
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
                )
            },

            getImgUrl(pic) {
                return require("../images/" + pic)
            },

            init: function () {
                var mapOptions = {
                    center: new google.maps.LatLng(46.951081, 7.438637),
                    zoom: 13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

                var marker = new google.maps.Marker({
                    icon: {
                        url: 'http://mt.google.com/vt/icon?psize=27&font=fonts/Roboto-Bold.ttf&color=ff135C13&name=icons/spotlight/spotlight-waypoint-a.png&ax=43&ay=50&text=•&scale=1'
                    },
                    position: new google.maps.LatLng(46.951081, 7.438637),
                    title: "My Custom Marker",
                    animation: google.maps.Animation.DROP
                });

                // To add the marker to the map, call setMap();
                marker.setMap(map);
            },

            mapRclicked(mouseArgs) {
                const createdMarker = this.addMarker();
                createdMarker.position.lat = mouseArgs.latLng.lat();
                createdMarker.position.lng = mouseArgs.latLng.lng();
            },

            addMarker(id, name, lat, lng, color) {

                this.markers.push(
                    {
                        id: "id",
                        name: "name",
                        position: {
                            lat: lat, lng: lng
                        },
                        opacity: 1,
                        draggable: true,
                        enabled: true,
                        clicked: 0,
                        rightClicked: 0,
                        color: color,
                        icon: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png",

                    });
                return this.markers;
            },
            updateCircle(prop, value) {
                if (prop === 'radius') {
                    this.radius = value;
                } else if (prop === 'bounds') {
                    this.circleBounds = value;
                }
            }
            ,
            updatePlace(place) {
                if (place && place.geometry && place.geometry.location) {
                    var marker = this.addMarker();
                    marker.position.lat = place.geometry.location.lat();
                    marker.position.lng = place.geometry.location.lng();
                }
            }
            ,

            updateCenter(center) {
                this.center = {
                    lat: center.lat(),
                    lng: center.lng()
                };
            },
            updateZoom(zoom) {
                this.zoom = zoom;
            },
        },
    };
</script>


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

.Content
{
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
        box-shadow: inset 0px 0px 6px #fff,inset 0px -1px 6px #fff;
        border: 1px solid #5ea617;
        border-radius: 1em;
        margin: 1em;
    }

    .bonbon.rot {
        background: linear-gradient(to bottom, white , red);
    }

    .bonbon.orange {
        background: linear-gradient(to bottom, white, orange);
    }

    .bonbon:hover,
    .bonbon:focus {
        box-shadow:rgba(0,0,0,0.7) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
    }
</style>