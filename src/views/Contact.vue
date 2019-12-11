<template>
    <div id="show" class="offset">
        <div class="landingShow">
            <div class="show-wrap">
                <div class="show-inner">
                </div>
            </div>
        </div>
        <div class="caption-contact text-center">
            <h1>Kontaktdaten</h1>
        </div>
        <div class="sliderBackground1">
        </div>
        <div class="sliderFront1">
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col">
                        <article>
                            <h3>FH Aachen</h3>
                            <p>Bayernallee 11</p>
                            <p>52066 Aachen</p>
                            <p>Postfach10 05 60</p>
                            <p>52005 Aachen</p>
                            <p>T +49.241.6009 0</p>
                            <p>F +49.241.6009 51090</p>
                        <div class="map-responsive">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.1205165270817!2d6.094655315270689!3d50.75479897951844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41722d05f1737db7%3A0x9a7eb562b5677c74!2sFH%20Aachen!5e0!3m2!1sde!2sde!4v1575736392035!5m2!1sde!2sde" width="380" height="280" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                        </div>
                        </article>
                    </div>
                    <div class="col-3"></div>
                </div>
                <div>
                    <div class="row">
                        <div class="col-3"></div>
                    <div class="col" id="generali">
                        <article>
                            <h3>Generali</h3>
                            <p>Bayernallee 11</p>
                            <p>52066 Aachen</p>
                            <p>Postfach10 05 60</p>
                            <p>52005 Aachen</p>
                            <p>T +49.241.6009 0</p>
                            <p>F +49.241.6009 51090</p>
                            <div class="map-responsive">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.1205165270817!2d6.094655315270689!3d50.75479897951844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41722d05f1737db7%3A0x9a7eb562b5677c74!2sFH%20Aachen!5e0!3m2!1sde!2sde!4v1575736392035!5m2!1sde!2sde" width="380" height="280" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                            </div>
                        </article>
                    </div>
                        <div class="col-3"></div>
                    </div>
        </div>
    </div>
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

    article {
        -webkit-column-width: 150px;
        -moz-column-width: 150px;
        column-width: 150px;
    }

    #generali{
        margin-top: 50px;
    }


    .sliderFront1 h3{
        color: white;
        text-align: center;
        font-size: 2rem;
        text-shadow: .1rem .1rem .5rem black;
    }

    .sliderFront1 p{
        color: white;
        text-align: center;
        text-shadow: .1rem .1rem .5rem black;
    }

    .sliderFront1{
        position: relative;
        margin-bottom: 15%;
        margin-top: 10%;
    }
    @media screen and (max-width: 60em){
        .map{
            width: 100%;
            text-shadow: .1rem .1rem .5rem black;
        }}

    .caption-contact{
        width: 100%;
        top: 20%;
        z-index: 1;
        color: #ffffff;
        text-transform: uppercase;
        background-size: cover;
        margin-bottom: 100px;
        position: absolute;

    }

    .caption-contact h1{
        font-size: 3.8vw;
        font-weight: 700;
        letter-spacing: .3vw;
        text-shadow: .1vw .1vw .8vw black;
        padding-bottom: .1vw;
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
    background-blend-mode: darken}

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

    .map-responsive{
        overflow:hidden;
        padding-bottom:56.25%;
        position:relative;

    }
    .map-responsive iframe{
        left:0;
        top:0;
        height:100%;
        width:100%;
        position:absolute;
    }

</style>
