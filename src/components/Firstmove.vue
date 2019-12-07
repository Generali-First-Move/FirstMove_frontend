<template>
        <!--<div class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">-->

                <div id="navbarResponsive">

                 <vs-button @click="active=!active" color="danger" id="fixednavbutton" data-target="#navbarResponsive" type="filled">Menu</vs-button>
                    <a class="navbar-brand" href="/"><img src="@/assets/logo_transparent_white.png" width="110" height="100" alt="logo"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                 <vs-sidebar parent="body" default-index="1" color="dark" class="sidebarx" spacer v-model="active">

                     <div class="header-sidebar" slot="header">
                         <img src="@/assets/logo_transparent.png" width="130" height="115" alt="logo">
                     </div>

                     <ul class="navbar-nav ml-auto" id="sidebar">
                         <li class="nav-item">
                             <router-link to="/" class="nav-link active"><i class="fas fa-home"></i> Home</router-link>
                         </li>
                         <vs-divider position="left"></vs-divider>
                         <li class="nav-item">
                             <router-link to="/show-preference" class="nav-link active"><i class="fas fa-heart"></i> Präferenzen</router-link>
                         </li>
                         <vs-divider position="left"></vs-divider>
                         <li class="nav-item">
                             <router-link to="/contact" class="nav-link active"><i class="fas fa-user-friends"></i> Kontakt</router-link>
                         </li>
                         <vs-divider position="left"></vs-divider>
                         <li class="nav-item">
                             <router-link to="/result" class="nav-link active"><i class="fas fa-external-link-square-alt"></i> Impressum</router-link>
                         </li>
                     </ul>
                     <div class="footer-sidebar" slot="footer">
                         <button @click="active=!active" color="dark" class="btn btn-outline-danger" data-target="#navbarResponsive" id="bu"><i id="logo" class="fas fa-arrow-left"></i></button>
                     </div>
                 </vs-sidebar>

             </div>

               <!-- <vs-col class="col-1">
                    <a class="navbar-brand" href="/"><img src="@/assets/logo_transparent_white.png" width="100" height="90" alt="logo"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </vs-col>-->

</template>

<script>

    export default {
        name: "Firstmove",
        data:()=>({
            active:false,
            los: false
        })

    }
</script>




<style lang="stylus">

    /* Sidebar style*/

  .header-sidebar{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-left: 10px;
    }

    .footer-sidebar
    {

        margin-right: 0px;
        border: 0px solid rgba(0, 0, 0, 0) !important;
        border-left: 1px solid rgba(0, 0, 0, .07) !important;
        border-radius: 2px !important;
    }

    #logo {
        font-size: 1.6rem;
        margin: 0px;
        color: white;
    }

    #bu{
        width: 180px;
        height: 45px;
        margin-right: 0px;
        margin-left: 25px;
        border: 2px solid white !important;
        border-radius: 10px !important;
    }

    /* normal navbar header*/
    .navbar {
            text-align: left;
            font-weight: 200;
            font-size: .9rem;
            letter-spacing: .1rem;
            background-color: rgba(111, 111, 111, 0) !important;
    }

    .header-sidebar{
        padding: 0px;
    }

            .navbar-brand img{
                right: 10px;
                margin-top: 0%;
                background-color: rgba(111, 111, 111, 0.5) !important;
                border-radius: 15px;
                z-index: +100;
                position: fixed;

            }

            .navbar-nav{
                padding-left: 10px;
            }

            .navbar-dark .navbar-nav .nav-link{
                color: white;
                padding-top: .8rem;
            }

            .navbar-dark .navbar-nav .nav-item.active,
            .navbar-dark .navbar-nav .nav-link:hover {
                color: #c5281c;
            }

    .navbar-nav .nav-link:hover{
        color: black;
    }

    .nav-link
    {
        color: #80081e;
    }

    #fixednavbutton{
        position: fixed;
        z-index: +100;
        border-width: medium;

        padding: .6rem 1.3rem;
        font-size: 1.1rem;
        background-color: rgba(111, 111, 111, 0.5) !important;
        border-radius: 15px;
        color: white;
        margin-left: 10px;
        margin-top: 25px;
    }
</style>
