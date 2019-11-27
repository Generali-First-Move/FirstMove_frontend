<template>


    <div id="navigation">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="/"><img src="@/assets/logo_transparent.png" width="130" height="115" alt="logo"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarResponsive" >
            <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/show-preference" class="nav-link active">Präferenzen</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/result" class="nav-link active">Kontakt</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/result" class="nav-link active">Impressum</router-link>
                    </li>
                </ul>
        </div>
    </nav>

    </div>



</template>

<!-- End of Navigation -->


<script>



</script>




<style >



    .navbar{
        text-transform: uppercase;
        font-weight: 700;
        font-size: .9rem;
        letter-spacing: .1rem;
        background-color: rgba(111, 111, 111, 0.9) !important;
    }

    .navbar-brand img{
        height: 100%;
    }

    .navbar-nav{
        padding-right: 8rem;
    }

    .navbar-dark .navbar-nav .nav-link{
        color: white;
        padding-top: .8rem;
    }

    .navbar-dark .navbar-nav .nav-item.active,
    .navbar-dark .navbar-nav .nav-link:hover {
        color: #c5281c;
    }







</style>