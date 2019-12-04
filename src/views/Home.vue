<template>
   <div id="start">
       <div class="landing">
           <div class="home-wrap">
               <div class="home-inner">
               </div>
           </div>
       </div>
       <div class="caption text-center">
           <h1>Willkommen bei First Move</h1>
           <h3>Suche deine optimale Wohngegend</h3>
           <router-link to="#cityinput" class="btn btn-outline-light btn-lg">Los Geht's</router-link>
       </div>
       <br>

        <div class="text-center cityinput offset" id="cityinput">
            <h2>Wohin ziehst du?</h2>
            <form @submit="getCity()">
                <label for="searchcity"></label>
                <input type="text" placeholder="Stadt/PLZ" name="search" v-model="city" id ="searchcity" size="40">
                <br>
                <router-link to="/show-preference" type="submit" class="btn btn-outline-dark btn-lg">Weiter</router-link>
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
                    .post('/api/user', {
                        city: this.city,
                    })
                    .then(function () {
                        alert("Stadt wurde dem Benutzer erfolgreich hinzugefügt!");
                    })
                    .catch(e => alert(e));
            }
        }
    }
</script>


<style>


    .caption{
        width: 100%;
        top: 38%;
        z-index: 1;
        color: #ffffff;
        text-transform: uppercase;
        background-size: cover;
        margin-bottom: 100px;
        position: absolute;

    }

    .caption h1{
        font-size: 3.8rem;
        font-weight: 700;
        letter-spacing: .3rem;
        text-shadow: .1rem .1rem .8rem black;
        padding-bottom: .1rem;
    }

    .caption h3{
        font-size: 2rem;
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
       background-position: center center;
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



</style>