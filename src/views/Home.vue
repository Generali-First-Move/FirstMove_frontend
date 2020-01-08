<template>
    <div id="start">
        <div class="landing">
            <div class="home-wrap">
                <div class="home-inner">
                </div>
            </div>
        </div>
        <b-nav class="caption text-center"  v-b-scrollspy:nav-scroller>
            <h1>Willkommen bei First Move</h1>
            <h3>Suche deine optimale Wohngegend</h3>
            <a href="#cityinput" @onclick="scrollIntobutton" class="btn btn-outline-light btn-lg">Los Geht's</a>
        </b-nav>
        <br>

        <div class="text-center cityinput offset caption" id="cityinput" ref="content" style="position:relative; color:black; height:300px;">
            <h2>Wohin ziehst du?</h2>
            <form @submit="getCity()" action="#/show-preference">
                <div class="col-14">
                    <label for="searchcity"></label>
                    <input type="text" placeholder=" Stadt" name="search" v-model="city" id ="searchcity" size="40">
                </div>
                <div class="col-14">
                    <button @click="getCity"  type="submit" class="btn btn-outline-dark btn-lg">Weiter</button>
                </div>
            </form>
        </div>
    </div>
</template>




<script>
    import axios from 'axios'

    export default {
        data: function () {
            return{
                city: ""
            }
        },

        methods: {
            getCity() {
                axios
                    .post('api/user', {
                        city: this.city,
                    })
                    .then(function () {
                        alert("Stadt wurde dem Benutzer erfolgreich hinzugefügt!");
                    })
                    .catch(e => alert(e));
            },
            scrollIntobutton(evt) {
                evt.preventDefault()
                const href = evt.target.getAttribute('href')
                const el = href ? document.querySelector(href) : null
                if (el) {
                    this.$refs.content.scrollTop = el.offsetTop
                }
            }
        }
    }
</script>


<style>


    .caption{
        width: 100%;
        top: 30%;
        z-index: 1;
        color: #ffffff;
        text-transform: uppercase;
        background-size: cover;
        margin-bottom: 100px;
        position: absolute;

    }

    .caption h1{
        font-size: 3.8vw;
        font-weight: 700;
        letter-spacing: .3rem;
        text-shadow: .1rem .1rem .8rem black;
        padding-bottom: .1rem;
    }
    .caption h2 {
        font-size: 2rem;
    }
    .caption h3{
        font-size: 2vw;
        text-shadow: .1rem .1rem .5rem black;
        padding-bottom: 1.6rem;
    }

    .btn-lg{
        border-width: medium;
        border-radius: 0;
        padding: .6rem 1.3rem;
        font-size: 1.1rem;
    }

    .cityinput{
        background: white;
        width: 100%;
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
    /*--- Fix for Fixed Navbar jumping on scroll --*/
    .fixed-top  {
        -webkit-backface-visibility: hidden;
    }
    /*--- Fixed Landing Page Section --*/
    .landing {
        width: 100%;
        height: 100vh;
        display: table;
        z-index: -1;
    }
    .home-wrap {
        clip: rect(0, auto, auto, 0);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .home-inner {
        position: fixed;
        display: table;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: 25% 25%;
        background-repeat: no-repeat;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        will-change: transform;
        background-image: url("../assets/yingchou-han-IJrIeCs3D4g-unsplash.jpeg");
        background-color: rgba(0,0,0,0.4);
        background-blend-mode: darken;
    }
    /*--- iOS Fixed Background Image --*/
    .fixed-background {
        position: relative;
        width: 100%;
    }
    .fixed-wrap {
        clip: rect(0, auto, auto, 0);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -999!important;
    }
    .fixed {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        will-change: transform;
    }
    #searchcity{
        border-radius: 6px;
        height: 50px;
        border-color: black;
        width: 50%;
    }
</style>