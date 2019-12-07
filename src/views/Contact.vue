<template>
    <div id="show" class="offset">
        <div class="landingShow">
            <div class="show-wrap">
                <div class="show-inner">
                </div>
            </div>
        </div>
        <div class="caption-show text-center">
            <h1>Kontaktdaten</h1>
        </div>
        <div class="sliderBackground1"></div>

    </div>
</template>



<script>

    import Contact from '@/views/Contact'


    export default
    {
        name: Contact,
    };




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
        font-size: 3.8rem;
        font-weight: 700;
        letter-spacing: .3rem;
        text-shadow: .1rem .1rem .8rem black;
        padding-bottom: .1rem;
    }

    .caption-show h3{
        font-size: 2rem;
        text-shadow: .1rem .1rem .5rem black;
        padding-bottom: 1.6rem;
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

    .sliderBackground1{
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
        background-image: url("../assets/dustin-lee-jLwVAUtLOAQ-unsplash.jpg");
        background-color: rgba(0,0,0,0.4);
        background-blend-mode: darken;
        background-repeat: no-repeat;
    }



    .vue h4
    {
        margin-left: 39px;
    }

    #show
    {
        background-color: #b3b3b3;

    }

    #show textarea{
        border: 1px solid #C5281C;
        border-radius: 6px;
    }

    #box label
    {
        font-variant: small-caps;
    }

    #box input
    {
        border: 1px solid #C5281C;
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


    .form-group h3{
        color: white;
    }
</style>
