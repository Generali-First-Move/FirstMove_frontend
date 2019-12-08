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
        <div class="sliderBackground1">
        </div>
        <div class="sliderFront1">
            <div class="contact">
                <article>
                    <h3>FH Aachen</h3>
                    <p>Bayernallee 11</p>
                    <p>52066 Aachen</p>
                    <p>Postfach10 05 60</p>
                    <p>52005 Aachen</p>
                    <p>T +49.241.6009 0</p>
                    <p>F +49.241.6009 51090</p>

                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.1205165270817!2d6.094655315270689!3d50.75479897951844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41722d05f1737db7%3A0x9a7eb562b5677c74!2sFH%20Aachen!5e0!3m2!1sde!2sde!4v1575736392035!5m2!1sde!2sde" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
                </article>
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

    .contact h3{
        color: white;
        text-align: center;
        font-size: 2rem;
        text-shadow: .1rem .1rem .5rem black;
    }

    .contact p{
        color: white;
        text-align: center;
        text-shadow: .1rem .1rem .5rem black;
    }

    .sliderFront1{
        position: relative;
        margin-top: 190px;
    }

    .map{
        text-align: center;
        text-shadow: .1rem .1rem .5rem black;
    }

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



</style>
