<template lang="html">

    <div id="parentx">
        <div class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <vs-button @click="active=!active" color="dark" class="vs-component vs-button vs-button-primary vs-button-filled">Menu</vs-button>
            <vs-sidebar parent="body" default-index="1" color="dark" class="sidebarx" spacer v-model="active"><img src="@/assets/logo_transparent.png" width="130" height="115" alt="logo">

                <vs-sidebar-item index="1"><i class="fas fa-home"></i>
                    <router-link to="/" class="nav-link active">Home</router-link>
                </vs-sidebar-item>

                <vs-sidebar-item index="2"><i class="fas fa-heart"></i>
                    <router-link to="/show-preference" class="nav-link active">Präferenzen</router-link>
                </vs-sidebar-item>


                <vs-divider position="left"><i class="fas fa-angle-double-down"></i>

                </vs-divider>

                <vs-sidebar-item index="3"><i class="fas fa-user-friends"></i>
                    <router-link to="/result" class="nav-link active">Kontakt</router-link>
                </vs-sidebar-item>

                <vs-sidebar-item index="4"><i class="fas fa-external-link-square-alt"></i>
                    <router-link to="/result" class="nav-link active">Impressum</router-link>
                </vs-sidebar-item>

                <div class="footer-sidebar" slot="footer">
                    <vs-button color="danger" type="filled"><a href="https://www.generali.de/ueber-generali/ueber-uns/">Generali</a></vs-button>
                </div>
            </vs-sidebar>
            <a href="/"><img src="@/assets/logo_transparent.png" width="130" height="115" alt="logo"></a>
        </div>

    </div>
    <!-- <div id="navigation">
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

     </div>-->
</template>

<script>

    export default {
        data:()=>({
            active:false,
        })
    }

</script>




<style >

    #parentx{
        overflow: hidden;
        height: 500px;
        position: relative;
        box-sizing: border-box;
        outline: #80081e;
    }

    #parentx img{
        text-align: center;
    }

   /* .header-sidebar{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }*/


    .footer-sidebar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border: 0px solid rgba(0, 0, 0, 0) !important;
        border-left: 1px solid rgba(0, 0, 0, .07) !important;
        border-radius: 0px !important;
    }

    .navbar{
            text-transform: uppercase;
            font-weight: 700;
            font-size: .9rem;
            letter-spacing: .1rem;
            background-color: rgba(111, 111, 111, 0) !important;
        }
    /*
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
            }*/
</style>
